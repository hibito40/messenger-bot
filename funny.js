module.exports.config = {
  name: "funny",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Sends a funny line",
  commandCategory: "Fun",
  usages: "[funny]",
  cooldowns: 3,
};
module.exports.run = async function({ api, event }) {
  const jokes = [
    "🤣 শিক্ষক: পাস করতে চাও? ছাত্র: না, শুধু প্রেজেন্ট থাকলেই চলবে স্যার!",
    "😂 ডাক্তার: খাওয়ার আগে পানি খাও। রোগী: খাবার তো খাই না!",
    "😜 আমি ডায়েট করছি, শুধু সকাল থেকে সন্ধ্যা পর্যন্ত কিছু খাই না, রাতে সব খাই!"
  ];
  return api.sendMessage(jokes[Math.floor(Math.random() * jokes.length)], event.threadID);
};