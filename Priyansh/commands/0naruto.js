module.exports.config = {
  name: "naruto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yash",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "naruto",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/3cqcxKS.jpeg",
"https://i.imgur.com/7cGokS7.png",
"https://i.imgur.com/UoyR0Wc.png",
"https://i.imgur.com/xx2aFom.png",
"https://i.imgur.com/YyGkVu3.jpeg",
"https://i.imgur.com/O9nvIrD.jpeg",
"https://i.imgur.com/niThT1k.jpeg",
"https://i.imgur.com/hNrSBGG.jpeg",
"https://i.imgur.com/6aeXIOm.jpeg",
"https://i.imgur.com/TyoeAXN.jpeg",
"https://i.imgur.com/I71GGAt.jpg",
"https://i.imgur.com/RVdB4FT.jpeg",
"https://i.imgur.com/ZdgO15P.jpeg",
"https://i.imgur.com/w8N0Rqv.jpeg",
"https://i.imgur.com/zMHPVrr.jpeg",
"https://i.imgur.com/I4T5Stu.jpeg",
"https://i.imgur.com/DSVYliB.jpeg",
"https://i.imgur.com/fp2eZOe.jpeg",
"https://i.imgur.com/cqx7FP8.jpeg",
"https://i.imgur.com/nUqqplZ.jpeg",
"https://i.imgur.com/eTGiyUZ.jpeg",
"https://i.imgur.com/xBeukNb.jpeg",
"https://i.imgur.com/n5mBDJk.jpeg",
"https://i.imgur.com/sjnE0aN.jpeg",
"https://i.imgur.com/cU9dPXV.jpeg",
"https://i.imgur.com/UcLMPKq.jpeg",
"https://i.imgur.com/bYZm36D.jpeg",
"https://i.imgur.com/VxGDQvb.jpeg",
     ];
     var callback = () => api.sendMessage({body:`ANIME ♨️♨️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };