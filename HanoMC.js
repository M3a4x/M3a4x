
const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : M3a4x');
console.log('ready');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'HanoMC Programing.',
     details: `للهم أختم بالصالحات أعمالنا`,
     url: 'http://twitch.tv/mjrmqm',
     state: `في ڪڸ سن? هنآڪ شهر يجعڸني أإڪثر قرباً من ربي {شهر رمضآن}`,
    application_id: '467718532352835595',
     assets: {
        small_image: `avatar`,
        small_text: 'Play.HanoMC.Net',
        large_image: `hanomc`,
        large_text: `Play.HanoMC.Net` }

  }
    });
});



client.login("MTk0NTU5ODU3NTM2MjcwMzM2.DhvHpA.XPoBxVbieDbx5LDnvy8CXxzecyU")
