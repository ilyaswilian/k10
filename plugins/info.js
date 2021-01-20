let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Ilyas wilian
╠➥ Script: @Nurotomo
╠➥ Github: https://github.com/ilyaswilian/k10
╠➥ Instagram: @cc2061338sdt
╠➥ YouTube: ilyas wilian
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: -
╠➥ 3: 0895704283153
╠➥ Indosat: -
║
║>Request? Wa.me/62895704283153
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

