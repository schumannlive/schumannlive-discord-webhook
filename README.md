# 🌍 schumannlive-discord-webhook 🌎

Discord webhook script to post schumanns on your discord server.

## How to make it work?

1. Go to your discord server and create a channel/chose existing one to post live schumanns
2. Click on the litte gear icon popping up after hovering over your channel of choice to go into 'Integrations' section, then click on 'webhooks' and create a new webhook.
3. Chose a name and profile picture for your webhook and save changes, proceed to copy webhook URL
4. Your webook URL will look something like this - https://discord.com/api/webhooks/XXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. In line 3 of hook.js paste *XXXXXXXXX* into the 1st set of quotation marks, and *xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx* into the second.
6. Run hook.js and it will automatically send fresh graphs every 2 hours to your discord. 

*npm dependency - discord.js*

shoutsout to yung brick, barteq and bigboy 
