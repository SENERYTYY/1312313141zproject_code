const Discord = require("discord.js");
module.exports = {
    name: "clear",
    category: "Moderator",
    description: "Clear parancs.",
    run: async (bot, message, args) => {
        let prefix = "."

        if(message.member.hasPermission("KICK_MEMBERS")){
            if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){
      
                 if(args[0] && isNaN(args[0]) && args[0] <= 100 || 0 < args[0] && args[0] < 101){
      
                    message.channel.send(`✅ **|>Törölve lett:** ${Math.round(args[0])} **üzenet!**`) 
                    message.channel.bulkDelete(Math.round(args[0]))
                   
      
                 } else {
                     message.reply(`Használat: ${prefix}clear <1-100>`)
                 }
      
      
            } else message.reply("A botnak adminnak kell lennie a szerveren, hogy működjön a parancs!")
      
      
            
      
        } else message.reply("**`Ehhez a parancshoz nincs jogod!`**")
      }
    }