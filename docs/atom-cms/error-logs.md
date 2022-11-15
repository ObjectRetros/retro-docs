---
sidebar_position: 11
---

# Error logs
We know how important error logs is and that's exactly why we have implemented a dedicated page for you to check error logs - All you have to do is make sure you're logged in and that your account is equal or higher rank than the one specified in ``website_permission`` ``min_rank_to_view_logs`` and then visit "your-domain/log-viewer".

In-case you can't log in or access the page above you can either open ``laravel.log`` inside your ``storage/logs`` folder or head to your ``.env`` and set ``APP_DEBUG`` to `` true`` and then refresh your page!

#### Important
If you decide to enable ``APP_DEBUG`` mode by setting it to ``true`` on a live hotel, you must remember to set it back to ``false`` on you've noted your error as enabling debug mode will show sensitive information to every user visiting your hotel.