---
sidebar_position: 9
---

# Findretros setup
Findretros is a super useful site, for you to advertise your hotel for free. It's well known and a lot of people go through the site, in order to find new hotels - so if you haven't already gotten a findretros account, we highly recommend you to create one!

Once you have created your Findretros account, you of course have to link it within Atom CMS, so the CMS will know that it should send your users there to vote, so that your hotel can climb the ranking on there.

Luckily linking your Findretros, is super easy in Atom CMS. All you have to do is to open your .env file scroll down and locate Findretros settings, which would be ``FINDRETROS_NAME=`` and ``FINDRETROS_ENABLED=``.

Once you have located the settings change them to the following:
```dotenv title=".env"
FINDRETROS_NAME=your-find-retros-username
FINDRETROS_ENABLED=true
```

That's it! Findretros should now be all setup and good to go 🔥