const {SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-nitro')
        .setDescription('Komenda umożliwia, stworzenia wniosku w sprawie nitro.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('`🚗` Wniosek o zużycie nitra')
            .setColor(0x4287f5)
            .setDescription('> `👉` Poniżej możesz złożyć wniosek o zwrot kosztów, za zużycie nitra w poszczególnych modelach.')
            .setThumbnail(interaction.guild.iconURL())
            .setTimestamp()

        const sendInfoButton = new ButtonBuilder()
            .setCustomId('sendInfoButtonNitro')
            .setLabel('🌕 Złóż wniosek')
            .setStyle(ButtonStyle.Success)
            
        const row = new ActionRowBuilder().addComponents(sendInfoButton)

        interaction.reply({embeds: [embed], components: [row]})
       

    }
}