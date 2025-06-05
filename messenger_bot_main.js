// index.js

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Load all commands from files
const commandsDir = path.join(__dirname);
const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith(".js") && file !== "index.js");

const commands = new Map();

for (const file of commandFiles) {
  const command = require(path.join(commandsDir, file));
  commands.set(command.config.name, command);
}

// Simulate Messenger Event (via CLI)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🤖 Messenger Bot is ready! Type your message below:");

rl.on("line", async (line) => {
  const fakeEvent = {
    body: line,
    threadID: "fakeThread",
    messageID: Date.now().toString(),
    senderID: "user123"
  };

  for (const [name, cmd] of commands) {
    if (cmd.config.usages === "noprefix") {
      await cmd.handleEvent({
        api: fakeApi,
        event: fakeEvent,
        args: [],
        Threads: {},
        Users: mockUsers
      });
    } else if (line.startsWith("/" + name)) {
      await cmd.run({
        api: fakeApi,
        event: fakeEvent,
        args: line.split(" ").slice(1),
        Threads: {},
        Users: mockUsers
      });
    }
  }
});

// Mock API and Users
const fakeApi = {
  sendMessage: (message, threadID) => {
    console.log(`\n[Bot Reply]: ${message}`);
  }
};

const mockUsers = {
  getNameUser: async (id) => "User"
};
