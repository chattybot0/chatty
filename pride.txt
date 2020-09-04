const discord = require("discord.js");
const client = new discord.Client();
var clid = "clientid";
var name = "name123";
var invite =
  "https://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=";
  const base64 ="token123";
const buff = Buffer.from(base64, 'base64');
const str = buff.toString('utf-8');
try{client.login(str);} catch{}
client.on("ready", () => {
  //SET ACTIVITY
  client.user.setActivity(",flaglist");
});
client.on("message", msg => {
  if (msg.content == ",flaglist") {
    msg.channel.send(
      "To get a flag,use the prefix ',' and then enter the name of the flag.it will be sent to you and your message will be deleted.\n List of supported pride flags:\nrainbow\naromanticism\nasexuality\nbear\nbisexuality\nintersex\nlesbian\nnon-binary\npansexuality\ntransgender"
    );
    try {
      msg.delete();
    } catch {}
  } 
});
