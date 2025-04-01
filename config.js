

module.exports = {
  TOKEN: process.env.TOKEN,
  language: "es",
  ownerID: ["218559611320401920", ""], 
  mongodbUri: "",
  spotifyClientId: process.env.CLIENTID,
  spotifyClientSecret: process.env.CLIENTSECRET,
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
