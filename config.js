/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '92ed0c8c3f',
}
////////////////////////////////////////////////////|:|             OWNER DETAILS             |:|//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.session = process.env.SESSION_ID || 'OVFFeERQRUs=',
global.ownername = process.env.OWNER_NAME === undefined ? "rfndika" : process.env.OWNER_NAME
let fake = process.env.OWNER_NUMBER === undefined ? '6282121426249' : process.env.OWNER_NUMBER
global.owner = [`${fake}`]
global.ownernumber = [`${fake}`]
global.premium = [`${fake}`]
global.anticall = process.env.ANTICALL === undefined ? 'true' : process.env.ANTICALL
global.packname = process.env.PACK_NAME === undefined ? 'rfndika' : process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME === undefined ? 'rfndika' : process.env.STICKER_AUTHOR_NAME
global.pmblock = process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK
global.chatbot_pm = process.env.PM_CHATBOT === undefined ? 'false' : process.env.PM_CHATBOT
global.chatbot_group = process.env.GROUP_CHATBOT === undefined ? 'false' : process.env.GROUP_CHATBOT

/////////////////////////////////////////////////////////////////||SESSION ID METHOD||///////////////////////////////////////////////////////////////////////
global.sessionconvert = ['true']                           //This is session id method.....//Don't Change
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.Botname = 'rfndika'
global.prefa = ['.']
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.mess = {
        wait: '*SEBENTAR*',
        owner: '*🔰️ ᴏɴʟʏ ᴍʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ*',
        group: '*🔰️ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ᴍᴀᴅᴇ ꜰᴏʀ *ɢʀᴏᴜᴘꜱ* ᴏɴʟʏ !*',
        admin: '*🔰️ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴏɴʟʏ ꜰᴏʀ *ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ !*',
        botadmin: '*ꜱᴏʀʀʏ😔️, ɪ ᴄᴀɴɴᴏᴛ ʀᴜɴ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜᴏᴜᴛ ʙᴇɪɴɢ ᴀɴ *ᴀᴅᴍɪɴ* ᴏꜰ ᴛʜɪꜱ ɢʀᴏᴜᴘ.*',
        botAdmin: '*ꜱᴏʀʀʏ😔️, ɪ ᴄᴀɴɴᴏᴛ ʀᴜɴ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜᴏᴜᴛ ʙᴇɪɴɢ ᴀɴ *ᴀᴅᴍɪɴ* ᴏꜰ ᴛʜɪꜱ ɢʀᴏᴜᴘ.*',
        banned: '*❌️ ʏᴏᴜ ᴀʀᴇ *ʙᴀɴɴᴇᴅ* ꜰʀᴏɴ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ !*',
        bangc: '*❌️ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪꜱ ʙᴀɴɴᴇᴅ ꜰʀᴏᴍ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ !*',
}
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
