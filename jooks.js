module.exports.config = {
  name: "jooks",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Send funny jooks",
  commandCategory: "Fun",
  usages: "[jooks]",
  cooldowns: 4,
};
module.exports.run = async function({ api, event }) {
  const jokes = [
    "বউ: খেতে বসো।\nস্বামী: কি রান্না করেছো?\nবউ: ঝগড়া।",
    "স্বামী: ভালোবাসা মানে কী?\nস্ত্রী: প্রতি মাসে পকেট খালি করা! 😆"
  ];
  return api.sendMessage(jokes[Math.floor(Math.random() * jokes.length)], event.threadID);
};