const {Events, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js')

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        if(!interaction.isStringSelectMenu()) return;
        const selected = interaction.values[0]

        if(interaction.customId === 'sprawaSelectMenu') {
        
            if(selected === 'organizationMotorSport') {

                const embed = new EmbedBuilder()
                    .setAuthor({name: '`🔮` Co dalej?', iconURL: interaction.guild.iconURL()})
                    .setDescription('> `👉` Wybierz opcję, z której chcesz skorzystać.')
                    .setTimestamp()
                    .setColor('DarkOrange')

                const abandonedVehicles = new ButtonBuilder()
                    .setCustomId('abandonedVehicles')
                    .setLabel("🚘| Porzucony pojazd")
                    .setStyle(ButtonStyle.Primary)

                const vehicleRefund = new ButtonBuilder()
                    .setCustomId('vehicleRefund')
                    .setLabel("💵| Zwrot pieniedzy")
                    .setStyle(ButtonStyle.Success)

                const rewriteVehicleOnOrg = new ButtonBuilder()
                    .setCustomId('rewriteVehicle')
                    .setLabel('💾| Przepisanie pojazdu')
                    .setStyle(ButtonStyle.Secondary)

                const firstRow = new ActionRowBuilder().addComponents(abandonedVehicles, vehicleRefund)
                const secondRow = new ActionRowBuilder().addComponents(rewriteVehicleOnOrg)

                interaction.reply({embeds: [embed], components: [firstRow,secondRow]})

            }
            if(selected === 'goodByePlayer') {
                const modal = new ModalBuilder()
                    .setCustomId('reportGoodByePlayer')
                    .setTitle('👋 ODEJŚCIE')

                const nick = new TextInputBuilder()
                    .setCustomId('nick')
                    .setLabel('👨| Twój Nick')
                    .setPlaceholder('Przykładowo: miszeltraper')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(true)

                const rank = new TextInputBuilder()
                    .setCustomId('rankOrg')
                    .setLabel('🔮| Twoja ranga w organizacji')
                    .setPlaceholder('Przykładowo: Stażysta')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(true)

                const reason = new TextInputBuilder()
                    .setCustomId('reason')
                    .setLabel('💾| Powód odejscia')
                    .setPlaceholder('Przykładowo: ide do innej organizacji, milo bylo z wami')
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(true)

                const firstRow = new ActionRowBuilder().addComponents(nick)
                const secondRow = new ActionRowBuilder().addComponents(rank)
                const thirdRow = new ActionRowBuilder().addComponents(reason)

                modal.addComponents(firstRow, secondRow, thirdRow)
                interaction.showModal(modal)
                    
            }

            if(selected === 'otherThings') {
                const embed = new EmbedBuilder()
                    .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                    .setColor('DarkRed')
                    .setDescription('> `👉` Aktualnie niedostępne!')

                interaction.reply({embeds: [embed]})
            }
        }
        if(interaction.customId === 'helpSelectMenu') {
            if(selected === 'moderationOption') {
                const embeds = new EmbedBuilder()
                    .setAuthor({name: '📝| Komendy moderacyjne', iconURL: interaction.guild.iconURL()})
                    .setColor('Blurple')
                    .setDescription('> `👉` Poniżej znajdują się wszystkie komendy moderacyjne.')
                    .addFields(
                        {name: '🔐| BlackLista', value: '`/blacklist` - komenda do wpisywania na czarna liste.', inline: false},
                        {name: '📝| Embed', value: '`/embed` - Komenda do wysyłania wiadomości embed.', inline: false},
                        {name: '🔨| Nadawnie kar', value: '`/punish` - Komenda do nakładania kar na członków organizacji.', inline: false},
                        {name: '🌕| Plusy/Minusy', value: '`/plus, /minus` - Komenda do dawania plusów/minusów.', inline: false},
                    )
                    .setThumbnail(interaction.user.displayAvatarURL())
                    
                interaction.reply({embeds: [embeds]})
            }
            if(selected === 'organizationOption') {
                const orgOptionEmbed = new EmbedBuilder()
                    .setAuthor({name: '🔮| Komendy organizacyjne', iconURL: interaction.guild.iconURL()})
                    .setColor('Blurple')
                    .setDescription('> `👉` Poniżej znajdują się wszystkie komendy organizacyjne')
                    .addFields(
                        {name: '📝| Sprawy do zarządu.', value: '`/sprawa` - Komenda do tworzenia wniosku do zarządu.', inline: true},
                        {name: '🔧| Zwrot kosztów nitro.', value: '`/setup-nitro` - Komenda do tworzenia wniosku o zwrot kosztów nitro', inline: true},
                    )
                    .setThumbnail(interaction.user.displayAvatarURL())

                interaction.reply({embeds: [orgOptionEmbed]})
            }
            if(selected === 'userOption') {
                const userOptionEmbed = new EmbedBuilder()
                    .setAuthor({name: '👨| Komendy dla użytkowników', iconURL: interaction.guild.iconURL()})
                    .setColor('Blurple')
                    .setDescription('> `👉` Poniżej znajdują się wszystkie komendy dla użytkowników.')
                    .addFields(
                        {name: '📝| Komenda pomocy', value: '`/pomoc` - Wyświetla liste pomocy', inline: true},
                        {name: '👨| Informacje o użytkowniku', value: '`/userinfo` - Wyświetla informacje o użytkowniku', inline: true},
                        {name: '💻| Informacje o serwerze', value: '`/serverinfo` - Wyświetla informacje o serwerze', inline:false},
                    )
                    .setThumbnail(interaction.user.displayAvatarURL())
                
                interaction.reply({embeds: [userOptionEmbed]})
            }
        }
    }
}