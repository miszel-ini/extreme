const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('plus')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDescription('Nadawanie plusa czlonkowi organizacji')
        .addUserOption(option => option 
                .setName('user')
                .setDescription('Wybierz osobe, której chcesz dać plusa')
                .setRequired(true)
            )
        .addRoleOption(option => option
                .setName('role')
                .setDescription('Wybierz ile plusów chcesz nadać')
                .setRequired(true)
            ),
    
    execute(interaction) {
        const user = interaction.options.getUser('user')
        const role = interaction.options.getRole('role')

        const embed = new EmbedBuilder()
            .setTitle('🌕 | Nadawanie plusa')
            .setColor('Green')
            .setDescription('> `👉` Nadałeś plusa osobie ' + user.username)

        interaction.reply({embeds: [embed], ephemeral: true})

    }
}