module.exports.config = {
  name: "say",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Repeat your message",
  commandCategory: "Utility",
  usages: "[say your text]",
  cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
  const message = args.join(" ");
  return api.sendMessage(message || "Please type something to say!", event.threadID);
};