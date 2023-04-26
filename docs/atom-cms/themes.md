---
sidebar_position: 6
---
# Theme system

In Atom CMS we have included a built-in theme creation / switching system, which not only makes it a breeze to change theme, if you want to quickly brew up a new base for your theme, you can do that with a simple command!

### 🔥 Change theme
To change the CMS theme, simply head to ``website_settings`` and change the value of the ``theme`` to the name you gave your new theme upon initialising it.

### 🚀 Creating a new theme
It's super easy to create a new theme within Atom CMS, all you have to do is to enter the command below, in your terminal.

```
php artisan make:theme
```

Once the command has been executed, you'll be prompted with easy to follow scaffolding steps.

**It's recommended to not replacing the existing controllers during the theme scaffolding process, unless you are confident that's really what you want**

![image](https://user-images.githubusercontent.com/87041394/182718267-f409f5f6-d69c-4226-b6d6-9b7f8d0b2aac.png)

*All credits for the theme system goes to [qirolab](https://github.com/qirolab/laravel-themer)*