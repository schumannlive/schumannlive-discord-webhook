const Discord = require('discord.js')

const webhook = new Discord.WebhookClient('first section of the link - paste here!','second section of the link - paste here!') ///Provide your webhook url identificators

var sch1 = ('http://sosrff.tsu.ru/new/shm.jpg ')
var sch2 = ('http://sosrff.tsu.ru/new/sra.jpg ')
var sch3 = ('http://sosrff.tsu.ru/new/srf.jpg ')
var sch4 = ('http://sosrff.tsu.ru/new/srq.jpg ')
var sch5 = ('http://www.vlf.it/cumiana/last_E-VLF.jpg ')
var sch6 = ('http://www.vlf.it/cumiana/last-geomar.jpg ')
var sch7 = ('http://www.vlf.it/cumiana/last-plotted.jpg ')

var date = new Date();

const embed = new Discord.MessageEmbed()
    	.setColor('0xf7f7f8')
    	.setTitle('Schumannlive')
	.setURL('https://twitter.com/schumannlive')
    	.setDescription("Schumann resonance graphs from Tomsk, Russia and Cumiana, Italy")
    	.setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
    .	addFields(
		{ name: date.toUTCString(), value: '🌏🌎🌍🌞🌍🌎🌏' },
		{ name: 'Tomsk observatory', value: 'http://sosrff.tsu.ru/', inline: true },
		{ name: 'Italy observatory', value: 'http://www.vlf.it/cumiana/livedata.html', inline: true },
    	)

    

setInterval(schPost, 1000*60*120)

    function schPost(){    
        webhook.send(sch1)
        webhook.send(sch2)
        webhook.send(sch3)
        webhook.send(sch4)
        webhook.send(sch5)
        webhook.send(sch6)
        webhook.send(sch7)
        webhook.send(embed)
    }




