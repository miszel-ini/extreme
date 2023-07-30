const {Client, Partials, GatewayIntentBits, Collection} = require('discord.js');
//handlers 
const { loadCommands } = require('./handlers/command');
const { loadEvents } = require('./handlers/event');

const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Channel} = Partials;

//creating client
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
});

//implement config file
const config = require('./config.json');
const keepAlive = require('./server');
//creating new commands collection
client.commands = new Collection();


//logging bot and load important functions
client.login(config.token).then(() => {
    keepAlive();
    loadCommands(client),
    loadEvents(client)
})