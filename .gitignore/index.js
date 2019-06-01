const Discord = require('discord.js');

const client = new Discord.Client();
var prefix = "*";

client.login("NTg0NDUzNTIwNTk4NzYxNDcy.XPLIxw.fXkLBx3ozhFx3dGkU1mzBuOQSHY");
client.on("ready", () => { 
    console.log("Je suis prêt !"); 
    client.user.setGame("être un test");
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
})
client.login('NTg0NDUzNTIwNTk4NzYxNDcy.XPLIxw.fXkLBx3ozhFx3dGkU1mzBuOQSHY')
