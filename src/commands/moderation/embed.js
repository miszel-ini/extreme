const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDescription('Komenda umożliwia wysłanie wiadomości typu - embed.')

        .addStringOption(option => option 
            .setName('tytul')
            .setDescription('Tytuł wiadomości embed.')
            .setRequired(true)
            )
        .addStringOption(option => option 
            .setName('tresc')
            .setDescription('Treść wiadomości embed.')
            .setRequired(true)
            )
        .addChannelOption(option => option 
            .setName('kanal')
            .setDescription('Wybierz kanał, na który ma zostać wysłany embed.')
            ),

    execute(interaction) {
        const embedTitle = interaction.options.getString('tytul')
        const embedDescription = interaction.options.getString('tresc')
        const embedChannel = interaction.options.getChannel('kanal')

        const embed = new EmbedBuilder()
            .setTitle('`🔮` ' + embedTitle)
            .setDescription('> `👉` ' + embedDescription)
            .setColor(0x4287f5)
            .setTimestamp()

        if(embedChannel != null) {
            embedChannel.send({embeds: [embed]})
            interaction.reply({content: `> ✅ Pomyślnie wysłano embed na ${embedChannel}`})
        } else {
            interaction.reply({embeds: [embed]})
        }

    }
}