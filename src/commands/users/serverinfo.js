const {SlashCommandBuilder, EmbedBuilder, FormattingPatterns, inlineCode} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Informacje o serwerze discord.'),

    execute(interaction) { 
        const {guild} = interaction;

        const guildEmbed = new EmbedBuilder()
            .setAuthor({name: '`💾` Informacje o serwerze', iconURL: guild.iconURL()})
            .setThumbnail(guild.iconURL())
            .setColor(0x4287f5)
            .addFields(
                {name: '`🐱‍🏍` Nazwa:', value: '> ' +  inlineCode('👉') + `${guild.name}`, inline: true},
                {name: '`🌕` ID:', value: '> ' + inlineCode('👉') + `${guild.id}`, inline: true},
                {name: '`👑` Założyciel: ', value: '> ' + inlineCode('👉') + `${guild.ownerId}`, inline: true},
                {name: '`👨` Liczba członków:', value: '> ' + inlineCode('👉') + `${guild.memberCount}`, inline: true},
                {name: '`⌚` Stworzony: ', value: '> ' + inlineCode('👉') + `${guild.createdAt}`, inline: true},
                {name: '`🔐` Poziom weryfikacji', value: '> ' + inlineCode('👉') + `${guild.verificationLevel}`, inline: true},
                
            )
            .setTimestamp()

        interaction.reply({embeds: [guildEmbed]})

    }
}