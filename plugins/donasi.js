let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [-]
│ • 3: [0895704283153]
│ • Smartfren: [-]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/62895704283153
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
