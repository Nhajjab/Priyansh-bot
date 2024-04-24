module.exports.config = {
  name: "gojo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Naruto",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "gojo",
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
"https://i.imgur.com/dP8RlXz.jpeg",
"https://i.imgur.com/CJPWjm3.jpeg",
"https://i.imgur.com/nsCB6pp.jpeg",
     ];
  
     var callback = () => api.sendMessage({body:`ANIME ♨️♨️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };