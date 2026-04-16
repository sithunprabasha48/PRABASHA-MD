const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nv4TiQ4Z#bJT9DC4t_J_2piWjXhJQaIM9DMarPIjV0Gua5z3J4ts",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/sithunprabasha48/PRABASHA-MD/blob/main/Imgee/IMG_20260415_011832_030.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 PRABASHA-MD Is Alive Now😍*",
BOT_OWNER: '94704519149',  // Replace with the owner's phone number



};
