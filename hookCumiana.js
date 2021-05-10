const Discord = require('discord.js')
const config = require('./config.json')
const webhook = new Discord.WebhookClient(config.WEBHOOK_URL.firstpart,config.WEBHOOK_URL.secondpart) 


setInterval(Cumiana, 1000*60*120)

function Cumiana() {

	var date = new Date();

	const cumianaEmbed = new Discord.MessageEmbed()
	.attachFiles(["./media/last-geomar.jpg", "./media/last_E-VLF.jpg", "./media/last-plotted.jpg", "./media/last-marconi-multistrip-slow.jpg"])
	.setColor('#ffffff')
	.setTitle(date.toUTCString())
	.setURL('https://twitter.com/schumannlive')
	.setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
	.addFields(
	{ name: 'Cumiana, Italy', value: 'http://www.vlf.it/cumiana/livedata.html', inline: false },
	)

	webhook.send(cumianaEmbed)

}


  
