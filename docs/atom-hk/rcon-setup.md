---
sidebar_position: 3
---

# Rcon setup
Atom HK uses RCON for various actions, the reason for this, is so when ever you edit for example a user, the user will be updated instantly within the hotel - even if they're online!

To set up RCON within Atom HK is very simple, and only takes a few steps!


### Setup your .env
Within your .env file you'll find the two following variables
```dotenv title=".env"
RCON_HOST=127.0.0.1
RCON_PORT=3001
```

Make sure those are matching whatever you have specified within your emulators ``config.ini`` or else the RCON won't be working properly and cause errors within the housekeeping.

### Firewall setup
Make sure that your firewall allow TCP requests from the RCON port you have specified - in most cases ``3001``.

**Windows Firewall**<br/>
To allow a new port within your firewall on windows, open up ``Windows Defender Firewall with Advanced Security`` and click on ``Inbound Rules``.

Once you're inside, of the Inbound rules, click on ``New rule...`` which you'll find in the top right corner - A new pop up should now appear, giving you 4 different options. You have to select **Port** and then click on "Next".

The next page shown should already have ``TCP`` & ``Specific local port:`` selected, within the input field next to the "Specific local port:" you have to enter the port you want to allow, again most commonly ``3001`` and then click on "Next".

The ``Allow the connection`` should already be marked, if that's the case click on "Next".

The next page should now show 3 marked boxes ``Domain``, ``Private`` & ``Public``, if that's correct click on "Next".

The final step is to give your firewall rule a name, it can be anything you desire. Personally I normally just name it ``3001`` which represents the port.

**Linux Firewall**<br/>
On linux there's tons of different firewall options, but if you're just using the regular firewall included on eg. Ubuntu - which would be "UFW" then you can simply run the following commands in order to enable your RCON port.

```console title="Your terminal"
sudo ufw allow your-rcon-port
```
If you're using another firewall I can only recommend you to go through that firewalls documentation, in order to learn how to open for specific port!

That's it! Your RCON port should now be open, and read to receive connections🎉 