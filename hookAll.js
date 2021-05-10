const Discord = require('discord.js')
const config = require('./config.json')
const webhook = new Discord.WebhookClient(config.WEBHOOK_URL.firstpart,config.WEBHOOK_URL.secondpart) 

setInterval(Russia, 1000*60*120)
setInterval(Cumiana, 1000*60*120)
setInterval(Romagna, 1000*60*120)

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
