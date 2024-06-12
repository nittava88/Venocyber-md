//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "matara, yatiyana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://nittava:Iamride9@@nittava.uivsr5o.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "colombo/srilanka";
global.github = process.env.GITHUB || "https://github.com/nittava88/";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "94711772458";
global.owner = process.env.OWNER_NUMBER || "94711772458";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdEczNOemozMXRCVE4vM3p4MHJCUUhNd3RXVFJwQjdsWnN4ZFFSbGsyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWW1ZdDhtMEpYOExJaDhnalBueDczQllGREtLaEk3ckIyaEJEVXZKRmdDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQUxiaFc1S3lXOXoyUTBlY3hMMWs4Y1RldnA5RWRYSHBYWGNQUWs3TkhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcVdjYzlaQ1R1cHZ3VWJDSGZkVDRvQ0FjVk4zamZiT3VnOERpazR6NGpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KcitBMnlDUW9BNEtmdS84aHptQUNpK2F2djljbmFWMEdLQXplcGpiSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJNU2l3c1JqVjlibVZyZEhHQlQwQjRTWnBZN1VkR28vL1l2NzVnU2dId289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFNMHpQVW96SXp6QmJJNEtFWm5tT25VM1ZKUlZtR0pYQzg5dEpnOVpFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVg5UzlPZzZuRUdTOERyVTI3MFJtSXpNZDZwOTNnTmFJSngvMGs3WXZIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik43cVJRY0JnbWpUYW91NXlNQkNHR0JNa3RNYk0waFJhdzh3YnM4bUc3MnprWENDK2MrTXVKNXNIL0tYckJtWE9lM2hFdWEwdVZieElJT2YrcnNSRGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6InRpSDBEdHVTOERINXloVUxBM21nb1Y3UVBWN2pQQ3VkODk5ZVpDRFFCOWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTE3NzI0NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0E3QjgwMjdDMUIzODRCRUU0OTQ4Mjk4QTcwMTIwNDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODE4MTYxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTE3NzI0NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkEzM0NEMzdFMkNDRDA4QUFGOEI1NDhBMEVBMzA5Q0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODE4MTYyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLUs1RWs2dzBRSFNSc0ZGYjgxOUxXQSIsInBob25lSWQiOiIzNTI1NmE5NC1lNGRhLTQ5ZDItYTk4MC03YzhkMmMyOWEwM2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlNIcVdoM3d6UFk0NzJVOVBqMEpLelNQV1ZVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk1clpXNVlINXU3Q0krT0tQMncrR0hDSVJWVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZSDFRQ1JXTiIsIm1lIjp7ImlkIjoiOTQ3MTE3NzI0NTg6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMejE3TkVGRU9XOXBiTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxM2w1YVVtOUJGR1lQQklhRXJia2cyRDJudE1rcWNkbVZQc3FKNXJMYndRPSIsImFjY291bnRTaWduYXR1cmUiOiJERWRydG5ES1VudWhCa3JuYmhTQ21idWhZMFp5dWJEemJ6cno0K3BydWh2TzJMTXNYZGR4MVFiUFV1MHZjRGE5Q0hjdkZmd2ZjYW0wOExZRUoyb29EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRU9DYVV4Y2F5NVpVSkNsNUZCbktWOGRJTzJFNWNuRmlYWk0rODdDOERJTXZWbG5iamVOcHZua0ZhUEFhYm5oU1RYc2NSY01zZndvaHdBS1JOd3IzZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMTc3MjQ1ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF0NWVXbEp2UVJSbUR3U0doSzI1SU5nOXA3VEpLbkhabFQ3S2llYXkyOEUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTgxODE2MTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFJvIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "MR_NITTAVA ",
  author: process.env.PACK_AUTHER || "TASHINDU MANURANGA ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "NITTAVA-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MR_NITTAVA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "PUBLIC",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
