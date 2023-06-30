const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minus')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Nadawanie minusa czlonkowi organizacji')
        .addUserOption(option => option 
                .setName('user')
                .setDescription('Wybierz osobe, której chcesz dać minusa')
                .setRequired(true)
            )
        .addRoleOption(option => option
                .setName('role')
                .setDescription('Wybierz ile minusów chcesz nadać')
                .setRequired(true)
            ),
    
    execute(interaction) {
        const user = interaction.options.getUser('user')
        const role = interaction.options.getRole('role')

        const embed = new EmbedBuilder()
            .setTitle('💊 | Nadawanie minusa')
            .setColor('DarkRed')
            .setDescription('> `👉` Nadałeś minusa osobie ' + user.username)

        interaction.reply({embeds: [embed], ephemeral: true})

    }
}