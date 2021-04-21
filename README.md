# 🌍 schumannlive-discord-webhook 🌎

Discord webhook script to post Schumann resonance graphs to your discord server.

## How to make it work?

1. Go to your discord server and create a channel/chose existing one to post live schumanns
2. Click on the little gear icon popping up after hovering over your channel of choice to go into 'Integrations' section, then click on 'webhooks' and create a new webhook.
3. Chose a name and profile picture for your webhook and save changes, proceed to copy webhook URL
4. Your webook URL will look something like this - https://discord.com/api/webhooks/XXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. In line 3 of hook.js paste *XXXXXXXXX* into the 1st set of quotation marks, and *xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx* into the second.
6. Run hook.js(Russia and Italy), hookRussiaOnly.js or hookItalyOnly.js and it will automatically send fresh graphs every 2 hours to your discord. It will take 2 hours before 1st set of graphs is sent. (latest version of node required)

Alternatively you can use QTweet discord bot to subscribe to any twitter account and have a live feed of it on discord. 

*npm dependency - discord.js*

# How it looks:
![Screenshot_20210420-145133](https://user-images.githubusercontent.com/82292036/115399025-0eef9900-a1e8-11eb-8966-34e786c956d9.jpg)


shoutsout to yung brick, barteq and bigboy 
