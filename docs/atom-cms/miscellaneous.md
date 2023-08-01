---
sidebar_position: 15
title: Miscellaneous
---

Atom CMS comes packed with tons of features, but not every feature has enough "depth" to it, to each require an individual page. This is why we have made this page - A list of the features, we felt like could be useful to have an explanation, but all compiled into one single page 📝

### 💰 Changing start currency
You probably already have an idea about how you want to run your hotels eco. So to further progress that idea, you also probably want to set a specific amount of starting currency!

To set the amount of currencies a user get upon registrations, you have to do is open up your database manager, find the ``website_settings`` table and locate the following entries ``start_credits``, ``start_duckets`` & ``start_diamonds`` - Once located, you simply change the values, so it matches  what you want new users to start with💸

### 🎁 Giving HC upon registration
Some features on your hotel might be HC (Habbo Club) specific, and to make your life easier, instead of you having to edit various things to unlock those features in-case you don't want them to be limited to just HC, we have implemented a feature within Atom CMS that allows to give HC upon registration.

To enabled automatic HC all you have to do is head into the ``website_settings`` table inside your database and then find ``give_hc_on_register`` and set the value to ``1``. You can also change the duration of the HC period you want to offer newly registered users - which by default is set to 10 years.
To change the period, once again head into the ``website_settings`` table and find ``hc_on_register_duration`` and change its value, the value is set in UNIX timestamp. So to get a correct value, head to [https://www.unixtimestamp.com/?unixTimestampInput](https://www.unixtimestamp.com/?unixTimestampInput) and fiddle around until you have the value you want to replace the existing one with.

### 🪄 Setting a default color mode
You might wish to set the default color mode of Atom to dark mode instead of the default light mode. In Atom CMS all you need to do is head into your ``website_settings`` table and set ``cms_color_mode`` to ``dark`` instead of ``light``

Just keep in mind if you have already visited the CMS you might need to clear your cache, so the CMS can set the color theme properly for you - the same goes for your users, unless it is of course their first visit.

### 🎨 Changing the logo
Of course, you want to change the logo that comes with the CMS, to be your hotel logo instead!

All you have to do, to change the logo is opening up your database manager, find the ``website_settings`` table and locate the ``cms_logo`` - Once located, you simply change the value to be the match the path of your own logo🎨

### 🎨 Changing the top banner
Maybe your hotel got a specific theme, or you just want to make the CMS feel a little more personal by changing the top-banner on the CMS.

To change the top-banner, all you have to do is open up your database manager, find the ``website_settings`` table and locate the ``cms_header`` - Once located, you simply change the value to be the match the path of your own banner🎨 

### 🎨 Changing the image on the "me" page
Maybe your hotel got a specific theme, or you just want to make the CMS feel a little more personal by changing the "me backdrop" on the CMS - The image each user sees on their "me" page.

To change the "me backdrop", all you have to do is open up your database manager, find the ``website_settings`` table and locate the ``cms_me_backdrop`` - Once located, you simply change the value to be the match the path of your own backdrop🎨 

### Other settings
Atom CMS comes with settings beyond just the mentioned above. We highly recommend you to check out the ``website_settings`` table, in order to get an understanding of the various options, you can tweak through the database. Each entry has a comment assigned to them, so you can easily understand what that specific setting is used for🧑‍💻