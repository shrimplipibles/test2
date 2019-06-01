const Discord = require('discord.js');

const client = new Discord.Client();
var prefix = "*";

client.login("NTg0Mjk5NjcyNjU5Njg5NDgy.XPKRZQ.NQnx2Fod774jkiFYJxqaoGzZszw");
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
client.login('NTg0Mjk5NjcyNjU5Njg5NDgy.XPKRZQ.NQnx2Fod774jkiFYJxqaoGzZszw')
