const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const moment = require('moment')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Sprawdzanie informacji o użytkowniku')

        .addUserOption(option => option 
            .setName('user')
            .setDescription("Wybierz użytkownika")
            .setRequired(false)
            ),
    execute(interaction) {
        const user = interaction.options.getUser('user')

        if(user) {
            const userName = user.username;
            const userId = user.id;
            const userCreatedAt = moment(user.createdAt).calendar()
           
            const embed = new EmbedBuilder()
                .setTitle(userName)
                .setColor('Blurple')
                .setTimestamp()
                .setThumbnail(user.displayAvatarURL())    
                .setDescription('@' + userName)
                .addFields(
                    {
                        name: '`🔮` Globalne', 
                        value: '> `👨` Nazwa użytkownika: `' + userName + '`\n> `🔮` Identyfikator: `' + userId + '`\n> `📆` Konto stworzone: `'+ userCreatedAt +'`',    
                        inline:true
                    },
                    {name: '`🛴` Poziomy', value: '`niebawem`', inline:true},
                    {name: '`💰` Ekonomia', value: '`niebawem`', inline:true},
                )

            interaction.reply({embeds: [embed]})
        } else {
            const authorInteract = interaction.user;
          
            const name = interaction.user.username
            const id = interaction.user.id
            const date = moment(interaction.user.createdAt).calendar()
               
            const embed = new EmbedBuilder()
                .setTitle(name)
                .setColor('Blurple')
                .setTimestamp()
                .setThumbnail(authorInteract.displayAvatarURL())    
                .setDescription('@' + name)
                .addFields(
                    {
                        name: '`🔮` Globalne', 
                        value: '> `👨` Nazwa użytkownika: `' + name + '`\n> `🔮` Identyfikator: `' + id + '`\n> `📆` Konto stworzone: `'+ date +'`',    
                        inline:true
                    },
                    {name: '`🛴` Poziomy', value: '`niebawem`', inline:true},
                    {name: '`💰` Ekonomia', value: '`niebawem`', inline:true},
                )
    
            interaction.reply({embeds: [embed]})
    
        }
    }    
}