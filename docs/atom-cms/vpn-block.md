---
sidebar_position: 4
---

# VPN / IP Blocking

In Atom CMS you can restrict users from entering your hotel, by enabling & setting up VPN blockage.

To enable VPN blockage, you must go through a few steps. The first step is to go to [dashboard.ipdata.co](dashboard.ipdata.co) and either login or sign up.

Secondly click the ">_ API Settings" or visit the following URL [https://dashboard.ipdata.co/api.html](https://dashboard.ipdata.co/api.html) - You'll then be greeted with your personal API key at the top. Copy the API key and head to your database. Open the ``website_settings`` table and find the ``vpn_block_enabled`` entry and set it to ``1`` next up find the ``ipdata_api_key`` and replace the ``ADD-API-KEY-HERE`` with your personal API key.

Once all the steps above has been completed, your hotel will then make use of API provided by "ipdata" to block threats & VPNs.

Atom makes it possible for you to manually whitelist & blacklist IPs & ASNs too, simply go to the ``website_ip_whitelist`` table to whitelist IPs or ASNs and go to ``website_ip_blacklist`` to blacklist IPs and ASNs.

You can also allow users above a specified rank to bypass all IP & ASN checks - simply head to the ``website_permissions`` table and adjust the value of the ``min_rank_to_bypass_vpn_check`` to the minimum rank required for bypassing all checks.

By default, Atom will only apply the IP & ASN check when users are trying to visit your client, if you with to apply it to other places, simply copy the ``vpn.checker`` middleware and apply it to other routes within the ``web.php`` file.

*Any whitelisted IP or ASN will overrule any blacklisted IP or ANS.*