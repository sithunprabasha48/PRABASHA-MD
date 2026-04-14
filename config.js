const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vrBC3RQC#XCB0P05w03tpN8DSKhlaGpD3sFxMFuM2xeEXOIYIdHc",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DANUWA-MD/DANUWA-MD/blob/main/images/DANUWA-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 PRABASHA-MD Is Alive Now😍*",
BOT_OWNER: '94704519149',  // Replace with the owner's phone number



};
