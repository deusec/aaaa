const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

//sebagian panel gk support opena ai jadi mungkin apikey lu bakalan di blokir
//klo misalkan pada saat memakai fitur ai, terus dapat email dari open si, itu berarti website tempat lu install bot gk support ai
global.OpenAIKey = "YOUR_KEY" //login to https://platform.openai.com/account/api-keys to get apikey

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'V12', // 👉 login https://api.zeeoneofc.my.id to get apikey
}
global.sewabotnya = `
edit sewabot di file settings.js line 24
`
// setting 
global.firtsChat = true //send firts message to new user
global.autoread = true // auto read message
global.antidelete = false // anti delete
global.antiviewonce = true // anti view once
global.autobio = false //auto ganti bio
global.anticall = true //anti call, jika true maka org yg nelpon bot auto di blokir
global.userRegister = false
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot
global.autolevelup = false
global.auto_antilink = false //jika true, bot (admin) otomatis menghapus pesan & mengeluarkan member yang mengirim link grup
global.auto_antilink2 = false  //jika true, bot (admin) otomatis menghapus pesan member yang mengirim link grup
global.auto_badword = false //jika true, bot (admin) otomatis menghapus pesan & mengeluarkan member yg mengirim kata kasar
global.auto_badword2 = false  //jika true, bot (admin) otomatis menghapus pesan member yang mengirim kata kasar
global.auto_antiwame = false  //jika true, bot (admin) otomatis menghapus pesan & mengeluarkan member yang mengirim link grup
global.auto_antiwame2 = false  //jika true, bot (admin) otomatis menghapus pesan member yang mengirim link grup
global.autowelcome = false //auto welcome msg all group
global.autodetectpromote = false //auto detect admin all group
global.autodetectdemote = false //auto detect un admin all group
global.autogoodbye = false //auto goodbye msg all group
global.groupOnly = false //bot hanya bisa di gunakan dalam grup jika true

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot
//global.language = english // use this for English language
//global.language = spanyol // use this for Spanyol language

// Other
// Other
global.botname = "WhatsAppSec" //namabot kalian
global.ownername = "WhatsApp" //nama kalian
global.myweb = "https://tolol.ml" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/@Deusec" //bebas asal jan hapus
global.myweb2 = "https://tolol.ml/donate" //bebas
global.email = "support@tolol.ml" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium_fitur = ["ai", "openai", "chatgpt"] //tambahin aja sendiri, soalnya gk semua org mau fiturnya premium jadi gw buat kyk gini aja, biar bisa custom fitur mana aja yang bakal di jadiin premium
global.badword_list = ["asu", "anjir"] //tambahin sendiri kata² nya, gunakan huruf kecil
global.premium = ['6281327893987'] //premium user
global.owner = ["6281327893987"] //ganti agar fitur owner bisa di gunakan
global.ownercontac = ["6281327893987","0","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246","247","248","249","250","251","252","253","254","255","256","257","258","259","260","261","262","263","264","265","266","267","268","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","319","320","321","322","323","324","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","343","344","345","346","347","348","349","350","351","352","353","354","355","356","357","358","359","360","361","362","363","364","365","366","367","368","369","370","371","372","373","374","375","376","377","378","379","380","381","382","383","384","385","386","387","388","389","390","391","392","393","394","395","396","397","398","399","400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","432","433","434","435","436","437","438","439","440","441","442","443","444","445","446","447","448","449","450","451","452","453","454","455","456","457","458","459","460","461","462","463","464","465","466","467","468","469","470","471","472","473","474","475","476","477","478","479","480","481","482","483","484","485","486","487","488","489","490","491","492","493","494","495","496","497","498","499","500","501","502","503","504","505","506","507","508","509","510","511","512","513","514","515","516","517","518","519","520","521","522","523","524","525","526","527","528","529","530","531","532","533","534","535","536","537","538","539","540","541","542","543","544","545","546","547","548","549","550","551","552","553","554","555","556","557","558","559","560","561","562","563","564","565","566","567","568","569","570","571","572","573","574","575","576","577","578","579","580","581","582","583","584","585","586","587","588","589","590","591","592","593","594","595","596","597","598","599","600","601","602","603","604","605","606","607","608","609","610","611","612","613","614","615","616","617","618","619","620","621","622","623","624","625","626","627","628","629","630","631","632","633","634","635","636","637","638","639","640","641","642","643","644","645","646","647","648","649","650","651","652","653","654","655","656","657","658","659","660","661","662","663","664","665","666","667","668","669","670","671","672","673","674","675","676","677","678","679","680","681","682","683","684","685","686","687","688","689","690","691","692","693","694","695","696","697","698","699","700","701","702","703","704","705","706","707","708","709","710","711","712","713","714","715","716","717","718","719","720","721","722","723","724","725","726","727","728","729","730","731","732","733","734","735","736","737","738","739","740","741","742","743","744","745","746","747","748","749","750","751","752","753","754","755","756","757","758","759","760","761","762","763","764","765","766","767","768","769","770","771","772","773","774","775","776","777","778","779","780","781","782","783","784","785","786","787","788","789","790","791","792","793","794","795","796","797","798","799","800","801","802","803","804","805","806","807","808","809","810","811","812","813","814","815","816","817","818","819","820","821","822","823","824","825","826","827","828","829","830","831","832","833","834","835","836","837","838","839","840","841","842","843","844","845","846","847","848","849","850","851","852","853","854","855","856","857","858","859","860","861","862","863","864","865","866","867","868","869","870","871","872","873","874","875","876","877","878","879","880","881","882","883","884","885","886","887","888","889","890","891","892","893","894","895","896","897","898","899","900","901","902","903","904","905","906","907","908","909","910","911","912","913","914","915","916","917","918","919","920","921","922","923","924","925","926","927","928","929","930","931","932","933","934","935","936","937","938","939","940","941","942","943","944","945","946","947","948","949","950","951","952","953","954","955","956","957","958","959","960","961","962","963","964","965","966","967","968","969","970","971","972","973","974","975","976","977","978","979","980","981","982","983","984","985","986","987","988","989","990","991","992","993","994","995","996","997","998","999"]
global.ownernomer = ownercontac[0] + "@s.whatsapp.net"
global.ownernomerr = "+"+ownernomer //tidak perlu di edit
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.tag_owner = "./tag_owner.mp3" // audio ini akan di kirim apabila ada member yang menandai (tag) owner bot 
global.background_welcome = "https://telegra.ph/file/edca4b513ddf29fd52c0e.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://telegra.ph/file/e90bef3779d3c5812a5d1.mp4'
global.packname = '© ' + botname //sticker wm ubah
global.author = 'Sticker by ' + ownername //sticker wm ganti nama kalian
global.sessionName = 'session'
global.push_kontak_delay = 10000 //5 detik, 1000 = 1 detik
//type menu for menu
global.typemenu = 'templateImage' //
//type menu for downloadmenu, animemenu, etc
global.typemenu2 = 'image' //
global.multiplier = 69
global.limitawal = {
   premium: "Infinity", //unlimited
   free: 100
}
global.buttonDefault = [{
   urlButton: {
      displayText: 'Youtube Channel',
      url: youtube
   }
}, {
   urlButton: {
      displayText: 'Website',
      url: myweb
   }
}, {
   quickReplyButton: {
      displayText: '🏓 Ping',
      id: '.ping'
   }
}, {
   quickReplyButton: {
      displayText: 'Owner 👤',
      id: '.owner'
   }
}, {
   quickReplyButton: {
      displayText: '⚡ Command ⚡',
      id: '.command'
   }
}]
global.buttonDefault2 = [{
   urlButton: {
      displayText: 'Youtube Channel',
      url: youtube
   }
}, {
   urlButton: {
      displayText: 'Website',
      url: myweb
   }
}, {
   quickReplyButton: {
      displayText: '🏓 Ping',
      id: '.ping'
   }
}, {
   quickReplyButton: {
      displayText: 'Owner 👤',
      id: '.owner'
   }
}, {
   quickReplyButton: {
      displayText: '🎁 Donasi 🎁',
      id: '.donasi'
   }
}]
global.buttonDefault3 = [{
      buttonId: `.owner`,
      buttonText: {
         displayText: '🙍‍♂️ Owner'
      },
      type: 1
   },
   {
      buttonId: `.donasi`,
      buttonText: {
         displayText: 'Donation 💰'
      },
      type: 1
   }
]
global.buttonDefault4 = [{
   buttonId: '.command',
   buttonText: {
      displayText: '༺ Back'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner ༻'
   },
   type: 1
}]
global.adventureRPG = 'https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg'
global.bankRPG = 'https://telegra.ph/file/ce47dca98cfdb34162abb.png'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/507395e2edbd1d740a0fd.png'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: '📊',
         limit: '🎫',
         health: '❤️',
         exp: '✨',
         money: '💹',
         bank: '🏦',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🛍️',
         mythic: '🎁',
         legendary: '🗃️',
         superior: '💼',
         pet: '🔖',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         pickaxe: '⛏️',
         fishingrod: '🎣',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐴',
         cat: '🐱',
         dog: '🐶',
         fox: '🦊',
         petFood: '🍖',
         iron: '⛓️',
         gold: '🪙',
         emerald: '❇️',
         upgrader: '🧰'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   },
   //
   //https://github.com/zeeoneofficial/games-wabot-md/blob/multi-device/config.js#L78
   //https://github.com/BochilGaming/games-wabot-md/blob/multi-device/config.js#L78
role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // this code make config.js to be a more understandable code
    const role = [
      { name: 'Warrior V', level: 0 }, { name: 'Warrior IV', level: 4 }, { name: 'Warrior III', level: 8 }, { name: 'Warrior II', level: 12 }, { name: 'Warrior I', level: 16 },
      { name: 'Paladin V', level: 20 }, { name: 'Paladin IV', level: 24 }, { name: 'Paladin III', level: 28 }, { name: 'Paladin II', level: 32 }, { name: 'Paladin I', level: 36 },
      { name: 'Sorcerer V', level: 40 }, { name: 'Sorcerer IV', level: 44 }, { name: 'Sorcerer III', level: 48 }, { name: 'Sorcerer II', level: 52 }, { name: 'Sorcerer I', level: 56 },
      { name: 'Ranger V', level: 60 }, { name: 'Ranger IV', level: 64 }, { name: 'Ranger III', level: 68 }, { name: 'Ranger II', level: 72 }, { name: 'Ranger I', level: 76 },
      { name: 'Mage V', level: 80 }, { name: 'Mage IV', level: 84 }, { name: 'Mage III', level: 88 }, { name: 'Mage II', level: 92 }, { name: 'Mage I', level: 96 },
      { name: 'Cleric V', level: 100 }, { name: 'Cleric IV', level: 104 }, { name: 'Cleric III', level: 108 }, { name: 'Cleric II', level: 112 }, { name: 'Cleric I', level: 116 },
      { name: 'Thief V', level: 120 }, { name: 'Thief IV', level: 124 }, { name: 'Thief III', level: 128 }, { name: 'Thief II', level: 132 }, { name: 'Thief I', level: 136 },
      { name: 'Assassin V', level: 140 }, { name: 'Assassin IV', level: 144 }, { name: 'Assassin III', level: 148 }, { name: 'Assassin II', level: 152 }, { name: 'Assassin I', level: 156 },
      { name: 'Monk V', level: 160 }, { name: 'Monk IV', level: 164 }, { name: 'Monk III', level: 168 }, { name: 'Monk II', level: 172 }, { name: 'Monk I', level: 176 },
      { name: 'Bard V', level: 180 }, { name: 'Bard IV', level: 184 }, { name: 'Bard III', level: 188 }, { name: 'Bard II', level: 192 }, { name: 'Bard I', level: 196 },
      { name: 'Necromancer V', level: 200 }, { name: 'Necromancer IV', level: 204 }, { name: 'Necromancer III', level: 208 }, { name: 'Necromancer II', level: 212 }, { name: 'Necromancer I', level: 216 },
      { name: 'Warlock V', level: 220 }, { name: 'Warlock IV', level: 224 }, { name: 'Warlock III', level: 228 }, { name: 'Warlock II', level: 232 }, { name: 'Warlock I', level: 236 },
      { name: 'Wizard V', level: 240 }, { name: 'Wizard IV', level: 244 }, { name: 'Wizard III', level: 248 }, { name: 'Wizard II', level: 252 }, { name: 'Wizard I', level: 256 },
      { name: 'Sage V', level: 260 }, { name: 'Sage IV', level: 264 }, { name: 'Sage III', level: 268 }, { name: 'Sage II', level: 272 }, { name: 'Sage I', level: 276 },
      { name: 'Priest V', level: 280 }, { name: 'Priest IV', level: 284 }, { name: 'Priest III', level: 288 }, { name: 'Priest II', level: 292 }, { name: 'Priest I', level: 296 },
      { name: 'Rogue V', level: 300 }, { name: 'Rogue IV', level: 304 }, { name: 'Rogue III', level: 308 }, { name: 'Rogue II', level: 312 }, { name: 'Rogue I', level: 316 },
      { name: 'Brawler V', level: 320 }, { name: 'Brawler IV', level: 324 }, { name: 'Brawler III', level: 328 }, { name: 'Brawler II', level: 332 }, { name: 'Brawler I', level: 336 },
      { name: 'Archer V', level: 340 }, { name: 'Archer IV', level: 344 }, { name: 'Archer III', level: 348 }, { name: 'Archer II', level: 352 }, { name: 'Archer I', level: 356 },
      { name: 'Sniper V', level: 360 }, { name: 'Sniper IV', level: 364 }, { name: 'Sniper III', level: 368 }, { name: 'Sniper II', level: 372 }, { name: 'Sniper I', level: 376 },
      { name: 'Ninja V', level: 380 }, { name: 'Ninja IV', level: 384 }, { name: 'Ninja III', level: 388 }, { name: 'Ninja II', level: 392 }, { name: 'Ninja I', level: 396 },
      { name: 'Samurai V', level: 400 }, { name: 'Samurai IV', level: 404 }, { name: 'Samurai III', level: 408 }, { name: 'Samurai II', level: 412 }, { name: 'Samurai I', level: 416 },
      { name: 'Berserker V', level: 420 }, { name: 'Berserker IV', level: 424 }, { name: 'Berserker III', level: 428 }, { name: 'Berserker II', level: 432 }, { name: 'Berserker I', level: 436 },
      { name: 'Legend V', level: 440 }, { name: 'Legend IV', level: 444 }, { name: 'Legend III', level: 448 }, { name: 'Legend II', level: 452 }, { name: 'Legend I', level: 456 },
      { name: 'Champion V', level: 460 }, { name: 'Champion IV', level: 464 }, { name: 'Champion III', level: 468 }, { name: 'Champion II', level: 472 }, { name: 'Champion I', level: 476 },
      { name: 'Grandmaster V', level: 480 }, { name: 'Grandmaster IV', level: 484 }, { name: 'Grandmaster III', level: 488 }, { name: 'Grandmaster II', level: 492 }, { name: 'Grandmaster I', level: 496 },
      { name: 'Elder V', level: 500 }, { name: 'Elder IV', level: 504 }, { name: 'Elder III', level: 508 }, { name: 'Elder II', level: 512 }, { name: 'Elder I', level: 516 },
      { name: 'Immortal V', level: 520 }, { name: 'Immortal IV', level: 524 }, { name: 'Immortal III', level: 528 }, { name: 'Immortal II', level: 532 }, { name: 'Immortal I', level: 536 },
      { name: 'Nephalem V', level: 540 }, { name: 'Nephalem IV', level: 544 }, { name: 'Nephalem III', level: 548 }, { name: 'Nephalem II', level: 552 }, { name: 'Nephalem I', level: 556 },
      { name: 'Eternal V', level: 560 }, { name: 'Eternal IV', level: 564 }, { name: 'Eternal III', level: 568 }, { name: 'Eternal II', level: 572 }, { name: 'Eternal I', level: 576 },
      { name: 'Neptune V', level: 580 }, { name: 'Neptune IV', level: 584 }, { name: 'Neptune III', level: 588 }, { name: 'Neptune II', level: 592 }, { name: 'Neptune I', level: 596 },
      { name: 'Pluto V', level: 600 }, { name: 'Pluto IV', level: 604 }, { name: 'Pluto III', level: 608 }, { name: 'Pluto II', level: 612 }, { name: 'Pluto I', level: 616 },
      { name: 'Eris V', level: 620 }, { name: 'Eris IV', level: 624 }, { name: 'Eris III', level: 628 }, { name: 'Eris II', level: 632 }, { name: 'Eris I', level: 636 },
      { name: 'Ascension V', level: 640 }, { name: 'Ascension IV', level: 644 }, { name: 'Ascension III', level: 648 }, { name: 'Ascension II', level: 652 }, { name: 'Ascension I', level: 656 },
      { name: 'Elysium V', level: 660 }, { name: 'Elysium IV', level: 664 }, { name: 'Elysium III', level: 668 }, { name: 'Elysium II', level: 672 }, { name: 'Elysium I', level: 676 },
      { name: 'Ether V', level: 680 }, { name: 'Ether IV', level: 684 }, { name: 'Ether III', level: 688 }, { name: 'Ether II', level: 692 }, { name: 'Ether I', level: 696 },
      { name: 'Gaea V', level: 700 }, { name: 'Gaea IV', level: 704 }, { name: 'Gaea III', level: 708 }, { name: 'Gaea II', level: 712 }, { name: 'Gaea I', level: 716 },
      { name: 'Hades V', level: 720 }, { name: 'Hades IV', level: 724 }, { name: 'Hades III', level: 728 }, { name: 'Hades II', level: 732 }, { name: 'Hades I', level: 736 },
      { name: 'Heimdall V', level: 740 }, { name: 'Heimdall IV', level: 744 }, { name: 'Heimdall III', level: 748 }, { name: 'Heimdall II', level: 752 }, { name: 'Heimdall I', level: 756 },
      { name: 'Hyperion V', level: 760 }, { name: 'Hyperion IV', level: 764 }, { name: 'Hyperion III', level: 768 }, { name: 'Hyperion II', level: 772 }, { name: 'Hyperion I', level: 776 },
      { name: 'Iris V', level: 780 }, { name: 'Iris IV', level: 784 }, { name: 'Iris III', level: 788 }, { name: 'Iris II', level: 792 }, { name: 'Iris I', level: 796 },
      { name: 'Jupiter V', level: 800 }, { name: 'Jupiter IV', level: 804 }, { name: 'Jupiter III', level: 808 }, { name: 'Jupiter II', level: 812 }, { name: 'Jupiter I', level: 816 },
      { name: 'Kronos V', level: 820 }, { name: 'Kronos IV', level: 824 }, { name: 'Kronos III', level: 828 }, { name: 'Kronos II', level: 832 }, { name: 'Kronos I', level: 836 },
      { name: 'Lilith V', level: 840 }, { name: 'Lilith IV', level: 844 }, { name: 'Lilith III', level: 848 }, { name: 'Lilith II', level: 852 }, { name: 'Lilith I', level: 856 },
      { name: 'Maelstrom V', level: 860 }, { name: 'Maelstrom IV', level: 864 }, { name: 'Maelstrom III', level: 868 }, { name: 'Maelstrom II', level: 872 }, { name: 'Maelstrom I', level: 876 },
      { name: 'Nova V', level: 880 }, { name: 'Nova IV', level: 884 }, { name: 'Nova III', level: 888 }, { name: 'Nova II', level: 892 }, { name: 'Nova I', level: 896 },
      { name: 'Odin V', level: 900 }, { name: 'Odin IV', level: 904 }, { name: 'Odin III', level: 908 }, { name: 'Odin II', level: 912 }, { name: 'Odin I', level: 916 },
      { name: 'Osiris V', level: 920 }, { name: 'Osiris IV', level: 924 }, { name: 'Osiris III', level: 928 }, { name: 'Osiris II', level: 932 }, { name: 'Osiris I', level: 936 },
      { name: 'Poseidon V', level: 940 }, { name: 'Poseidon IV', level: 944 }, { name: 'Poseidon III', level: 948 }, { name: 'Poseidon II', level: 952 }, { name: 'Poseidon I', level: 956 },
      { name: 'Ragnarok V', level: 960 }, { name: 'Ragnarok IV', level: 964 }, { name: 'Ragnarok III', level: 968 }, { name: 'Ragnarok II', level: 972 }, { name: 'Ragnarok I', level: 976 },
      { name: 'Saturn V', level: 980 }, { name: 'Saturn IV', level: 984 }, { name: 'Saturn III', level: 988 }, { name: 'Saturn II', level: 992 }, { name: 'Saturn I', level: 996 },
      { name: 'Titan V', level: 1000 }, { name: 'Titan IV', level: 1004 }, { name: 'Titan III', level: 1008 }, { name: 'Titan II', level: 1012 }, { name: 'Titan I', level: 1016 },
      { name: 'Uranus V', level: 1020 }, { name: 'Uranus IV', level: 1024 }, { name: 'Uranus III', level: 1028 }, { name: 'Uranus II', level: 1032 }, { name: 'Uranus I', level: 1036 },
      { name: 'Venus V', level: 1040 }, { name: 'Venus IV', level: 1044 }, { name: 'Venus III', level: 1048 }, { name: 'Venus II', level: 1052 }, { name: 'Venus I', level: 1056 },
      { name: 'Zeus V', level: 1060 }, { name: 'Zeus IV', level: 1064 }, { name: 'Zeus III', level: 1068 }, { name: 'Zeus II', level: 1072 }, { name: 'Zeus I', level: 1076 },
    ]

    return role.reverse().find(role => level >= role.level)
  }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
   sukses: '🤗Done, Oke Desu~',
   admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
   botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
   owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
   group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
   private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
   bot: 'Fitur Khusus Pengguna Nomor Bot',
   errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
   wait: '⏳ Sedang Di Proses',
   lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
   example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
