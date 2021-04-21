const Discord = require('discord.js')

const webhook = new Discord.WebhookClient('first section of the link - paste here!','second section of the link - paste here!') ///Provide your webhook url identificators

setInterval(Italy, 1000*60*120)

  function Italy() {

    var date = new Date();

    const embed1 = new Discord.MessageEmbed()
    .setColor('0xf7f7f8')
    .setImage('http://www.vlf.it/cumiana/last_E-VLF.jpg')

    const embed2 = new Discord.MessageEmbed()
    .setColor('0xf7f7f8')
    .setImage('http://www.vlf.it/cumiana/last-geomar.jpg')

    const embed3 = new Discord.MessageEmbed()
    .setColor('0xf7f7f8')
    .setImage('http://www.vlf.it/cumiana/last-plotted.jpg')
    
    const embedItaly = new Discord.MessageEmbed()
    .setColor('0xf7f7f8')
    .setTitle(date.toUTCString())
    .setURL('https://twitter.com/schumannlive')
    .setDescription("Schumann resonance graphs from Cumiana, Italy")
    .setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
    .addFields(
		{ name: 'Cumiana observatory', value: 'http://www.vlf.it/cumiana/livedata.html', inline: true },
    )

    {schumanns = [(embed1), (embed2), (embed3), (embedItaly)]}

    webhook.send(schumanns)
  }

  