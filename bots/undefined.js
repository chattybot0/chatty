const discord = require("discord.js");
const client = new discord.Client();
var clid = "undefined";
var name = "undefined";
var invite =
  "https://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=";
client.login("undefined");
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
  } else if (msg.content == ",rainbow") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2F0E4F18A7-6955-4524-9BD3-2302092C86CF.png?v=1599052378486"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",aromanticism") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2FC2CA6ACE-C6B5-4757-9B80-5779B3707992.png?v=1599052373385"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",asexuality") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2F524D3928-83FC-4AC6-B66B-804A26CBB004.png?v=1599052368790"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",bear") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2FDE21463C-0A63-4CAF-8E56-50D481683B1A.png?v=1599052365329"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",bisexuality") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2FC92F9749-2A74-4E02-BDA4-B6E639850C92.png?v=1599052325055"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",intersex") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2F6E9827C5-5E41-4F0D-89C9-5944A19B5330.png?v=1599052317017"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",lesbian") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2FEFBBAE51-08BC-42A8-B177-4573501C169C.png?v=1599052312068"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",nonbinary") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2FD165A0A1-8B78-4056-9D15-38582395315C.png?v=1599052307657"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",pansexuality") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2FDF836FA6-0F46-4FD9-A065-4B7EECFA22C9.png?v=1599052301911"
    );
    try {
      msg.delete();
    } catch {}
  } else if (msg.content == ",transgender") {
    msg.channel.send(
      "https://cdn.glitch.com/7d1ad713-02c6-4c5b-a005-31fa91d50a2d%2F7D326353-639E-4BBA-B759-047B4D2802D0.png?v=1599052300384"
    );
    try {
      msg.delete();
    } catch {}
  }
});
