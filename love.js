module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Send a love message",
  commandCategory: "Romance",
  usages: "[love]",
  cooldowns: 5,
};
module.exports.run = async function({ api, event }) {
  const loves = [
    "তুমি আমার হৃদয়ের রাণী 👑",
    "তোমাকে ছাড়া জীবন অচল 💔",
    "তোমার হাসিতে আমি হারিয়ে যাই 💞"
  ];
  return api.sendMessage(loves[Math.floor(Math.random() * loves.length)], event.threadID);
};