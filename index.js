const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
var weather = require('weather-js');
const superagent = require('superagent');

const ms = require("ms");

const fs = require("fs");
const { get } = require("superagent");

bot.on("ready", async() => {
    console.log(`${bot.user.username} Elindult! | Üdv SENERYTY || Zanya `)

    let státuszok = [
        "Zanya40 bot",
        ".szia",
      

        

    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)

});

bot.on("message", async message => {
    let prefix = botconfig.prefix;



    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message)



    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();



    if(cmd.length === 0) return;



    let command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));



    if(command)
    command.run(bot, message, args);




    if (message.content.startsWith(prefix + "dc")) {
        const  DelAllChannels = message.mentions.channels.first() || message.channel;
        DelAllChannels.delete()
        .then(ch => {

        });
    }
     
});


    




bot.login(tokenfile.token);

console.log("Működik minden!")
