module.exports.config = {
  name: "photo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Generate a random photo link",
  commandCategory: "Image",
  usages: "[photo]",
  cooldowns: 3,
};
module.exports.run = async function({ api, event }) {
  return api.sendMessage("Here's your image 📷: https://picsum.photos/500", event.threadID);
};