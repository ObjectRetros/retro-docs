---
sidebar_position: 8
---

# Flash setup
With Atom CMS you have the option to enable the good old flash client.

By default, the flash client is disabled so there's a few steps you must take in order to enable it and get it up and running.

To enable the flash client, head to your .env file and locate the `FLASH_CLIENT_ENABLED=false` which you will have to change to `FLASH_CLIENT_ENABLED=true`. 

Next up you will see a few settings related to the flash client just below the `FLASH_CLIENT_ENABLED` you should have the following ``.env`` variables

```dotenv title=".env"
EMULATOR_IP=127.0.0.1
EMULATOR_PORT=3000
SWF_BASE_PATH=client/flash
HABBO_SWF=Habbo.swf
PRODUCTION_FOLDER=gordon/PRODUCTION
EXTERNAL_FURNIDATA=gamedata/furnidata.xml
EXTERNAL_FIGUREMAP=gamedata/figuremap.xml
EXTERNAL_FIGUREDATA=gamedata/figuredata.xml
EXTERNAL_PRODUCTDATA=gamedata/productdata.txt
EXTERNAL_TEXTS=gamedata/external_flash_texts.txt
EXTERNAL_VARIABLES=gamedata/external_variables.txt
EXTERNAL_OVERRIDE_TEXTS=gamedata/override/external_flash_override_texts.txt
EXTERNAL_OVERRIDE_VARIABLES=gamedata/override/external_override_variables.txt

```
You must adjust those, to match your flash folder structure, so everything links correctly. Sadly we can't provide you with an exact guide on how to link those correctly, as every hotel uses a different folder structure.

Once all the settings within the `.env` has been adjusted correctly, you and your users should be able to use the flash client.

*To use the flash client, you must either provide your users with your own desktop application, or they must use a browser supporting flash, as no regular browser supports flash after the end of 2021.*