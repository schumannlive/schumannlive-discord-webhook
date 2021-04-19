const Discord = require('discord.js')

const webhook = new Discord.WebhookClient('first section of the link - paste here!','second section of the link - paste here!') ///Provide your webhook url identificators

setInterval(PostRussia, 1000*60*120)

  function PostRussia(){    
    
    var date = new Date();

    const embedRussia = new Discord.MessageEmbed()
    .setColor('0xf7f7f8')
    .setTitle(date.toUTCString())
    .setURL('https://twitter.com/schumannlive')
    .setDescription("Schumann resonance graphs from Tomsk, Russia")
    .setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
    .addFields(
		{ name: 'Tomsk observatory', value: 'http://sosrff.tsu.ru/', inline: true },
    )

    var sch1 = ('http://sosrff.tsu.ru/new/shm.jpg ')
    var sch2 = ('http://sosrff.tsu.ru/new/sra.jpg ')
    var sch3 = ('http://sosrff.tsu.ru/new/srf.jpg ')
    var sch4 = ('http://sosrff.tsu.ru/new/srq.jpg ')

    {schumanns = [(sch1), (sch2), (sch3), (sch4)]}

    webhook.send(schumanns)
    webhook.send(embedRussia)

  }
      
setInterval(PostItaly, 1000*60*120)

  function PostItaly(){    
    
    var date = new Date();

    const embedItaly = new Discord.MessageEmbed()
    .setColor('0xf7f7f8')
    .setTitle(date.toUTCString())
    .setURL('https://twitter.com/schumannlive')
    .setDescription("Schumann resonance graphs from Cumiana, Italy")
    .setThumbnail('https://pbs.twimg.com/profile_images/1378114668414308356/0u_ykowi_400x400.jpg')
    .addFields(
		{ name: 'Cumiana observatory', value: 'http://www.vlf.it/cumiana/livedata.html', inline: true },
    )

    var sch1 = ('http://www.vlf.it/cumiana/last_E-VLF.jpg')
    var sch2 = ('http://www.vlf.it/cumiana/last-geomar.jpg')
    var sch3 = ('http://www.vlf.it/cumiana/last-plotted.jpg')

    {schumanns = [(sch1), (sch2), (sch3)]}

    webhook.send(schumanns)
    webhook.send(embedItaly)

  }
