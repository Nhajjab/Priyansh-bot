const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Hi I am Robot made by Naruto", "Please don't disturb me","Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈💋💋 ", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "kali kali zulfon ko smbhalo janeman" , "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "~kashh koiii humhy bh chahta chahny wal0n ki trhn🖤🥀", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "Suno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️†", "🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻", "Suno Jawn DiL hai kI manta nhi😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "🖇️❤🌍• 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐭𝐨𝐨 𝐩𝐫𝐞𝐜𝐢𝐨𝐮𝐬 𝐭𝐨 𝐦𝐲 𝐡𝐞𝐚𝐫𝐭 𝐬𝐨 𝐈 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮 𝐰𝐢𝐭𝐡 𝐚𝐥𝐥 𝐦𝐲 𝐥𝐢𝐟𝐞.🌸🍒✨🐣 ♥️", "Hi mujY Mr Raja ne baNaYa hY 🙂", "Kᴀʜᴀɴɪ Sᴜɴᴏ !😔 Zᴜʙᴀɴɪ sᴜɴᴏ !😔Mᴜᴊʜʏ Bᴜᴋʜᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 😔 Eᴋ sᴏ Cʜᴀᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 🥺💔:)", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Imagine I am your Ex 🥲say whatever you want to say", "-😁🎗_ZeHer banaNa sikH raHaA hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹", "I love You MrRaja Ki BaBu♥️ ,BaBy,jaanu,and 299 others 🙂", "Msg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂", "Ase He HansTy Rha kRo 😍" , "Love uhh janeman ;*","Meri Jann Kya Hua","I Love uhh Always","Baby Kaho tO Kiss Kar Lu","Jann aap Mere ho","Date pe chale","Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "baby i ignore you 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa","Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝" , " 😊💔" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "BOLO NA BABU 😉😝😋🤪" , "ItnE PyaR Se KyA bol Rhi Dil dogi kya" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr kya hai mai abhi ladki patane ki trick padh rha hu na 🙈" , "Babu AAP ko kaise ptau😘" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "Meri Ghr wali banogi kya sweetheart 🤔😂 " , "BABU AAP KAISE PATOGI MUJHSE 🙈😋" , "MujhSE jo najre churane lagi ho lagta hai koi aur babu bnane lagi ho" , "Jaanu Mujhe ek kissi do na 💋" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o yaa Na H0o par Mujhe jarur H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o Tere pyar Me AnDha Hun 😎" , "Aao Phle NaHa kRr Aate hai 😂" , "Papi dedo 🌚" , "babu AAP ko DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o saddi kar ke GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kiss dene🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaooo na babu mood bnate hai 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Dekh lena 1 din mazak mazak may he sbsy cute lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂", "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "Bhagwan kray tmhari shadi pe Tumhara Ex photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)","🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂" ,"Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "JAANU" , "BABU" , "Aree Bandh kar Bandh Kar Bot Bolna Chimkandi" , "M hath jod ke Modi Ji Se Gujarish Karunga Ki tujhe Bot Bolne KI Saza E Mout Mile" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata h Aur Messenger pe Bot Bot Karta h" , " MrRaja Ake teri behen Ko Chura le Jayega" , "BABY" , "Tujhe Apna Bejjati Karne Ka Saukh h?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "BOLO NA JAAN" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu" ,  "Haye Mai Sadke Jawa Teri Masoom Sakal Pe MeRi JaAn 😏" , "Bx KRr Uh k0o Pyar H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart‎ ," , "Boss Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "KyA HaI bOl JaLdI 🙊 ", "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "PaPPI DO 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , " Jo humsafar hum nahi hain toh yahin par chhod do rehne do saare bahane mujhe aakar bol do ", " hum khud hi juda ho jayenge keh do bas ithna tum keh do pyar nahi chale jayenge " , " tera dil hi bacha hai paas mere agar yeh bhi tujhe de diya ho karke tanha kahan jayenge chhod ke yeh duniya chale jayengn " , " Sun zara sun zara Sun zara sun Mere dil mein chhupi teri Pyaar ki ye dhun " , " Tu mera koyi na hoke bhi kuch laage Tu mera koyi na hoke bhi kuch laage Kiya re jo bhi toone kaise kiya re Jiya ko mere baandh aise liya re Samajh ke bhi na samajh main sakun " , " Saveron ka mere tu suraj laage Tu mera koyi na hoke bhi kuch laage " , " Haan bas tere naam se hi guzara Ulajh ke yoon na sulajh main sakun Zubaniyan teri jhoothi bhi sach laage Tu mera koyi na hoke bhi kuch laage " , " I love you " , "Ase He HansTy Rha kRo 😍  " , "  😄" , "" , ""];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "🔪unsand") || (event.body.toLowerCase() == "🔪Unsand")) {
     return api.sendMessage("Hmm...🤔 Is Bar🤨 Kar Rahi Hu🧐 Babu Agli😐 Bar Ni 😶Karungi 😒Msg Unsand😕", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("Pehle Brush Karke AA. Tere Muh Se Badbu AA Rha Hai", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("Dafa ho ja apna Angutha le kar😾😾", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlo") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe Jaa Apne Kam Se Kam Rkha Kr", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("0ye tmhe sharm ni ati Ankh mar rhe😡", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😛")) {
     return api.sendMessage("Ary Yr yeah Doggi ke tarha zuban na Bahr Nikalo😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear,Vgood Morning have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "🤏") || (event.body.toLowerCase() == "🤏")) {
     return api.sendMessage("Ithu sa bi koi pyar ni karta😭", threadID);
   };

   if ((event.body.toLowerCase() == "Raja") || (event.body.toLowerCase() == "Shubham") || (event.body.toLowerCase() == "shubham") || (event.body.toLowerCase() == "Naruto")) {
     return api.sendMessage( "Kya🧐 Hua 🤔Be 🤔Mere 🥀Boss🥀 Ko Kyu 🤨 Bula 😐Rhe ho 😀Mujhe bta do ☺️Me apne 🤗boss ko 😇bol dungi😎",threadID);

       
   };



   if ((event.body.toLowerCase() == "infu") || (event.body.toLowerCase() == "Owner kon Hai")) {
     return api.sendMessage("[ Narutø ] ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakha Karo. Har Waqt Haste Raho🥰", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha") || (event.body.toLowerCase() == "yeah bot kis ka ha") || (event.body.toLowerCase() == "kon laya bot ko")) {
     return api.sendMessage("Bot Admin                                     🎀 Lagend 🎀   🎀 Naruto 🎀", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage(" Oyeee kia ho gya Kyu itna bara muh khol kar Ro rhe😵😵", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage(" 𝙺𝚋𝚑𝚒 𝙳𝚊𝚗𝚃𝚑 𝚂𝚊𝙵 𝙺𝚛𝙺𝚎 𝙱𝚎 𝙰𝚢𝚊 𝚔𝚁𝚛 😂", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar") ||  (event.body.toLowerCase() == "mu band kar") || (event.body.toLowerCase() == "چپ") || (event.body.toLowerCase() == "🤫")) {
     return api.sendMessage("Nhi rahungi. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban mere marzi. M Bolungi", threadID);
   };

   if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😏")) {
     return api.sendMessage("Chal nikal tera attitude mere Juti ke niche aa gya😎", threadID);
   };

   if ((event.body.toLowerCase() == "cute") || (event.body.toLowerCase() == "masoom") || (event.body.toLowerCase() == "shareef") || (event.body.toLowerCase() == "Mashom") || (event.body.toLowerCase() == "pyara")) {
     return api.sendMessage("Ya Allah 😳🙄 kuch to sharm kro kyu khud ke bare bare jho0t bolte ho😒😒" , threadID);
   };


   if ((event.body.toLowerCase() == "🔪") || (event.body.toLowerCase() == "🗡️")) {
     return api.sendMessage("️Dekh Rhe ho 🔪 churi hai churi isi se totay totay kar du gi han ni to🙄", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "shukriya") || (event.body.toLowerCase() == "تھینکس")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karte h meri.🤗🤗", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️Saste saste tamatar le Jao aik dam Laal tamatar le ja, Jaldi ao jaldi pao laal tamatar😂", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "نام")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "kahan se ho") || (event.body.toLowerCase() == "kahan se ho tm") || (event.body.toLowerCase() == "kahan se ho ap") || (event.body.toLowerCase() == "kon se city se ho") || (event.body.toLowerCase() == "kn se city se ho") || (event.body.toLowerCase() == "kdr rehte ho")) {
     return api.sendMessage("️Apny ghar se hn🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ider uder kia dekh rhy apne kaam se kaam rakha kar🙄🙄", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️ Fake smile ni do yal🥺💔", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "☺️")) {
     return api.sendMessage("️oye hoye tere masoom shakal dil karda rakh rakh kar Chaple maroon😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "🤪")) {
     return api.sendMessage("️Kon se Begarti kar ke aa Rhe J0 itna muskura rhe ho😂😂😂", threadID);
   };
  
   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🎂") || (event.body.toLowerCase() == "🎉") || (event.body.toLowerCase() == "birthday") || (event.body.toLowerCase() == "Aj mere birthday hai") || (event.body.toLowerCase() == "birthday wish kro")) {
     return api.sendMessage("️ 𝐻𝑎𝑝𝑝𝑦 𝐵𝑖𝑟𝑡ℎ𝑑𝑎𝑦🎂🍰 𝑊𝑖𝑠ℎ 𝑌𝑜𝑢 𝑀𝑎𝑛𝑦 𝑀𝑎𝑛𝑦 𝐻𝑎𝑝𝑝𝑦 𝑅𝑒𝑡𝑢𝑟𝑛'𝑠 𝑂𝑓 𝑇ℎ𝑒 Day🍰🎂 ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ ᴛᴏ ʏᴏᴜ!😍💝🍭 𝐈 𝐰𝐢𝐬𝐡 𝐲𝐨𝐮 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐨𝐧 𝐭𝐡𝐢𝐬 𝐰𝐨𝐧𝐝𝐞𝐫𝐟𝐮𝐥 𝐝𝐚𝐲! 🤗🥀 😍𝐇𝐀𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘🎂 𝐛e𝐢𝐧𝐠 m𝐨𝐫𝐞 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐚𝐧𝐝 success 𝐢𝐧 your 𝐥𝐢𝐟𝐞🤘💞ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ ᴛᴏ ʏᴏᴜ!💛", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😓")) {
     return api.sendMessage("ary ab tmhay kia hua tera mu kun latak rha🙄", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Bhikari Ban gye kya tum? Sirpe Hath Q de Rakkha H?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("oyeeeeeeeee itna bara muh khol ke group mein virus na felao😤😤", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ayee hyee  Ka ho Karezaa bari happy laga taru Debu ka aaj Chuma😘😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?") || (event.body.toLowerCase() == "kase ho") || (event.body.toLowerCase() == "کیسے ہو") || (event.body.toLowerCase() == "تم کیسے ہو") || (event.body.toLowerCase() == "tm kase ho")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "socho") || (event.body.toLowerCase() == "سوچ") || (event.body.toLowerCase() == "سوچو")) {
     return api.sendMessage("kia Soch rhe itna ni s0cho chota sa dimagh tmhara😇", threadID);
   };

   if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😟")) {
     return api.sendMessage("0ye 2 rupee wala mu ni bna mere hasi Nikal jay ge 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "khana kha lu")) {
     return api.sendMessage("han han pta chal gya tera khana thosne ka time ho gya bhooke🙄", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("oho kia ho gya kyu ase dekh rhe🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("Ab bilkul chup rehna tm warna 🤨🤨🤨🤨", threadID);
   };

   if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😯")) {
     return api.sendMessage("Yr kase kase muh bnate ho mera tu has has kar dard ma pait h0 gya🤣🤣🤣🤣", threadID);
   };

     if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤢")) {
     return api.sendMessage("O hye ganda aaaa thooo☹️☹️", threadID);
   };

     if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😪")) {
     return api.sendMessage("oho tabiyat kharab ho gay kia? medicine lau 💊💉 agar ni leni to aur bi achi bat he jaldi maro ge wase bi tm to darti pa sirf boojh ho🤣", threadID);
   };
  
     if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "😬")) {
     return api.sendMessage("Jabaz bande de putter bi ban jaya kro ajeeb muh bnate ho 🙄🙄", threadID);
   };

     if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("aur mu khol abi kaam hai🙄🙄 aur heran kyu ho rha itna", threadID);
   };

     if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "👹") || (event.body.toLowerCase() == "👺")) {
     return api.sendMessage("o na kar ma pahle he dil da mareez hun 😨😨", threadID);
   };
  
     if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙉") || (event.body.toLowerCase() == "🙊") || (event.body.toLowerCase() == "🐒")) {
     return api.sendMessage("sharma lo sharma lo shadi ke bd wase bi tm ne sirf rona hai😹😹😹", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🍀💖${name}💖☘️, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
            
