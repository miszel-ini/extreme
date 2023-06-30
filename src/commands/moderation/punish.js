const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js')
const {sendOnBlackList} = require('../../methods/punishMethod');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('naloz-kare')
        .setDescription('Nałóż karę na gracza')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
        
    execute(interaction) {

        const embed = new EmbedBuilder()
            .setAuthor({name: interaction.guild.name, iconURL: interaction.user.displayAvatarURL()})
            .setColor('Blurple')
            .setDescription('> `👇` Z poniższej listy przycisków, wybierz co chcesz zrobić z użytkownikiem.')
            .setTimestamp()

        const moneyPunishButton = new ButtonBuilder()   
            .setCustomId('moneyPunish')
            .setLabel('💰 Pieniężna')
            .setStyle(ButtonStyle.Success)
            
        const discordPunishButton = new ButtonBuilder()
            .setCustomId('discordPunish')
            .setLabel('🌍 Discord')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(true)
        const settingsPunishButton = new ButtonBuilder()
            .setCustomId('settingsPunish')
            .setLabel('🔧 Ustawienia')
            .setStyle(ButtonStyle.Danger)
            .setDisabled(true)

        const firstRow = new ActionRowBuilder().addComponents(moneyPunishButton, discordPunishButton, settingsPunishButton)
        
        interaction.reply({embeds: [embed], components: [firstRow]})

    }
}