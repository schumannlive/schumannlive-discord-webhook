const Discord = require('discord.js')
const config = require('./config.json')
const webhook = new Discord.WebhookClient(config.WEBHOOK_URL.firstpart,config.WEBHOOK_URL.secondpart) 

setInterval(Russia, 1000*60*120)

function Russia() {

	var date = new Date();

	const russiaEmbed = new Discord.MessageEmbed()
	.attachFiles(["./media/shm.jpg", "./media/sra.jpg", "./media/srf.jpg", "./media/srq.jpg"])
	.setColor('#ffffff')
	.setTitle(date.toUTCString())
	.setURL('https://twitter.com/schumannlive')
	.setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
	.addFields(
	{ name: 'Tomsk, Russia', value: 'http://sosrff.tsu.ru/', inline: false },
	)

  	webhook.send(russiaEmbed)

}


  
