const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const https = require("https");
var code = ["new", "1"];
var updated = "";
const restart = require("./server.js");
function log(contents) {
  client.users.fetch("497695386513965056").then(user => {
    user.send(
      contents
    );
  });
}
function execute() {
  fs.readFile("list.txt", "utf8", function (err, contentz) {
    var count = contentz.split("''");
    client.user.setActivity("!help | Hosting " + count.length + " bots");
  });
  const restart = require("./server.js");
  fs.readFile("list.txt", "utf8", function (err, contents) {
    var array = contents.split("''");
    array.forEach(element => {
      log("Executing bot " + element);
      const bot = require("./bots/" + element);
    });
  });
  setTimeout(execute, 60000);
}
function credit(message) {
  log("Verifying if " + message.author.tag + "has enough credits...");
  fs.readFile("money/" + message.author.tag, "utf8", function (err, contents) {
    if (err == null && contents != null && contents != 0) {
      fs.writeFile("money/" + message.author.tag, Number(contents), function (err) {
        log("Success for user: "+message.author.tag+"\nBalance: " + contents);
        process(message, message.author.tag, contents);
      });
    } else {
      log("Failed for user: "+message.author.tag);
      message.reply(
        "Hello! i see that you are eager to make your bot!\nSorry,but if you want to make a bot,use the !charge~NITRO_GIFT_URL command and charge the bot.charging may take a while to activate,cause the owner may not be online.\nSending a nitro classic will result in a bot,and a nitro will result in 3.\nall values are in month,not year."
      );
    }
  });
}
client.on("ready", () => {
  //SET ACTIVITY
  fs.readFile("list.txt", "utf8", function (err, contentz) {
    var count = contentz.split("''");
    client.user.setActivity("!help | Hosting " + count.length + " bots");
  });
  //saying I'M READY
  log(`Bot ID:${client.user.tag}`);
  setTimeout(execute, 2000);
});
function process(msg, verifiedornot, amount) {
  if (msg.author.bot) {
    return;
  } else if (msg.content.split("~")[0] == "!chatbot") {
    if (verifiedornot === msg.author.tag) {
      var splat = msg.content.split("~");
      if (fs.existsSync("bots/" + splat[2] + ".js")) {
        msg.reply("Oh,well,seems like this bot name was taken before.\nTry not to waste your bots!however imga charge you...");
        fs.writeFile("money/" + msg.author.tag, Number(amount), function (err) {
          if (err == null) {
            msg.reply("So you were charged,don't do that anymore my friend!");
          }
        });
      } else {
        msg.channel.send("please wait until we create your chatbot...");
        fs.readFile("chatbot.js", "utf8", function (err, contents) {
          const str = splat[1];
          const buff = Buffer.from(str, 'utf-8');
          const base64 = buff.toString('base64');
          updated = contents.replace("token123", base64);
          updated = updated.replace("name123", splat[2]);
          updated = updated.replace("clientid", splat[3]);
          fs.writeFile("bots/" + splat[2] + ".js", updated, function (err) {
            fs.readFile("list.txt", "utf8", function (err, contentz) {
              fs.writeFile(
                "list.txt",
                contentz + "''" + splat[2] + ".js",
                function (err) {
                  if (err === null) {
                    const bot = require("./bots/"+splat[2]+".js");
                    msg.reply(
                      "Success!\nUse this link to add your bot to your server:\nhttps://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=" +
                      splat[3]
                    );
                  }
                }
              );
            });
          });
        });
      }
    }
  } else if (msg.content.split("~")[0] == "!truthdare") {
    if (verifiedornot === msg.author.tag) {
      var splat = msg.content.split("~");
      if (fs.existsSync("bots/" + splat[2] + ".js")) {
        msg.reply("Oh,well,seems like this bot name was taken before.\nTry not to waste your bots!however imga charge you...");
        fs.writeFile("money/" + msg.author.tag, Number(amount), function (err) {
          if (err == null) {
            msg.reply("So you were charged,don't do that anymore my friend!");
          }
        });
      } else {
        msg.channel.send("please wait until we create your truth or dare bot...");
        fs.readFile("truthdare.js", "utf8", function (err, contents) {
          const str = splat[1];
          const buff = Buffer.from(str, 'utf-8');
          const base64 = buff.toString('base64');
          updated = contents.replace("token123", base64);
          updated = updated.replace("name123", splat[2]);
          updated = updated.replace("clientid", splat[3]);
          fs.writeFile("bots/" + splat[2] + ".js", updated, function (err) {
            fs.readFile("list.txt", "utf8", function (err, contentz) {
              fs.writeFile(
                "list.txt",
                contentz + "''" + splat[2] + ".js",
                function (err) {
                  if (err === null) {
                    const bot = require("./bots/"+splat[2]+".js");
                    msg.reply(
                      "Success!\nUse this link to add your bot to your server:\nhttps://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=" +
                      splat[3]
                    );
                  }
                }
              );
            });
          });
        });
      }
    }
  } else {
    msg.reply("unknown command,do !help for help.");
  }
}
client.on("message", msg => {
  if(!msg.author.bot){log(msg.author.tag + " issued this command:```"+msg.content+"```ID: "+msg.author.id);}
  if (!msg.author.bot) {
    if (
      msg.content.split("~")[0] === "!give" &&
      msg.author.tag == "Mforoud86#5928"
    ) {
      var splter = msg.content.split("~");
      msg.reply("Verifying...");
      fs.writeFile("money/" + splter[1], splter[2], function (err) {
        if (err == null) {
          msg.reply("success sir!");
        }
      });
    } else if (msg.content === "!dummy") {
      msg.reply(msg.author.id);
      msg.reply(msg.author.tag);
    } else if (
      msg.content.split("|")[0] === "!bal" &&
      msg.author.tag == "Mforoud86#5928"
    ) {
      fs.readFile("money/" + msg.content.split("|")[1], "utf8", function (
        err,
        contents
      ) {
        msg.reply("The balance for this user is:" + contents);
      });
    } else if (msg.content === "!create") {
      msg.reply(
        "**[PREMIUM]**\nThis is not a valid use,you should use it like this:\n!create~TOKEN~NAME~CLIENTID\nOr you can use !truthdare~TOKEN~NAME~CLIENTID to create a truth or date bot.\n!pride will let you to make a free pride flag bot."
      );
    } else if (msg.content.split("~")[0] == "!charge") {
      client.users.fetch("497695386513965056").then(user => {
        user.send(
          "[" + msg.author.tag + "] " + "(" + msg.content.split("~")[1] + ")"
        );
        msg.reply("Done.\nPlease wait for your nitro to be verified.");
      });
    } else if (msg.content == "!redeem " + code[0]) {
      fs.readFile("codes/" + msg.author.tag, "utf8", function (err, text) {
        if (text == code[0]) {
          msg.reply("Already redeemed!");
        } else {
          fs.writeFile("codes/" + msg.author.tag, code[0], function (err) {
            if (err == null) {
              var splter = msg.content.split("~");
              fs.writeFile("money/" + splter[1], splter[2], function (err) {
                if (err == null) {
                  msg.reply("You got " + code[1] + " bots!");
                }
              });
            }
          });
        }
      });
    } else if (msg.content.split("~")[0] == "!pride") {
      if (msg.author.tag === msg.author.tag) {
        var splat = msg.content.split("~");
        if (fs.existsSync("bots/" + splat[2] + ".js")) {
          msg.reply("Oh,well,seems like this bot name was taken before.\nTry not to waste your bots!however imga charge you...");
          fs.writeFile("money/" + msg.author.tag, Number(amount), function (err) {
            if (err == null) {
              msg.reply("So you were charged,don't do that anymore my friend!");
            }
          });
        } else {
          msg.channel.send("please wait until we create your pride bot...");
          fs.readFile("pride.js", "utf8", function (err, contents) {
            const str = splat[1];
            const buff = Buffer.from(str, 'utf-8');
            const base64 = buff.toString('base64');
            updated = contents.replace("token123", base64);
            updated = updated.replace("name123", splat[2]);
            updated = updated.replace("clientid", splat[3]);
            fs.writeFile("bots/" + splat[2] + ".js", updated, function (err) {
              fs.readFile("list.txt", "utf8", function (err, contentz) {
                fs.writeFile(
                  "list.txt",
                  contentz + "''" + splat[2] + ".js",
                  function (err) {
                    if (err === null) {
                      const bot = require("./bots/"+splat[2]+".js");
                      msg.reply(
                        "Success!\nUse this link to add your bot to your server:\nhttps://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=" +
                        splat[3]
                      );
                    }
                  }
                );
              });
            });
          });
        }
      }
    }
    else if (msg.content == "!truthdare") {
      msg.reply(
        "**[PREMIUM]**\nThis is not a valid use,you should use it like this:\n!create~TOKEN~NAME~CLIENTID\nOr you can use !truthdare~TOKEN~NAME~CLIENTID to create a truth or date bot.\n!pride will let you to make a free pride flag bot."
      );
    } else if (msg.content == "!pride") {
      msg.reply(
        "**[PREMIUM]**\nThis is not a valid use,you should use it like this:\n!chatbot~TOKEN~NAME~CLIENTID\nOr you can use !truthdare~TOKEN~NAME~CLIENTID to create a truth or date bot.\n!pride will let you to make a free pride flag bot."
      );
    } else if (msg.content == "!chatbot") {
      msg.reply(
        "**[PREMIUM]**\nThis is not a valid use,you should use it like this:\n!chatbot~TOKEN~NAME~CLIENTID\nOr you can use !truthdare~TOKEN~NAME~CLIENTID to create a truth or date bot.\n!pride will let you to make a free pride flag bot."
      );
    } else if (msg.content == "!help") {
      msg.reply(
        "\!chatbot~TOKEN~NAME~CLIENTID for creating a chatbot,\nOr you can use !truthdare~TOKEN~NAME~CLIENTID to create a truth or date bot.\n!pride will let you to make a free pride flag bot."
      );
    }
    else {
      credit(msg);
    }
  }
});
const base64 = "TnpRNU1UTXpORGd6TnpJME5qTTJNalF3Llgwbmk3QS5NT2Q4ZHNaVnRPdUVrc3lTbjBVTWl4bWRTYm8=";
const buff = Buffer.from(base64, 'base64');
const str = buff.toString('utf-8');
try { client.login(str); } catch (err) { console.log(err); }