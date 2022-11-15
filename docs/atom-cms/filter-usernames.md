---
sidebar_position: 10
---

# Filter usernames on register
We've all been there... Some users start trolling, by using profanity in their usernames, racial slurs or other forms of discriminating words. 

To prevent this from happening, we've made it possible for you to filter usernames on register 🚧

All you have to do is to head into your ``website_settings`` table and set ``website_wordfilter_enabled`` to ``1``. This will filter out any usernames that contains any of the words specified inside the ``website_wordfilter`` table.