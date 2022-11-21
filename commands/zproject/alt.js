const Discord = require("discord.js");
module.exports = {
    name: "szia",
    category: "Tag",
    description: "help  parancs.",
    run: async (bot, message, args) => {
        let uzenet = [
            "👋Helló! Használd a **.help** parancsot a további ``infókért!``"
            
        ]
            message.channel.send(uzenet)
          }   
      
  }       
