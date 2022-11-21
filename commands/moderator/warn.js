
const Discord = require("discord.js");
module.exports = {
    name: "warn",
    category: "Moderator",
    description: "Warn parancs.",
    run: async (bot, message, args) => {
        let prefix = "!"


      let warn_user = message.mentions.members.first();
      if(message.member.hasPermission("ADMINISTRATOR"))
      if(args[0] && warn_user){
        
    
          if(args[1]){
    
              let WarnEmbed = new Discord.MessageEmbed()
              .setTitle("📕 WARN 📕")
              .setColor("RED")
              .setDescription(`**Figyelmeztette:** ${message.author.tag}\n**Figyelmeztetve lett:** ${warn_user.user.tag}\n**Figyelmeztetés indoka:** ${args.slice(1).join(" ")}\n**Időpont:** ${(message.createdAt)}`)
    
              message.channel.send(WarnEmbed);
    
                 
    
          } else {
          let parancsEmbed = new Discord.MessageEmbed()
              .setTitle("📕WARN📕 parancs használata")
              .addField(`${prefix}warn <@név> [indok]`, "ˇˇˇˇ")
              .setColor("RED")
              .setDescription("``ERROR: Kérlek adj meg egy indokot!``")
    
              message.channel.send(parancsEmbed);
          }
         
          
      } else {
          let parancsEmbed = new Discord.MessageEmbed()
          .setTitle("📕WARN📕 parancs használata")
          .addField(`${prefix}warn <@név> [indok]`, "ˇˇˇˇ")
          .setColor("RED")
          .setDescription("``ERROR: Kérlek említs meg egy felhasználót!``")
    
          message.channel.send(parancsEmbed);
        
  
        
  
      
      }
    }
    
  }