---
sidebar_position: 13
title: 'Staff applications'
---
Atom CMS has a built-in staff application system, which makes it a breeze to open for a new position and receive applications for it.

Currently, the staff application system is still in "early stages" meaning, it's fully functional but to open a position you must manually do so through the database - The process of applying and manage the applications sent by applicants is fully coded and implemented, the management of applicants is done through the Atom HK under the menu "Staff applications".

Now to the process of opening a position. To open a position start by opening your database management tool, and find the ``website_open_positions`` table. In this table you'll find yourself with the following columns: ``permission_id``, ``description``, ``apply_from`` & ``apply_to`` - There's a few other columns too but those you don't have to worry about.

The ``permission_id`` is the id of the rank you want to open the position for, to find the right ``permission_id`` head into the ``permissions`` table and grab the id of the rank you want your users to be able to apply for and then place it as the ``permission_id`` inside the ``website_open_positions`` table. Next the ``description`` column is just the description you want to show the users when they look at the open position, you can freely choose what to write in here, next is the ``apply_from`` and ``apply_to`` those are the timestamps used to determine when and for how long the application is applicable.

Here's an example of two usable timestamps: ``apply_from`` -> ``2022-12-30 23:59:00.000`` and ``apply_to`` -> ``2023-01-30 23:59:00.000``.