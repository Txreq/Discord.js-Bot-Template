const Discord = require("discord.js");
const config = require('../config.json');
module.exports = {
    name: 'ping',
    execute(msg, args){
                let pingEmbed = new Discord.MessageEmbed()
                .setColor(config.color)
                .addField('📶 | Ping :', `${m.createdTimestamp - msg.createdTimestamp}ms`)
                .setTimestamp()
                msg.channel.send(pingEmbed)
    }
}