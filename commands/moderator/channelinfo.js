const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "channelinfo",
    run: async (bot, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send("**Nincs jogod!**");
        }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Ilyen szoba nem létezik!**");

        let channelembed = new MessageEmbed()
            .setTitle(`Csatorna információ: ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**Csatorna ID**", channel.id, true)
            .addField("**Csatorna típus**", channel.type)
            .addField("**Csatorna Leírás**", `${channel.topic || "Nincs leírás"}`)
            .setColor("#E811BD")
            .setThumbnail("https://cdn.discordapp.com/attachments/1009762508057366568/1009768617069522944/standard_4.gif")
        message.channel.send(channelembed);
    }
}