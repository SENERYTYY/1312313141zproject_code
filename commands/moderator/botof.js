const Discord = module.require ("discord.js");
const bot = new Discord.Client();

const ID = ("804358449533157414")

module.exports = {
    name: "of",
    description: "leallitja a botot",
    run: async (bot, message, args) => {
        if(message.author.id != `${ID}`) return message.reply('Csak **`developer`** használhatja ezt a ``parancsot``!')
        message.channel.send('**Leállítás....**').then(m => {
            bot.destroy();
          });
          await message.channel.send("**A bot sikeresen leállítva!**")
    
          console.log("A bot of parancsal lekapcsolva!")

        }
}