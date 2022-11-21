
const Discord = require("discord.js");
module.exports = {
    name: "moderatord",
    category: "Tag",
    description: "Moderator d.",
    run: async (bot, message, args) => {
        let prefix = "."


      let warn_user = message.mentions.members.first();
      if(args[0] && warn_user){
        
    
          if(args[1]){
    
              let WarnEmbed = new Discord.MessageEmbed()
              .setTitle("🔨Moderátor dicséret🔨📋 ")
              .setColor("BLUE")
              .setDescription(`**Dicséretet tette:** ${message.author.tag}\n**Dicsérve lett: ** ${warn_user.user.tag}\n**Dicsérés indoka:** ${args.slice(1).join(" ")}\n**Időpont:** ${(message.createdAt)}`)
    
              message.channel.send(WarnEmbed);
    
                 
    
          } else {
          let parancsEmbed = new Discord.MessageEmbed()
              .setTitle("🔨Moderátor dicséret használata🔨📋")
              .addField(`${prefix}moderatord <@név> [indok]`, "ˇˇˇˇ")
              .setColor("BLUE")
              .setDescription("``ERROR: Kérlek adj meg egy indokot!``")
    
              message.channel.send(parancsEmbed);
          }
         
          
      } else {
          let parancsEmbed = new Discord.MessageEmbed()
          .setTitle("🔨Moderator dicséret  használata🔨📋")
          .addField(`${prefix}moderatord <@név> [indok]`, "ˇˇˇˇ")
          .setColor("BLUE")
          .setDescription("``ERROR: Kérlek említs meg egy felhasználót!``")
    
          message.channel.send(parancsEmbed);
        
  
        
  
      
      }
    }
    
  }