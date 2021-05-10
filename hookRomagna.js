const Discord = require('discord.js')
const config = require('./config.json')
const webhook = new Discord.WebhookClient(config.WEBHOOK_URL.firstpart,config.WEBHOOK_URL.secondpart) 

setInterval(Romagna, 1000*60*120)

function Romagna() {

	var date = new Date();
	
	const romagnaEmbed = new Discord.MessageEmbed()
	.attachFiles(["./media/test.jpg", "./media/last-borehole-sogliano.jpg"])
	.setColor('#ffffff')
	.setTitle(date.toUTCString())
	.setURL('https://twitter.com/schumannlive')
	.setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
	.addFields(
	{ name: 'Romagna, Italy', value: 'http://www.uevlf.it/uevlf.HTML', inline: false },
	)

	webhook.send(romagnaEmbed)

}


  
