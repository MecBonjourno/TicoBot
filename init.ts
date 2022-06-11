import Discord, { ClientOptions, Intents } from "discord.js";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const promise = fs.promises.readFile(path.join("./assets/tico.jpg")); //this image exists

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Ready to eat pussy");
});

client.on("messageCreate", message => {
  if (message.content === "TicoBot") {
    // message.reply({
    //   content: "Eu sou Tico",
    // });
    // message.reply({
    //   content: "Eu sou Tico",
    //   files: ["https://imgur.com/a/Nmop1FY"],

    // });
    Promise.resolve(promise).then(function (buffer) {
      message.channel.send({
        content: `${message.author.username}, Eu sou Tico⁣`,
        files: [{ attachment: buffer }],
      });
    });
  }
});

// Promise.resolve(promise).then(function(buffer){
//     message.channel.send({content: `${message.author.username}'s base:\n⁣`, attachment: [buffer]}).catch(allerrors)
// });

client.login(process.env.BOT_TOKEN);
