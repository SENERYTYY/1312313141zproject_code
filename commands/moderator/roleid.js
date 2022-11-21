const { MessageEmbed } = require("discord.js");

module.exports = {
    
        name: 'roleid',
        
    run: async (bot, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send("**Nincs jogod!**");
        }
        if (!args[0]) return message.channel.send("**Jelölj meg egy rangot!** ")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Egy létező rangot jelölj meg!** ");

        const status = {
            false: "Nem",
            true: "Igen"
        }

        let roleembed = new MessageEmbed()
            .setColor("RED")
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .setThumbnail("https://share.creavite.co/zLXrFCmpVBEPGL5k.gif")
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}