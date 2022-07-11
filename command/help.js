const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`╭─── 「 SHIROBOT-MD 」
│ ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
│
│📤 Upload : ${upload}
│⏬ Downloads : ${download}
│
│
│✍️ Creator : ${ownerName}
│🤖 Bot Name : ${botName}
│🕰️ Time : ${jam}
│📆 Date : ${tanggal}
│⏲️ Runtime : ${runtime(process.uptime())}
│
│
│📛 Name : ${pushname !== undefined ? pushname : '-'}
│🏅 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
│🎗️ Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
│🕹️️ Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
│⚖️ Balance : $${toCommas(getBalance(sender, balance))}
╰────────────────────


╭── 「 𝑀𝑎𝑖𝑛 𝑀𝑒𝑛𝑢 」
│• ${prefix}menu
│• ${prefix}infobot
│• ${prefix}donate
│• ${prefix}dashboard
│• ${prefix}owner
│• ${prefix}cekdrive
│• ${prefix}cekbandwidth
│• ${prefix}cekpremium
│• ${prefix}listpremium
│• ${prefix}listsewa
│• ${prefix}speed
│• ${prefix}runtime
│• ${prefix}listbahasa
╰──────────


╭── 「 𝐶𝑜𝑛𝑣𝑒𝑟𝑡𝑒𝑠/𝑇𝑜𝑜𝑙𝑠 」
│• ${prefix}sticker
│• ${prefix}stickerwm
│• ${prefix}smeme
│• ${prefix}toimg
│• ${prefix}tovideo
│• ${prefix}tomp3
│• ${prefix}ttp
│• ${prefix}attp
│• ${prefix}emojimix
│• ${prefix}translate
╰─────────


╭── 「 𝑊𝑟𝑖𝑡𝑒 𝑀𝑒𝑛𝑢 」
│• ${prefix}nuliskiri
│• ${prefix}nuliskanan
│• ${prefix}foliokiri
│• ${prefix}foliokanan
│• ${prefix}say
╰──────────


╭── 「 𝐴𝑛𝑜𝑛𝑦𝑚𝑜𝑢𝑠 𝐶ℎ𝑎𝑡 」
│• ${prefix}anonymous
│• ${prefix}start
│• ${prefix}next
│• ${prefix}stop
│• ${prefix}sendprofile
╰──────────


╭── 「 𝑆𝑡𝑜𝑟𝑒 𝑀𝑒𝑛𝑢 」
│• ${prefix}list
│• ${prefix}addlist
│• ${prefix}dellist
│• ${prefix}update
│• ${prefix}jeda
│• ${prefix}tambah
│• ${prefix}kurang
│• ${prefix}kali
│• ${prefix}bagi
│• proses < reply chat >
│• done < reply chat >
╰──────────


╭── 「 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑠 𝑀𝑒𝑛𝑢 」
│• ${prefix}play
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}instagram
│• ${prefix}igstory
│• ${prefix}tiktok
│• ${prefix}tiktoknowm
│• ${prefix}tiktokaudio
│• ${prefix}facebook
│• ${prefix}mediafire
╰─────────


╭── 「 𝐺𝑟𝑜𝑢𝑝 𝑀𝑒𝑛𝑢 」
│• ${prefix}afk
│• ${prefix}welcome
│• ${prefix}left
│• ${prefix}setwelcome
│• ${prefix}changewelcome
│• ${prefix}delsetwelcome
│• ${prefix}setleft
│• ${prefix}changeleft
│• ${prefix}delsetleft
│• ${prefix}linkgc
│• ${prefix}setppgc
│• ${prefix}setnamegc
│• ${prefix}setdesc
│• ${prefix}antilink
│• ${prefix}antiwame
│• ${prefix}open
│• ${prefix}close
│• ${prefix}add
│• ${prefix}kick• ${prefix}promote
│• ${prefix}demote
│• ${prefix}revoke
│• ${prefix}hidetag
│• ${prefix}checksewa
╰──────────


╭── 「 𝐺𝑎𝑚𝑒 𝑀𝑒𝑛𝑢 」
│• ${prefix}tictactoe
│• ${prefix}delttt
│• ${prefix}casino
│• ${prefix}delcasino
╰─────────


╭── 「 𝑆𝑒𝑎𝑟𝑐ℎ 𝑀𝑒𝑛𝑢 」
│• ${prefix}lirik
│• ${prefix}grupwa
│• ${prefix}pinterest
│• ${prefix}ytsearch
│• ${prefix}searchbyimage
╰────────────


╭── 「 𝑅𝑎𝑛𝑑𝑜𝑚 𝑀𝑒𝑛𝑢 」
│• ${prefix}cecan
│• ${prefix}cogan
│• ${prefix}waifu
╰────────


╭── 「 𝐵𝑎𝑙𝑎𝑛𝑐𝑒 𝑀𝑒𝑛𝑢 」
│• ${prefix}topglobal
│• ${prefix}toplocal
│• ${prefix}buylimit
│• ${prefix}buyglimit
│• ${prefix}transfer
│• ${prefix}limit
│• ${prefix}balance
╰─────────


╭── 「 𝐵𝑎𝑖𝑙𝑒𝑦𝑠 𝑀𝑒𝑛𝑢 」
│• ${prefix}fitnah
│• ${prefix}nowa
│• ${prefix}getquoted
│• ${prefix}fakehidetag
│• ${prefix}react
│• ${prefix}setcmd
│• ${prefix}delcmd
╰─────────


╭── 「 𝑂𝑤𝑛𝑒𝑟 𝑀𝑒𝑛𝑢 」
│• ${prefix}join
│• ${prefix}left
│• ${prefix}self
│• ${prefix}public
│• ${prefix}setprefix
│• ${prefix}setppbot
│• ${prefix}broadcast
│• ${prefix}bcsewa
│• ${prefix}addpremium
│• ${prefix}delpremium
│• ${prefix}addsewa
│• ${prefix}delsewa
╰─────────`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/6286872761910 (Owner)
wa.me/6285794408499 (Owner)`
}
