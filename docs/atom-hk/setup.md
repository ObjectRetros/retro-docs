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
```console title="In your command prompt"
[Https] git clone https://github.com/ObjectRetros/atomhk.git
[SSH - Recommended] git clone git@github.com:ObjectRetros/atomhk.git
cd atomhk
copy .env.example .env
composer install 
npm install && npm run build (for development you run: npm run dev)
php artisan key:generate
php artisan migrate --seed
```

**Notes**<br/>
Head to your ``housekeeping_settings`` table and find the ``tinymce_api_key``, and assign your Tiny MCE key to the value column.

When creating a new IIS site, for your housekeeping to be hosted from, make sure you link it to the **public** folder of atomhk.

### Required permissions
Please make sure the atomhk folder is granted "Full control" for both the ``IUSR`` & the ``IIS_IUSRS``.

Here's a GIF of me doing it on a different folder: [https://gyazo.com/7d5f38525a762c1b26bbd7552ca93478](https://gyazo.com/7d5f38525a762c1b26bbd7552ca93478) the principle is the same, you just do it on the "atomhk" folder.

### Required extensions
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

### Linux Setup
```console title="In your terminal"
[Https] git clone https://github.com/ObjectRetros/atomhk.git
[SSH - Recommended] git clone git@github.com:ObjectRetros/atomhk.git
cd atomhk
cp .env.example .env
composer install
npm install && npm run build (for development you run: npm run dev)
php artisan key:generate
php artisan migrate --seed
```
**Notes**<br/>
Head to your ``housekeeping_settings`` table and find the ``tinymce_api_key``, and assign your Tiny MCE key to the value column.

#### Required permissions
Grant necessary permissions to used folders. Within your atomhk directory, enter the 4 commands below.
```
sudo chown -R $USER:www-data storage
sudo chown -R $USER:www-data bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

#### Required extensions
Please install the following extensions by running the command below:
```
sudo apt-get install -y php8.1-cli php8.1-common php8.1-mysql php8.1-zip php8.1-gd php8.1-mbstring php8.1-curl php8.1-xml php8.1-bcmath php8.1-sockets php8.1-gd php8.1-fileinfo
```

For nginx, you can copy the config from here: [Deploy a site on nginx](https://laravel.com/docs/9.x/deployment#nginx)

### Important notes
If you are using Atom HK in production, don't forget to change the following variables
```dotenv title="Within your .env change the following"
APP_ENV=local to APP_ENV=production
APP_DEBUG=true to APP_DEBUG=false
```