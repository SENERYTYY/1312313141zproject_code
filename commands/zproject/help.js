const Discord = require("discord.js");
module.exports = {
    name: "help",
    category: "Tag",
    description: "help  parancs.",
    run: async (bot, message, args) => {
        let prefix = "."


      
            let TesztEmbed = new Discord.MessageEmbed()
            .setColor("#E811BD")
            .setAuthor("HELP")
            .addField("👋🏼 Általános:", "``.elérhetőségek, .moderatord ``")
            .addField("🔧  Moderátor:", "``.roleid, .channelinfo, .clear ``")
            .setThumbnail("https://images-ext-2.discordapp.net/external/wlBgCGiPCXxo9oYP4_1Js7zxCddoo86abzz2DIyKPho/https/share.creavite.co/kZIdVsfuGlfd1fKw.gif?width=230&height=230")
           
            .setTimestamp(message.createdAt)
            message.channel.send(TesztEmbed)
          }   
      }       
