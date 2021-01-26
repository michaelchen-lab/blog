---
title: "MenuCarlo: Designing the Backend"
date: "20210126"
---
MenuCarlo is an open-source web app which helps F&B owners optimize their menus by analyzing their past customer transactions. During my internship at AI Singapore, I was appointed lead developer of this project. Our goal is to empower small F&B establishments by putting the power of data science in their hands.

I will introduce MenuCarlo's backend architecture and the reasoning behind these choices. 

# Django

MenuCarlo's backend is built with Django for 3 main reasons. 

1. **Python.** Python is our team's language of choice, since we come from a data science background.
2. **Support for Data Science.** MenuCarlo has a strong data science focus. Building our backend in Python gives us access its rich ecosystem.
3. **Django's "batteries included" philosophy.** Since MenuCarlo is a full-fledged web app, complete with a relational database, task scheduling and authentication, Django's neat default tools saves us a ton of development time.

We chose to decouple backend and frontend to support a more dynamic frontend. The Django's template language is unsuitable for the kind of experience we are looking for.

# Django Rest Framework

Django Rest Framework can be considered the de-facto library to use for building API's with Django. It is so widely used it might as well be an official part of Django. But this is for good reason.

CRUD operations are unbelievably simple with DRF. Imagine you have the following in your `models.py`.

```python
class Data(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="analytics")
    start_date = models.DateField()
    end_date = models.DateField()
    data = models.JSONField()
```

Implementing a set of CRUD APIs for `Analytics` is literally 4 lines of code.

```python
class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    permission_classes = [IsAuthenticated]
```

My goal here is just to illustrate the power of DRF's abstractions. This series of [tutorials](https://www.django-rest-framework.org/tutorial/quickstart/) provide a solid introduction to DRF.

Even simple, static APIs can take advantage of DRF, since DRF's permissions classes gives us easy control over who can access the API. 

```python
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view()
@permission_classes([IsAuthenticated])
def print_hello_world(request):
    return Response('hello world')
```

The `api_view` decorator tells DRF this function is an API, while the `permission_classes` function tells DRF only authenticated users can access the function. The authentication itself is handled by Django.

DRF gives developers the flexibility to write custom APIs, while abstracting away unnecessary details.

# JWT Authentication

The textbook answer for using JWT (JSON Web Tokens) is its scalability. I chose JWT simply to learn a new technology. Besides, for our purposes, both JWT and cookie auth will work just fine.

**[Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)** is a plugin for Django Rest Framework. We use this plugin for handling our auth. Just like DRF, SimpleJWT is really easy-to-use. For 90% of use cases, just this [guide](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html) is enough.

For proper separation of concerns, we created an `accounts` app within Django solely for handling authentication.

# Storage

## PostgreSQL

We chose a **relational database** instead of a non-relational one due to the nature of our data. Besides general user information (i.e. username and password), we need to store analytics results, business information and data. While a non-relational DB might be easier in the early stages, it will become a bottleneck once the application becomes more complex. 

**Django's ORM** has strong support for PostgreSQL. While PostgreSQL is largely similar to other relational databases, Django ORM supports most of PostgreSQL's unique features, such as `JSONField`.

## Amazon S3

We use AWS S3 to store our users' historical transactions data. `django-storages` supports S3 and it handles most configurations out-of-the-box. A useful feature of S3 is its caching. Since large data files may need to be pulled repeatedly, this caching layer saves a lot of time.

In our use case, we only needed to configure the default file storage method to S3 in `settings.py`. The steps are outlined [here](https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html).

The selection of S3 is simply because of our prior experience with it. Alternative solutions such as Azure Storage are likely equally functional. I believe any well-established cloud storage solution will work 99% of projects.

# Periodic Tasks

