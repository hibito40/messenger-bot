module.exports.config = {
  name: "motivation",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Send motivational quote",
  commandCategory: "Inspiration",
  usages: "[motivation]",
  cooldowns: 4,
};
module.exports.run = async function({ api, event }) {
  const quotes = [
    "🌟 কখনো হাল ছেড়ো না, কারণ শুরুটাই সবসময় কঠিন!",
    "💪 পরিশ্রম কখনো বৃথা যায় না।",
    "🔥 নিজেকে বিশ্বাস করো, সাফল্য তোমার পেছনে আসবে।"
  ];
  return api.sendMessage(quotes[Math.floor(Math.random() * quotes.length)], event.threadID);
};