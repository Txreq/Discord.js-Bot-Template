const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
require('dotenv').config();


// command handling
const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandsFiles) { 
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command); 
}

bot.on('message', async msg => {
    if(!msg.content.startsWith(config.mainPrefix || msg.author.bot)) return;
    const args = msg.content.slice(config.mainPrefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(!bot.commands.has(command)) return;
    try{
        bot.commands.get(command).execute(msg, args)
    } catch(err){
        console.log(err)
        msg.reply('Error with executing this command!')
    }
})

bot.login(process.env.TOKEN)

/* 

Just 

*/