const {Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require("discord.js")

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
      
        if(!interaction.isButton()) return;

        if(interaction.customId === 'moneyPunish') {

            const modal = new ModalBuilder()
                .setTitle('🚧 KARA PIENIĘŻNA')
                .setCustomId('moneyPunishModal')

            const discordID = new TextInputBuilder()
                .setCustomId('punishDiscordID')
                .setLabel('🛴| PODAJ DISCORD ID')
                .setPlaceholder('Przykładowo: 102910299102')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

            const amountMoney = new TextInputBuilder()
                .setCustomId('punishAmountMoney')
                .setLabel('💰| PODAJ KWOTĘ')
                .setPlaceholder('Przykładowo: 1.500')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                
            const reason = new TextInputBuilder()
                .setCustomId('punishReason')
                .setLabel('🔐| PODAJ POWÓD')
                .setPlaceholder('Przykładowo: zostawił porzucony pojazd')
                .setStyle(TextInputStyle.Paragraph)
                
            const firstRow = new ActionRowBuilder().addComponents(discordID)
            const secondRow = new ActionRowBuilder().addComponents(amountMoney)
            const thirdRow = new ActionRowBuilder().addComponents(reason)

            modal.addComponents(firstRow, secondRow, thirdRow)
            interaction.showModal(modal)
        }
        
    }
}
