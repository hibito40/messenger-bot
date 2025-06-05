// index.js
require('dotenv').config();
const cookie = process.env.FB_COOKIE;
const moment = require("moment-timezone");

// লগইন তথ্য (config.json থেকে নিতে পারো)
const credentials = {
  email: "your-email@example.com",
  password: "your-password"
};

login(credentials, (err, api) => {
  if (err) return console.error(err);

  api.setOptions({
    listenEvents: true,
    selfListen: false
  });

  console.log("🤖 Bot is now online...");

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);

    if (event.type === "message" || event.type === "message_reply") {
      const message = event.body.toLowerCase();

      if (message.startsWith("/time")) {
        const time = moment().tz("Asia/Dhaka").format("h:mm:ss A");
        api.sendMessage(`🕐 বর্তমান সময়: ${time}`, event.threadID);
      }

      if (message.startsWith("/hello")) {
        api.sendMessage(`হ্যালো! আমি আবরার ফাহিমের তৈরি একটি বট 😊`, event.threadID);
      }

      if (message.startsWith("/help")) {
        api.sendMessage("📝 কমান্ড লিস্ট:\n/time - সময় দেখাও\n/hello - অভিবাদন\n/help - সাহায্য", event.threadID);
      }
    }
  });
});
