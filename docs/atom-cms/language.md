---
sidebar_position: 3
---

# Languages

Atom CMS comes with a built-in translation system, which makes it super easy to create, edit and implement translations and new languages.

The process of adding a new language is fairly straight forward. All you have to do is to copy the ``en.json`` inside the ``lang`` folder and name is your language country code eg. "da.json" for the Danish language.

Once you have your file prepared, you translate the "values" inside the JSON file. For example:

```json title="en.json"
    "Home": "Home",
    "Community": "Community",
    "Shop": "Shop",
    "Rules": "Rules",
    "Articles": "Articles",
    "Staff": "Staff",
```

Would become:
```json title="da.json"
    "Home": "Hjem",
    "Community": "Fællesskab",
    "Shop": "Butik",
    "Rules": "Regler",
    "Articles": "Artikler",
    "Staff": "Ansatte",
```

To add your new language to the language selector, all you have to do is to add it inside the ``website_languages`` database table. It will then automatically be appended to the available language options.

If you just want to add missing translations or update existing ones for a specific language, then all you have to do is to open the `.json` file that matches your language and update existing values or add new ones.

If a specific amount of text isn't translateable, you can easily make it so by simply wrapping it in ``{{ __('Your text') }}`` and then add the key, value to the your-language.json file

If you want a more in-depth explaination / examples you can go to the [Laravel documentation by clicking here](https://laravel.com/docs/9.x/localization#using-translation-strings-as-keys) it will take you straight to the example for json files.