---
sidebar_position: 2
title: 'Setup'
---
### 🍻 Migrating from Another CMS

If you're migrating from another CMS like Cosmic CMS and is unsure what tables to remove or worry about colliding tables names, then fear no more!

Even tho we **highly recommend** to do a proper cleanup yourself, Atom CMS has a built-in option to rename colliding table names and drop matching foreign keys.

All you have to do is to change `RENAME_COLLIDING_TABLES=false` to `RENAME_COLLIDING_TABLES=true` within your `.env`file (You'll get to the .env file in the next step). Once the feature is enabled, Atom CMS will **attempt** to solve any conflicts that might happen due to the use of another CMS.

### 🚧 Requirements

- PHP 8.1 or above [PHP Downloads](https://www.php.net/downloads.php)
- MySQL >= 8.x or  MariaDB >= 10.x
- Composer v2 [Composer Download](https://getcomposer.org/download/)
- NPM (LTS) [Node Download](https://nodejs.org/en/download/)
- An Arcturus Morningstar database [Database repository](https://git.krews.org/morningstar/arcturus-morningstar-base-database)

Please verify the following extensions are enabled inside your php.ini file. If they have a ";" in front of them it means that they're commented out and not enabled. Simply remove the ";" to enable them.
```ini
extension=curl
extension=fileinfo
extension=gd
extension=mbstring
extension=openssl
extension=pdo_mysql
extension=sockets
```

### 💻 Windows Setup
```shell
git clone https://github.com/ObjectRetros/atomcms.git
cd atomcms
copy .env.example .env (Do not forget to edit the database credentials inside the .env)
composer install 
npm install && npm run build:atom (For development run: npm run dev:[theme-name] - eg. npm run dev:atom)
php artisan key:generate
php artisan migrate --seed
```

*Don't forget to link your IIS site to the "public" folder inside for "atomcms"*

**If you are using Atom CMS in production, don't forget to change the following variables:**
```dotenv
APP_ENV=local to APP_ENV=production
APP_DEBUG=true to APP_DEBUG=false
```

#### Required permissions
Please make sure the "atomcms" folder is granted "Full control" for both the IUSR & the IIS_IUSRS.

Here's a GIF of me doing it on a different folder: [https://gyazo.com/7d5f38525a762c1b26bbd7552ca93478](https://gyazo.com/7d5f38525a762c1b26bbd7552ca93478) the principle is the same, you just do it on the "atomhk" folder.

#### cURL error
If you're receiving a cURL 60 error due to eg. setting up findretros, then make sure you download the latest cacert.pem from [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html). Once downloaded place it in eg. "C:/" folder and then open your php.ini file, search for ``curl.cainfo`` uncomment (Remove the ";" infront of the line) it and put the absolute path + file name to your certificate (Eg. "C:/cacert-2022-07-19.pem"). Save the file and your problem should now be solved.

#### Windows Tutorial
Have you always wanted to set up your own hotel from scratch, but are unsure how? Then  you can follow my **three** parts series on DevBest which will take you through any step necessary to get everything up and running.

- Part 1: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-1.92532/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-1.92532/)
- Part 2: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-2.92533/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-2.92533/)
- Part 3: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-3.92543/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-3.92543/)

### 🧙‍♂️ Linux Setup
```shell
git clone https://github.com/ObjectRetros/atomcms.git
cd atomcms
cp .env.example .env (Do not forget to edit the database credentials inside the .env)
composer install
npm install && npm run build:atom (For development run: npm run dev:[theme-name] - eg. npm run dev:atom)
php artisan key:generate
php artisan migrate --seed
```

**Grant necessary permissions to used folders. Within your atomcms directory, enter the 4 commands below:**
```shell
sudo chown -R $USER:www-data storage
sudo chown -R $USER:www-data bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

For NGINX, you can copy the config a base configuration from here: [Deploy a site on nginx](https://laravel.com/docs/9.x/deployment#nginx)

**If you are using Atom CMS in production, don't forget to change the following variables:**
```dotenv
APP_ENV=local to APP_ENV=production
APP_DEBUG=true to APP_DEBUG=false
```

### 🔒️ Using HTTPS
In case you're using HTTPs through Cloudflares "Always redirect to HTTPs" feature, you should set `FORCE_HTTPS=` within your `.env` file to `true` this it to make sure everything is properly using HTTPs. This is necessary for some features in Atom CMS to work properly when you're letting cloudflare handle the HTTPs redirects without a dedicated SSL certificate.

### 🚨 Disable rocket loader
Atom CMS uses Javascript in certain areas, which unfortunately conflicts with Cloudflares Rocket Loader feature. So in-case you have Rocket Loader enabled on Cloudflare, you will have to disable it, otherwise you **will** run into various annoying issues when using Atom CMS.

To disable or check if Rocket Loader is enabled on Cloudflare, all you have to do is, head to your Cloudflare dashboard and find "Speed" -> "Optimization" in the navigation menu, once you've clicked on the "Optimization" menu point, scroll about halfway down until you find "Rocket Loader™" and then un-toggle it in-case it's enabled. That's it! Rocket loader is now disabled, and you're all good to go.