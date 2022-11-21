const Discord = require("discord.js");
module.exports = {
    name: "jelenleg nem elérhetőke",
    category: "Tag",
    description: "help  parancs.",
    run: async (bot, message, args) => {
        let prefix = "."


      
            let TesztEmbed = new Discord.MessageEmbed()
           
      
            .setThumbnail(message.author.displayAvatarURL())
            .setAuthor("Támogatás:")
            .setThumbnail("https://share.creavite.co/zLXrFCmpVBEPGL5k.gif")
            .setTimestamp(message.createdAt)
           
           
          
           .setTitle("Szia! Ha támogatni szeretnéd zanyát katt a kék szövegre.").setColor("#E811BD").setDescription("[Támogatás](https://streamlabs.com/zanya40/tip)" )
           message.channel.send(TesztEmbed)
          }   
        }