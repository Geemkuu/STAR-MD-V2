import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['254700569709', 'GEE', true], 
  ['254794286079', 'MKUU', true], 
  ['254757422843', '⚡gee', true],

] //Number of owners

//global.pairingNumber = "254700569709" //put your bot number here

global.mods = ['2341', '2348021779696', '2347045035241','233533763772'] 
global.prems = ['2347045035241','233208179431','233533763772']
global.allowed = ['2348021779696', '2347045035241']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '★彡ＮＯＮＳＥＮＳＥ 彡★'
global.premium = 'true'
global.packname = 'just me' 
global.author = '@gee' 
global.menuvid = 'https://telegra.ph/file/45040426cb67297d211b8.jpg'
global.igfg = '▢✓ dm for save for save\nhttps://whatsapp.com/chat/254700569709?text=hey+gee\n' 
global.dygp='▢✓ save my other number\nhttps://whatsapp.com/chat/254794286079?text=hey+gee\n'
global.fgsc = 'https://github.com/Geemkuu/STAR-MD-V2' 
global.fgyt = 'https://whatsapp.com/chat/254700569709?text=hey+gee+i+am+impressed+by+you,+i+want+to+save+your+contact'
global.fgpyp = 'https://chat.whatsapp.com/254700569709?text=hey+gee'
global.fglog = 'https://telegra.ph/file/45040426cb67297d211b8.jpg' 
global.thumb = 'https://telegra.ph/file/45040426cb67297d211b8.jpg'


global.wait = '*🕣your nonsense IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '🎧'
global.dmoji = '🙃'
global.done = '😌'
global.error = '😂' 
global.xmoji = '😒' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
