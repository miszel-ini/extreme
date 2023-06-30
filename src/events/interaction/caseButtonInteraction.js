const {Events, ModalBuilder, TextInputStyle, TextInputBuilder, ActionRowBuilder} = require('discord.js')

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        if(!interaction.isButton) return;

        if(interaction.customId === 'abandonedVehicles') {
            const modal = new ModalBuilder()
                .setCustomId('reportAbandonedVehicle')
                .setTitle('🚧 ZGŁOSZENIE')

            const nickname = new TextInputBuilder()
                .setCustomId('reportNickname')
                .setLabel('👨| Nick zgłaszanego')
                .setPlaceholder('Przykładowo: miszeltraper')
                .setStyle(TextInputStyle.Short)

            const amountToRefund = new TextInputBuilder()
                .setCustomId('carModel')
                .setLabel('🚘| Model pojazdu')
                .setPlaceholder('Przykładowo: Infernus 2.2 FT')
                .setStyle(TextInputStyle.Short)

            const screenShoots = new TextInputBuilder()
                .setCustomId('carPlace')
                .setLabel('🌐| Miejsce')
                .setPlaceholder('Przykładowo: Przechowalnia Los Santos')
                .setStyle(TextInputStyle.Short);

            const firstRow = new ActionRowBuilder().addComponents(nickname)
            const secondRow = new ActionRowBuilder().addComponents(amountToRefund)
            const thirdRow = new ActionRowBuilder().addComponents(screenShoots)

            modal.addComponents(firstRow, secondRow, thirdRow)
            interaction.showModal(modal)
            
        }
        if(interaction.customId === 'vehicleRefund') {
            const modal = new ModalBuilder()
                .setCustomId('reportVehicleRefund')
                .setTitle('🚧 ZGŁOSZENIE')

            const nickname = new TextInputBuilder()
                .setCustomId('reportNickname')
                .setLabel('👨| Nick zgłaszanego')
                .setPlaceholder('Przykładowo: miszeltraper')
                .setStyle(TextInputStyle.Short)

            const amountToRefund = new TextInputBuilder()
                .setCustomId('amountToRefund')
                .setLabel('💰| Kwota do oddania')
                .setPlaceholder('Przykładowo: 1.500PLN')
                .setStyle(TextInputStyle.Short)

            const screenShoots = new TextInputBuilder()
                .setCustomId('screenshoots')
                .setLabel('📷| Dowód wpłaty')
                .setPlaceholder('Przykładowo: imgur.com/a/aksmlda')
                .setStyle(TextInputStyle.Short);

            const firstRow = new ActionRowBuilder().addComponents(nickname)
            const secondRow = new ActionRowBuilder().addComponents(amountToRefund)
            const thirdRow = new ActionRowBuilder().addComponents(screenShoots)

            modal.addComponents(firstRow, secondRow, thirdRow)
            interaction.showModal(modal)
        }      
        
        if(interaction.customId === 'rewriteVehicle') {
            const modal = new ModalBuilder()
                .setCustomId('reportVehicleRewrite')
                .setTitle('🚧 ZGŁOSZENIE')

            const nickname = new TextInputBuilder()
                .setCustomId('reportNickname')
                .setLabel('👨| Nick zgłaszanego')
                .setPlaceholder('Przykładowo: miszeltraper')
                .setStyle(TextInputStyle.Short)

            const carModel = new TextInputBuilder()
                .setCustomId('carModel')
                .setLabel('🚘| Model pojazdu')
                .setPlaceholder('Przykładowo: Cheetah')
                .setStyle(TextInputStyle.Short)

            const descCar = new TextInputBuilder()
                .setCustomId('descCar')
                .setLabel('💾| Opis pojazdu')
                .setPlaceholder('Przykładowo: FUP, 2.2, licznik')
                .setStyle(TextInputStyle.Paragraph);
        
            const firstRow = new ActionRowBuilder().addComponents(nickname)
            const secondRow = new ActionRowBuilder().addComponents(carModel)
            const thirdRow = new ActionRowBuilder().addComponents(descCar)

            modal.addComponents(firstRow, secondRow, thirdRow)
            interaction.showModal(modal) 
        }
    }
}