const Discord = require('discord.js')

const webhook = new Discord.WebhookClient('first section of the link - paste here!','second section of the link - paste here!') ///Provide your webhook url identificators

var sch1 = ('http://sosrff.tsu.ru/new/shm.jpg')	/// define graph links
var sch2 = ('http://sosrff.tsu.ru/new/sra.jpg')	/// define graph links
var sch3 = ('http://sosrff.tsu.ru/new/srf.jpg')	/// define graph links
var sch4 = ('http://sosrff.tsu.ru/new/srq.jpg')	/// define graph links
var sch5 = ('http://www.vlf.it/cumiana/last_E-VLF.jpg')	/// define graph links
var sch6 = ('http://www.vlf.it/cumiana/last-geomar.jpg')	/// define graph links
var sch7 = ('http://www.vlf.it/cumiana/last-plotted.jpg')	/// define graph links

var date = new Date();

const embed = new Discord.MessageEmbed()
	.setColor('0xf7f7f8')
	.setTitle(date.toUTCString())
	.setURL('https://twitter.com/schumannlive')
	.setDescription("Schumann resonance graphs from Tomsk, Russia and Cumiana, Italy")
	.setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
	.addFields(
		{ name: 'Tomsk observatory', value: 'http://sosrff.tsu.ru/', inline: true },
		{ name: 'Cumiana observatory', value: 'http://www.vlf.it/cumiana/livedata.html', inline: true },
    	)

    

setInterval(schPost, 1000*60*120)	/// define time interval (1000 milliseconds times 60 (1 minute) times 120 - 2 hours)

    function schPost(){    	/// send webhook messages (graphs and embed) in previously defined time interval
        webhook.send(sch1)
        webhook.send(sch2)
        webhook.send(sch3)
        webhook.send(sch4)
        webhook.send(sch5)
        webhook.send(sch6)
        webhook.send(sch7)
        webhook.send(embed)
    }




