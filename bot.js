require("dotenv").config()
const { Bot } = require("grammy")
const bot = new Bot(process.env.BOT_TOKEN)

bot.command("start", (ctx) => {
  ctx.reply("Hello! Welcome to my Telegram bot.")
})

bot.start()
