---
sidebar_position: 5
---

# Google ReCaptcha

This page will take you through the steps of setting up Google ReCaptcha in Atom CMS

Atom CMS comes with built-in support for Google recaptcha. However, there's a few steps we have to apply, before it being enabled on your hotel.

First of all inside the ``webite_settings`` table you'll find an entry with a key named ``google_recaptcha_enabled`` set this to ``1`` if you wish Google recaptcha to be enabled and ``0`` if you want it to be disabled.

Next up in your ``.env`` file you'll find ``GOOGLE_RECAPTCHA_SITE_KEY=`` and ``GOOGLE_RECAPTCHA_SECRET_KEY=`` this is where your site and secret key that Google provides, has to be placed, for your recaptcha to work properly.

If you don't have any recaptcha keys yet, head to [https://www.google.com/recaptcha/admin/](https://www.google.com/recaptcha/admin/) and fill out the necessary fields to receive them.

*You must select ``reCaptcha v2`` and the "I'm not a robot" Checkbox, when selecting your recaptcha settings within google.*