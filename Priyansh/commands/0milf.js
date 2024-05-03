module.exports.config = {
  name: "milf",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yash",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "milf",
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
"https://i.imgur.com/KyBVzCK.jpeg",
"https://i.imgur.com/6LNjwJU.jpeg",
"https://i.imgur.com/ZECy8QW.jpeg",
"https://i.imgur.com/0utjDzX.jpeg",
"https://i.imgur.com/DjwQc8z.jpeg",
"https://i.imgur.com/KnXD0GZ.jpeg",
"https://i.imgur.com/jyA1h7L.jpeg",
"https://i.imgur.com/HITQSqP.jpeg",
"https://i.imgur.com/8snWAtK.jpeg",

     ];
     var callback = () => api.sendMessage({body:`READY YOUR MILF 😗🥵❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };