---
sidebar_position: 10
---

# Beta codes
You may be working hard on preparing your hotel for the launch, and you might want to invite a few friends to test it out before you launch it to the public. To do just that, we have made it possible to create beta codes that you can give to your friends to test out your hotel before you launching it.

First of all you will have to enable the beta code requirement by setting ``requires_beta_code`` to ``1`` inside your ``website_settings`` table.

Secondly to create a beta code, head into your ``beta_codes`` table and create a new row by filling out the beta_code column with a unique code and the user_id column. A beta code can only be used once, once used the user who used it will be assigned to the user_id column, for you to keep track of who uses which code.