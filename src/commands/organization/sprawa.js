const {SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, PermissionFlagsBits, ActionRowBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sprawa')
        .setDescription('Komenda umożliwia, wysłanie swojej sprawy do zarządu organizacji.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

        const embed = new EmbedBuilder()
            .setAuthor({name: '`🐱‍🏍` | WNIOSEK O SPRAWE DO ZARZĄDU', iconURL: interaction.guild.iconURL()})
            .setDescription('> `👉` Wybierz opcje z rozsuwanej listy poniżej, a ukażą Ci się wszystkie informacje potrzebne do złożenia wniosku')
            .setColor('DarkGreen')
            .setTimestamp()
            
            
        const stringSelect = new StringSelectMenuBuilder()
            .setCustomId('sprawaSelectMenu')
            .setPlaceholder('🎉 | Wybierz opcje!')
            .addOptions(

                new StringSelectMenuOptionBuilder()
                    .setLabel('🚗 | Motoryzacja')
                    .setDescription('Tworzenie wniosku odnośnie pojazdów organizacyjnych')
                    .setValue('organizationMotorSport'),

                new StringSelectMenuOptionBuilder()
                    .setLabel('👋 | Odejścia')
                    .setDescription('Tworzenie wniosku o odejście z organizacji')
                    .setValue('goodByePlayer'),
                
                new StringSelectMenuOptionBuilder()
                    .setLabel('🌕 | Reszta')
                    .setDescription('Wszystkie inne sprawy do zarządu')
                    .setValue('otherThings'),
            )

        const firstRow = new ActionRowBuilder().addComponents(stringSelect)

        interaction.reply({
            embeds: [embed],
            components: [firstRow],
            ephemeral: true,
        })

    }
}