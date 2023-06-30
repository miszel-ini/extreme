const {SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-verify')
        .setDescription('Ustawianie miejsca weryfikacji nowych członków.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {
        const verifyEmbed = new EmbedBuilder()
            .setTitle('`🔐` | WERYFIKACJA')
            .setColor('DarkGreen')
            .setDescription('> `👇` Kliknij przycisk poniżej, aby się zweryfikować.')
            .setTimestamp()

        const verifyButton = new ButtonBuilder()
            .setCustomId('verifyButton')
            .setLabel('🙌 | ZWERYFIKUJ SIĘ')
            .setStyle(ButtonStyle.Success)
            
        const row = new ActionRowBuilder().addComponents(verifyButton)

        interaction.reply({embeds: [verifyEmbed], components: [row]})
    }
}