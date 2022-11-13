---
sidebar_position: 9
---

# Two-factor setup
With Atom CMS we realise how important it is to keep your hotel safe! And that's why we have made it possible to enable Google's two-factor authentication for all users.

All you or they have todo is head to user settings and click on "Two factor" and follow the steps from there.

In-case you want to protect your hotel further, we have made it possible to enable the option to force all staff to enable two-factor authentication for their staff account - To enable this feature head into your ``website_settings`` table and set ``force_staff_2fa`` to ``1``.

Two-factor authentication will then be forced for every account that's equal or higher to the ``min_staff_rank`` inside the ``website_settings`` table.