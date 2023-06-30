const {Events, EmbedBuilder, inlineCode} = require('discord.js')
const {verifyPassword, verifyRoleID, channelsID} = require('../../config.json');
const { sendMoneyPenalty } = require('../../methods/punishMethod');

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        if(!interaction.isModalSubmit()) return;
        
        if(interaction.customId === 'nitroModal') {
            const pid = interaction.fields.getTextInputValue('pidNitroInput')
            const vehicleModel = interaction.fields.getTextInputValue('vehicleModelNitroInput')
            const ssInfo = interaction.fields.getTextInputValue('ssNitroInput')

            const channel = await interaction.guild.channels.fetch('1113225706361593969')

            const logEmbed = new EmbedBuilder()
                .setAuthor({name: "`🚧` " + interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                .setColor(0x4287f5)
                .setDescription('> `🌕` Wpłyneła nowa informacja o zużyciu paliwa w pojeździe.')
                .addFields(
                    {name: '`🔮` PID', value: pid, inline: true},
                    {name: '`🚗` Model pojazdu', value: vehicleModel, inline: true},
                    {name: '`💾` Zrzut ekranu', value: ssInfo, inline: true},
                    )
                .setTimestamp()


            const replyEmbed = new EmbedBuilder()
                    .setTitle('`🎉` Sukces!')
                    .setColor('Green')
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription('> `👉` Pomyślnie wysłałeś swój wniosek do zarządu organizacji.')
                    
                    .setTimestamp()

            if(channel != null) {
                channel.send({embeds: [logEmbed]})
                interaction.reply({embeds: [replyEmbed], ephemeral: true})
                
            } else {
                interaction.reply({embeds: [logEmbed, replyEmbed]})
            }
        } else if(interaction.customId === 'verifyModal') {
            const secretKey = interaction.fields.getTextInputValue('verifySecretKey')

            const verifedEmbed = new EmbedBuilder()
                .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                .setColor('DarkGreen')
                .setDescription('> ' + inlineCode('👉') + `Pomyślnie przeszedłeś weryfikacje, została nadana ci ranga - <@&${verifyRoleID}>`)
                .setTimestamp()

            if(secretKey === verifyPassword) {
                

                const role = interaction.guild.roles.cache.get(verifyRoleID);

                if(role) {
                    interaction.guild.members.cache.get(interaction.user.id).roles.add(role);
                    interaction.reply({embeds: [verifedEmbed], ephemeral: true})
                }
                
            } else {
                interaction.reply({content: '> `🚧` Ta funkcja jest jeszcze w trakcie prac!'})
            }

            /*
            ###################
            #
            # /sprawa commmand
            #
            ###################

            */
    
            
        }
        if(interaction.customId === 'reportAbandonedVehicle') {
            
            const nickname = interaction.fields.getTextInputValue('reportNickname')
            const carModel = interaction.fields.getTextInputValue('carModel')
            const carPlace = interaction.fields.getTextInputValue('carPlace')

            const channel = await interaction.guild.channels.fetch(channelsID.porzuconyPojazd);

            const reportLogEmbed = new EmbedBuilder()
                .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                .setDescription('> `👉` Porzucono pojazd.')
                .addFields(
                    {name: '`🔐` Osoba porzucająca', value: '> `👉` ' + nickname, inline: true},
                    {name: '`🚘` Model pojazdu', value: '> `👉` ' + carModel, inline: true},
                    {name: '`🌍` Miejsce porzucenia', value: '> `👉` ' + carPlace, inline: true},
                )
                .setColor('DarkRed')
                .setTimestamp()

            interaction.reply({content: '✅ - Pomyślnie wysłano zgłoszenie!', ephemeral: true})
            channel.send({embeds: [reportLogEmbed]})
        }

        if(interaction.customId === 'reportVehicleRefund') {
            const nickname = interaction.fields.getTextInputValue('reportNickname')
            const amount = interaction.fields.getTextInputValue('amountToRefund')
            const screenShoots = interaction.fields.getTextInputValue('screenshoots')
            const channel = await interaction.guild.channels.fetch(channelsID.zwrotPieniedzy);

            const reportLogEmbed = new EmbedBuilder()
                .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                .setDescription('> `👉` Zwrot pieniędzy.')
                .addFields(
                    {name: '`🔐` Zreportowany', value: '> `👉` ' + nickname, inline: true},
                    {name: '`💵` Kwota do oddania', value: '> `👉` ' + amount, inline: true},
                    {name: '`📷` Dowód kwoty', value: '> `👉` ' + screenShoots, inline: true},
                )
                .setColor('DarkRed')
                .setTimestamp()

            interaction.reply({content: '✅ - Pomyślnie wysłano zgłoszenie!', ephemeral: true})
            channel.send({embeds: [reportLogEmbed]})
        }
        if(interaction.customId === 'reportVehicleRewrite') {
            const nickname = interaction.fields.getTextInputValue('reportNickname')
            const model = interaction.fields.getTextInputValue('carModel')
            const description = interaction.fields.getTextInputValue('descCar')
            const channel = await interaction.guild.channels.fetch(channelsID.przepisaniePojazdu);

            const reportLogEmbed = new EmbedBuilder()
                .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                .setDescription('> `👉` Przepisanie pojazdu na organizacje.')
                .addFields(
                    {name: '`👨` Osoba', value: '> `👉` ' + nickname, inline: true},
                    {name: '`🚘` Model pojazdu', value: '> `👉` ' + model, inline: true},
                    {name: '`💾` Opis', value: '> `👉` ' + description, inline: true},
                )
                .setColor('DarkRed')
                .setTimestamp()

            interaction.reply({content: '✅ - Pomyślnie wysłano zgłoszenie!', ephemeral: true})
            channel.send({embeds: [reportLogEmbed]})
        }

        if(interaction.customId === 'reportGoodByePlayer') {
            const nick = interaction.fields.getTextInputValue('nick')
            const rank = interaction.fields.getTextInputValue('rankOrg')
            const reason = interaction.fields.getTextInputValue('reason')
            const channel = await interaction.guild.channels.fetch(channelsID.odejscieGracza);

            const reportLogEmbed = new EmbedBuilder()
                .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                .setDescription('> `👉` Odejście z organizacji.')
                .addFields(
                    {name: '`👨` Osoba', value: '> `👉` ' + nick, inline: true},
                    {name: '`🔮` Ranga w organizacji', value: '> `👉` ' + rank, inline: true},
                    {name: '`💾` Powód', value: '> `👉` ' + reason, inline: true},
                )
                .setColor('DarkRed')
                .setTimestamp()

            interaction.reply({content: '✅ - Pomyślnie wysłano zgłoszenie!', ephemeral: true})
            channel.send({embeds: [reportLogEmbed]})
        }

        if(interaction.customId === 'moneyPunishModal') {
            const discordID = interaction.fields.getTextInputValue('punishDiscordID')
            const amount = interaction.fields.getTextInputValue('punishAmountMoney')
            const reason = interaction.fields.getTextInputValue('punishReason')
            const channel = await interaction.guild.channels.fetch(channelsID.karyPieniezne);
            const user = await interaction.guild.members.fetch(discordID)

            const embed = new EmbedBuilder()
                .setAuthor({name: interaction.user.username, iconURL:interaction.user.displayAvatarURL()})
                .setColor('Blurple')
                .setTimestamp()
                .setDescription('> `👉` Wezwanie do opłacenia kary finansowej.')
                .addFields(
                    {name: '`👮‍♂️` Moderator', value: '> `👉` ' + interaction.user.username, inline: true},
                    {name: '`🚔` Oskarżony', value: '> `👉` @' + user.user.username, inline: true},
                    {name: '`💰` Kwota do oddania', value: '> `👉` ' + amount + ' PLN', inline: true},
                    {name: '`🔮` Powód', value: '> `👉` ' + reason, inline:true}
                )

                
            interaction.reply({content: '> `👉` Pomyślnie wykonano.', ephemeral: true})
            channel.send({embeds: [embed]})
            sendMoneyPenalty(interaction.user, user)
            

        }
    }
}