
const fs = require("fs-extra");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const path = require("path");

module.exports.config = {
  name: "song",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Search and send YouTube song as voice message",
  commandCategory: "media",
  usages: "/song [song name]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const songName = args.join(" ");
  if (!songName) return api.sendMessage("🎵 গানটির নাম লিখো! যেমন: /song Tum hi ho", event.threadID);

  try {
    const search = await yts(songName);
    const video = search.videos[0];
    if (!video) return api.sendMessage("❌ গান খুঁজে পাইনি। অন্যটা লিখে দেখো।", event.threadID);

    const stream = ytdl(video.url, { filter: "audioonly" });
    const filePath = path.join(__dirname, `${video.title}.mp3`);
    const writeStream = fs.createWriteStream(filePath);

    stream.pipe(writeStream);
    writeStream.on("finish", () => {
      api.sendMessage({
        body: `✅ গান: ${video.title}\n🔗 ${video.url}`,
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => fs.unlinkSync(filePath));
    });
  } catch (error) {
    console.error(error);
    api.sendMessage("🚫 কিছু একটা সমস্যা হয়েছে গান পাঠাতে। পরে আবার চেষ্টা করো।", event.threadID);
  }
};
