---
sidebar_position: 2
---

# Setup

On this page, we'll go through all the initial steps on how to get Atom CMS up & running!

### Requirements
The following requirements is necessary to set up Atom CMS:
- PHP 8.1 or above [PHP Downloads](https://www.php.net/downloads.php)
- MySQL 8.x or MariaDB 10.x
- Composer v2 [Composer Download](https://getcomposer.org/download/)
- NPM (LTS) [Node Download](https://nodejs.org/en/download/)
- An Arcturus Morningstar database [Database repository](https://git.krews.org/morningstar/arcturus-morningstar-base-database)

Once all of the above has been installed & setup, you can continue doing the following:
Open CMD (Command Prompt) and navigate into the path you want the CMS to be located at, and run the following commands:

### Windows Setup
```
[Https] git clone https://github.com/ObjectRetros/atomcms.git
[SSH - Recommended] git clone git@github.com:ObjectRetros/atomcms.git
cd atomcms
copy .env.example .env (Don't forget to edit the database credentials inside the .env)
composer install 
npm install && npm run build:atom (For development run: npm run dev:[theme-name] (eg. npm run dev:atom))
php artisan key:generate
php artisan migrate --seed

* You must link your site to the public folder of Atom CMS
```

#### Required permissions
Please make sure the atomhk folder is granted "Full control" for both the IUSR & the IIS_IUSRS.

Here's a GIF of me doing it on a different folder: [https://gyazo.com/7d5f38525a762c1b26bbd7552ca93478](https://gyazo.com/7d5f38525a762c1b26bbd7552ca93478) the principle is the same, you just do it on the "atomhk" folder.

#### Required extensions
Please verify the following extensions are enabled inside your php.ini file. If they have a ";" in front of them it means that they're commented out and not enabled. Simply remove the ";" to enable them.
```ini title="php.ini"
extension=curl
extension=fileinfo
extension=gd
extension=mbstring
extension=openssl
extension=pdo_mysql
extension=sockets
```

#### cURL error
If you're receiving a cURL 60 error due to eg. setting up findretros, then make sure you download the latest cacert.pem from [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html). Once downloaded place it in eg. "C:/" folder and then open your php.ini file, search for ``curl.cainfo`` uncomment (Remove the ";" infront of the line) it and put the absolute path + file name to your certificate (Eg. "C:/cacert-2022-07-19.pem"). Save the file and your problem should now be solved.

### Linux Setup
```
[Https] git clone https://github.com/ObjectRetros/atomcms.git
[SSH - Recommended] git clone git@github.com:ObjectRetros/atomcms.git
cd atomcms
cp .env.example .env (Don't forget to edit the database credentials inside the .env)
composer install
npm install && npm run build:atom (For development run: npm run dev:[theme-name] (eg. npm run dev:atom))
php artisan key:generate
php artisan migrate --seed
```

**Grant necessary permissions to the following folders. Within your "atomcms" directory, enter the 4 commands below:**
```console title="Paste the following in your terminal"
sudo chown -R $USER:www-data storage
sudo chown -R $USER:www-data bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

For NGINX, you can copy the config from here: [Deploy a site on nginx](https://laravel.com/docs/9.x/deployment#nginx)

**If you are using Atom CMS in production, don't forget to change the following variables:**
```dotenv title="Within your .env change the following"
APP_ENV=local to APP_ENV=production
APP_DEBUG=true to APP_DEBUG=false
```

#### Windows Tutorial
Have you always wanted to set up your own hotel from scratch, but are unsure how? Then  you can follow my **three** parts series on DevBest which will take you through any step necessary to get everything up and running.

- Part 1: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-1.92532/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-1.92532/)
- Part 2: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-2.92533/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-2.92533/)
- Part 3: [https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-3.92543/](https://devbest.com/threads/how-to-set-up-a-retro-in-2022-iis-nitro-html5-part-3.92543/)
