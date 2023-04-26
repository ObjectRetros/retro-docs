---
sidebar_position: 12
title: 'Maximum accounts'
---
To avoid spammers, or abusers you might want to limit the amount of accounts a user can create per IP-address - Or maybe you just want to increase the limit, to allow for "unlimited" accounts.

Luckily, this is a super simple change! All you have to do is open up your database manager, find the ``website_settings`` table and locate the ``max_accounts_per_ip`` - Once located, you simply change the value to how many accounts someone can create per IP-address🔒️