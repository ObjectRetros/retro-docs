---
sidebar_position: 14
title: Paypal Setup
---

As you probably know by now, Atom CMS comes with a fully automated store. This allows you to sell badges, currencies, ranks, furniture etc. However before you can start accepting payments, you must setup a Paypal Business account.

It’s important to note that PayPal may ask you to verify your identity, and provide some more information on your first couple of sales - this is completely normal and part of their anti-fraud safeguards. So it's recommended that you use a proper email and your real name - Do not worry, users wont be able to see your name, but rather the name of your "business".

First off:<br/>
Register for your business account: https://www.paypal.com/bizsignup/#/checkAccount

Provide any relevant information asked by Paypal when setting up your account, and ensure you are checking your emails for further verification requirements.

Once you’ve registered your new business account navigate to the Developer Dashboard: https://developer.paypal.com/dashboard/applications/sandbox

You will be automatically on Sandbox mode, Sandbox mode allows you to create test transactions by using a sandbox account that PayPal will provide you with - This way you wont be charged real money when proceeding a checkout. It’s highly recommended to set this up first and try it out before proceeding with live credentials.

### 📦 Sandbox mode
Open your ``.env`` file within your atomcms directory and look for:

```dotenv
# General paypal options
PAYPAL_MODE='sandbox'
PAYPAL_PAYMENT_ACTION='Order'
PAYPAL_CURRENCY='USD'
PAYPAL_NOTIFY_URL=
PAYPAL_LOCALE='en_US'
PAYPAL_VALIDATE_SSL=true

#PayPal Setting & API Credentials - sandbox
PAYPAL_SANDBOX_CLIENT_ID=
PAYPAL_SANDBOX_CLIENT_SECRET=
PAYPAL_SANDBOX_APP_ID=

#PayPal Setting & API Credentials - live
PAYPAL_LIVE_CLIENT_ID=
PAYPAL_LIVE_CLIENT_SECRET=
```

Then on your Developer Dashboard of PayPal (still sandbox mode), find REST API APPS and then look for Default Application - copy your Client ID and paste it into PAYPAL_SANDBOX_CLIENT_ID=<br/>
It should look something like this: ``PAYPAL_SANDBOX_CLIENT_ID=7d6rt6LONGCLIENTIDCODEHERE434ffsfdf`` when filled. Now do the same for the ``PAYPAL_SANDBOX_CLIENT_SECRET``.

Go to the shop on your website, and ensure that everything works as intended. Again note that Sandbox will not actually charge you, this is just to ensure it functions as it should.

Hopefully everything worked as intended, and you can now proceed to using live credentials and actually be able to accept payments 🥳

### ✅ Live mode
Enabling live mode is a fairly straight forward process. All you have to do is enable "live mode" on your developer dashboard and then copy the client & secret ID from within: "REST API APPS" and then find "Activation_App"

Again copy the ``client_id`` and the ``secret_id`` just like you did for the sandbox and paste then into their respect ``.env```variables - This being:<br/>
```dotenv
PAYPAL_LIVE_CLIENT_ID=
PAYPAL_LIVE_CLIENT_SECRET=
```

As the very last step, we must tell our application to now use live mode instead of sandbox mode, and to do that simply change ``PAYPAL_MODE='sandbox'`` to ``PAYPAL_MODE='live'``

That's it! You should now have a proper working shop ready to accept payments 💰

### Changing currency
You might want to use a different currency than United States Dollars, all you have to do to change the currency is simply setting a different value to the ``PAYPAL_CURRENCY`` variable within your ``.env`` file.

#### Digging deeper
If you wish to dig deeper into what potential features you can add to your CMS through the already included compser package, used for PayPal. Then head to the package docs here: https://srmklive.github.io/laravel-paypal/docs.html

Keep in mind a lot of the offered features isn't coded within Atom CMS, but they're fully available for you to implement on your own.

<small>Guide written by Puffin</small>