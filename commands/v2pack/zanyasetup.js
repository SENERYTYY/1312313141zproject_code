const Discord = require("discord.js");
module.exports = {
    name: "zanyasetup",
    category: "Tag",
    description: "help  parancs.",
    run: async (bot, message, args) => {
        let prefix = "."


      
            let TesztEmbed = new Discord.MessageEmbed()
            .setColor("#E811BD")
            .setAuthor("💎 ZANYA SETUP 💎")
            .addField("Egérpad:", "``ASUS ROG Sheath Electro Punk``")
            .addField("Egér:", "``ROG Strix Impact II``")
            .addField("Billentyűzet:", "``Aula Dawnguard``")
            .addField("Mikrofon:", "``HyperX Quadcast S ``")
            .addField("Monitor:", "``MSI OPTIX G32C4``")
            .addField("Stream Deck:", "``ELGATO Stream Deck Mini``")
            .addField("PC:", "``Processzor: i5-10400 2.90GHZ 6core 12szál\n Videókártya: Evga 1660 6 GB\n RAM: 16 GB Hyperx Fury 3200mhz rgb\n Alaplap: MSI Z490-A PRO\n SSD(m.2):Kingstone 980 1T G\n Táp: 700 W Chieftec eco series bronz\n Gépház: Kolink Observatory white edition\n``")
            .setThumbnail("https://images-ext-2.discordapp.net/external/wlBgCGiPCXxo9oYP4_1Js7zxCddoo86abzz2DIyKPho/https/share.creavite.co/kZIdVsfuGlfd1fKw.gif?width=230&height=230")
           
            .setTimestamp(message.createdAt)
            message.channel.send(TesztEmbed)
          }   
      }       