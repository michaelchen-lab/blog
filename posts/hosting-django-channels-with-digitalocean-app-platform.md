---
title: Hosting Django Channels with DigitalOcean App Platform
date: "20210719"
image: /avatar.png
description: Hosting Django Channels with DigitalOcean App Platform
---
DigitalOcean's App Platform, launched in late 2020, is a modern PaaS solution built for easy deployments. Its biggest competitors are Salesforce's Heroku and AWS. 

Django, on the other hand, is a well-established Python web framework. Part of the Django ecosystem is the Channels project, aimed at allowing Django developers to go beyond HTTP - to work with WebSockets and other real-time protocols.

However, deploying Django Channels require a slightly different configuration. Traditional HTTP can be deployed with WSGI, while Channels requires ASGI due to its asynchronous nature. 

Here's a guide to deploying Django Channels using DigitalOcean App Platform.

## Configuring ASGI

```
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django_asgi_app = get_asgi_application()

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

from .channelsmiddleware import TokenAuthMiddleware
import core.routing
import student_core.routing

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": TokenAuthMiddleware(
        URLRouter(
            core.routing.websocket_urlpatterns +
            student_core.routing.websocket_urlpatterns
        )
    )
})
```