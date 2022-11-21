const Discord = require("discord.js");
module.exports = {
    name: "elérhetőségek",
    category: "Tag",
    description: "help  parancs.",
    run: async (bot, message, args) => {
        let prefix = "."


      
            let TesztEmbed = new Discord.MessageEmbed()
            .setColor("#E811BD")
      
            .setThumbnail(message.author.displayAvatarURL())
            .setAuthor("Elérhetőségek:")
            .setThumbnail("https://images-ext-2.discordapp.net/external/wlBgCGiPCXxo9oYP4_1Js7zxCddoo86abzz2DIyKPho/https/share.creavite.co/kZIdVsfuGlfd1fKw.gif?width=230&height=230")
            .setTimestamp(message.createdAt)
           
           
           .addField("`Discord:`", " https://discord.gg/U8fcaQpk3D ")
           .addField("`Insta:`", " https://www.instagram.com/zanya40pog/ ")
           .addField("`TikTok:`", " https://www.tiktok.com/@zanya_40")
           .addField("`Twitch:`", " https://www.twitch.tv/zanya40")
           .addField("`Steam:`", " https://steamcommunity.com/id/zanya40/")
           .addField("`Facebook:`", "https://www.facebook.com/groups/zanya40")
            message.channel.send(TesztEmbed)
          }   
        }
        
