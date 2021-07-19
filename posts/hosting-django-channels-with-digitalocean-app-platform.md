---
title: Hosting Django Channels with DigitalOcean App Platform
date: "20210719"
image: /public/images/uploads/do_computer.jpg
description: This tutorial focuses on the ASGI-specific elements of the
  deployment process for Django on DigitalOcean's App Platform.
---
![](/images/uploads/do_computer.jpg)

DigitalOcean's App Platform, launched in late 2020, is a modern PaaS solution built for easy deployments. Its biggest competitors are Salesforce's Heroku and AWS. 

Django, on the other hand, is a well-established Python web framework. Part of the Django ecosystem is the Channels project, aimed at allowing Django developers to go beyond HTTP - to work with WebSockets and other real-time protocols.

However, deploying Django Channels require a slightly different configuration. Traditional HTTP can be deployed with WSGI, while Channels requires ASGI due to its asynchronous nature. 

Here's a brief guide on how to deploy Django Channels using DigitalOcean's App Platform.

## Configuring ASGI

To configure your ASGI application, create a file like `(myproject)/asgi.py`. 

Here's an example of what your `asgi.py` file might look like.

```python
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
from django.core.asgi import get_asgi_application

## Call get_asgi_application() before everything else to initialize Django ASGI application.
django_asgi_app = get_asgi_application()

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

import core.routing

application = ProtocolTypeRouter({
    # Handle traditional HTTP requests with ASGI 
    "http": django_asgi_app,
    "websocket": AuthMiddlewareStack(
        URLRouter(
            core.routing.websocket_urlpatterns
        )
    )
})
```

## Setting up Redis backend

Redis backend serves as a communication layer between the central servers. First, install it.

```
pip install -U channels_redis
```

Second, add your Redis backend to `settings.py` like so:

```python
CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [(your_redis_url)],
        },
    },
}
```

## Installing Daphne

Daphne is a Python ASGI server maintained by contributors to the Django project. To use Daphne in your Channels project, simply install it with `pip`.

```
pip install -U daphne
```

## Running Daphne on DigitalOcean App Platform

For Channels to work on App Platform, we need to make sure when the App Platform runs the project, it uses Daphne. Thus, configure your Run Command as such.

![daphne -b 0.0.0.0 -p 8080 backend.asgi:application](/images/uploads/do_run_command.png)

DigitalOcean allows connections on port 8080 by default and only works on route 0.0.0.0. Also, don't forget to replace `project` with your own Django project's name.

This article, published on DigitalOcean, talks about [deploying Django ASGI on App Platform](https://www.digitalocean.com/community/tutorials/how-to-deploy-django-to-app-platform). So long as you replace the WSGI/Gunicorn parts of that tutorial with ASGI/Daphne from this article, it provides useful content on interacting with the App Platform as a Django developer.

## Deployed!

If your deployment is successful, your deploy logs on DigitalOcean should show something like this.

![Successful deploy log screenshot](/images/uploads/do_deploy_logs.png)

## Conclusion

This tutorial focuses on the ASGI-specific elements of the deployment process for Django on DigitalOcean's App Platform. Please check out the following resources for more on this topic:

* [Deploy an WSGI Django App on App Platform](https://www.digitalocean.com/community/tutorials/how-to-deploy-django-to-app-platform)
* [Channels docs: Deploying](https://channels.readthedocs.io/en/stable/deploying.html)
* [Django docs: Daphne](https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/daphne/)