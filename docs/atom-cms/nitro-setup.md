---
sidebar_position: 7
---

# Nitro setup

### 📦 Adding the nitro files
The first thing you need to do, when wanting to set up the nitro client, is to add all the necessary nitro files.

If you're unsure about how to do that, you can follow my three part series, that takes you through the entire process of setting up a new hotel on Windows (If you're using Linux the process will be the same file structure wise).
- Part 1: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-1.92532/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-1.92532/)
- Part 2: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-2.92533/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-2.92533/)
- Part 3: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-3.92543/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-3.92543/)

### 🔌 Linking to the nitro client
To link Atom CMS up to your nitro client, all you have to do is head into your `website_settings` database table, locate `nitro_client_path` and change the path, so it matches the path where your nitros index.html is located (Don't add the index.html within the path).

Once you have assigned your nitro client path, open the `index.html` that belongs to Nitro, and remove the `/` in-front of the `renderer-config.json` and `ui-config.json`

Another alternative to removing the `/` is to simply not remove them and place the `renderer-config.json` and `ui-config.json` directly within the `public` folder. It's recommended to do the first option however, as it allows for a better file structure.