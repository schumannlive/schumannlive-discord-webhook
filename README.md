## 🌍 schumannlive-discord-webhook 🌎

Discord webhook script to post Schumann resonance graphs to your discord server.

### How to make it work?

*latest version of node required*

1. Go to your discord server and create a channel/chose existing one to post live schumanns
2. Click on the little gear icon popping up after hovering over your channel of choice to go into 'Integrations' section, then click on 'webhooks' and create a new webhook.
3. Chose a name and profile picture for your webhook and save changes, proceed to copy webhook URL
4. Your webook URL will look something like this - https://discord.com/api/webhooks/XXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. Go to config.json and edit the data - paste first and second section of the link
6. After navigating to your webhook location in console type in ```npm install```
7. Start download.js via ```node download.js``` to constantly download fresh graphs to your machine
8. Start hook of your choice via ```node hookRussia.js``` and it will automatically send graphs to your webhook once every 2 hours.

Alternatively you can use QTweet discord bot to subscribe to any twitter account and have a live feed of it on discord. 


### How it looks:
https://imgur.com/a/6gh06Zo
