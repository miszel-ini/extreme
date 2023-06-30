const {Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        if(!interaction.isButton()) return;
        if(!interaction.isModalSubmit()) return;
        
        if(interaction.customId === 'sendInfoButtonNitro') {
            const modal = new ModalBuilder()
            .setCustomId('nitroModal')
            .setTitle('🚗 Zużyte nitro')

            const pidInput = new TextInputBuilder()
                .setCustomId('pidNitroInput')
                .setLabel('💾| TWÓJ PID')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('Wpisz tutaj swój pid np. 155815')
                .setRequired(true)
            const vehicleModelInput = new TextInputBuilder()
                .setCustomId('vehicleModelNitroInput')
                .setLabel('🚗 | MODEL POJAZDU')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('Podaj model pojazdu z nitro')
                .setRequired(true)
            const ssInfoInput = new TextInputBuilder()
                .setCustomId('ssNitroInput')
                .setLabel('📷 | POTWIERDZENIE SS')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('Np. imgur.com/a/maksldm')
                .setRequired(true)
                
            const firstRow = new ActionRowBuilder().addComponents(pidInput)
            const secondRow = new ActionRowBuilder().addComponents(vehicleModelInput)
            const thirdRow = new ActionRowBuilder().addComponents(ssInfoInput)

            modal.addComponents(firstRow, secondRow, thirdRow)

            interaction.showModal(modal)
        } else if(interaction.customId === 'verifyButton') {
            const verifyModal = new ModalBuilder()
                .setCustomId('verifyModal')
                .setTitle('🙌 | WERYFIKACJA')

            const secretKey = new TextInputBuilder()
                .setCustomId('verifySecretKey')
                .setLabel('🔐 | Wprowadź hasło aby dołączyć.')
                .setStyle(TextInputStyle.Short)
                .setPlaceholder('Przeczytaj jeszcze raz regulamin, jeśli nie wiesz.')
                .setRequired(true)

                if(interaction.member.roles.cache.some(role => role.name === "verify access")) {
                    const errorEmbed = new EmbedBuilder()
                        .setTitle('`❌` BŁĄD')
                        .setColor('DarkRed')
                        .setDescription('> `👉` Już jesteś zweryfikowany')
                        .setTimestamp()
                    
                    return interaction.reply({embeds: [errorEmbed], ephemeral:true})
                }
                
            const row = new ActionRowBuilder().addComponents(secretKey)

            verifyModal.addComponents(row)

            interaction.showModal(verifyModal)
        } 
    }
}