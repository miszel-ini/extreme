const {SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pomoc')
        .setDescription('Wyświetla liste pomocy'),

    execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setAuthor({name: '📝 | Pomoc', iconURL: interaction.user.displayAvatarURL()})
            .setColor('Blurple')
            .setDescription('> `👉` Wybierz z poniższej listy kategorie, która Cię interesuje.')
            .setThumbnail(interaction.user.displayAvatarURL())

        const helpSelect = new StringSelectMenuBuilder()
            .setCustomId('helpSelectMenu')
            .setPlaceholder('Dokonaj wyboru!')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('👮‍♂️ | Moderacyjne')
                    .setDescription('Tutaj znajdziesz komendy dostępne dla administracji.')
                    .setValue('moderationOption'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('🚗 | Organizacja')
                    .setDescription('Tutaj znajdziesz komendy organizacyjne')
                    .setValue('organizationOption'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('👨 | Użytkownicy')
                    .setDescription('Tutaj znajdziesz wszystkie komendy dla uzytkowników')
                    .setValue('userOption'),
            )
        
        const row = new ActionRowBuilder().addComponents(helpSelect)
        interaction.reply({embeds: [helpEmbed], components: [row]})
    }
}