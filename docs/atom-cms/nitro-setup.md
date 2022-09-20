---
sidebar_position: 7
---

# Nitro setup

In Atom CMS it's **fairly** easy to link your Nitro client. 

All you have to do is head into your `.env` file and locate `NITRO_CLIENT_PATH=` assign the path to where the `index.html` that belongs Nitro is located - eg. `NITRO_CLIENT_PATH=/client/html/nitro-client` and then save the file.

Once you have assigned your nitro client path, open your the `index.html` that belongs to Nitro, and remove the `/` in-front of the `renderer-config.json` and `ui-config.json`

Another alternative to removing the `/` is to simply not remove them and place the `renderer-config.json` and `ui-config.json` directly within the `public` folder. It's recommended to do the first option however, as it allows for a better file structure.