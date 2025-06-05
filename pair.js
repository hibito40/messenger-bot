module.exports.config = {
  name: "pair",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Make a funny pair",
  commandCategory: "Fun",
  usages: "[pair]",
  cooldowns: 4,
};
module.exports.run = async function({ api, event }) {
  const all = [
    "তুমি আর রিমি আজ থেকে প্রেম করো! ❤️",
    "তুমি আর সোনিয়া এক জোড়া মিষ্টি জুটি 😍",
    "তুমি আর তানিয়া এখন থেকে কাপল! 💞"
  ];
  return api.sendMessage(all[Math.floor(Math.random() * all.length)], event.threadID);
};