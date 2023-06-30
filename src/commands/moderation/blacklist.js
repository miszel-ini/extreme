const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const { sendOnBlackList } = require('../../methods/punishMethod')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('blacklist')
        .setDescription('Wysylanie czlonka na blackliste.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption(option => option 
            .setName('user')
            .setDescription('Wskaz czlonka, ktorego chcesz wyslac na blackliste.')
            .setRequired(true)
            ),

    execute(interaction) {
        const blUser = interaction.options.getUser('user')

        if(blUser) {
            sendOnBlackList(interaction.user, blUser)
        }

        interaction.reply({content: '`👉` Pomyślnie wykonano komende!', ephemeral: true})
    }
}