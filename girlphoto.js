module.exports.config = {
  name: "girlphoto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Send a random girl photo",
  commandCategory: "Image",
  usages: "[girlphoto]",
  cooldowns: 3,
};
module.exports.run = async function({ api, event }) {
  const links = [
    "https://i.imgur.com/CYfpzBT.jpg",
    "https://i.imgur.com/qz1vG2A.jpg",
    "https://i.imgur.com/0vWZpeM.jpg"
  ];
  const rand = links[Math.floor(Math.random() * links.length)];
  return api.sendMessage({ body: "Cute girl photo 🧕", attachment: await global.utils.getStreamFromURL(rand) }, event.threadID);
};