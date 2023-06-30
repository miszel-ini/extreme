const { EmbedBuilder, AutoModerationRule } = require("discord.js")

function sendOnBlackList(moderator, user) {
    const successEmbed = new EmbedBuilder()
        .setAuthor({name: '👮‍♂️ | BlackLista', iconURL: moderator.displayAvatarURL()})
        .setColor('Green')
        .setDescription('> `👉` Pomyślnie wpisano osobe na blackliste')
        .setTimestamp()

    const dmMessageUser = new EmbedBuilder()    
        .setAuthor({name: '🚧 | BlackLista', iconURL: user.displayAvatarURL()})
        .setColor('Red')
        .setDescription('> `👉` Zostałeś wpisany na blackliste organizacji.')
        .addFields(
            {name: '`👮‍♂️` | Moderator', value: moderator.username, inline: true},
            {name: '`💾` | Powód', value: '> `👉` Złamanie regulaminu organizacji.', inline: true},
        )
        .setTimestamp()

    moderator.send({embeds: [successEmbed]})
    user.send({embeds: [dmMessageUser]})

}

function sendMoneyPenalty(moderator, user) {
    const dmUserEmbed = new EmbedBuilder()
    .setAuthor({name: moderator.user.username, iconURL: moderator.user.displayAvatarURL()})
    .setColor('Blurple')
    .setTimestamp()
    .setDescription('> `👉` Wezwanie do opłacenia kary finansowej.')
    .addFields(
        {name: '`👮‍♂️` Moderator', value: '> `👉` ' + moderator.user.username, inline: true},
        {name: '`🚔` Oskarżony', value: '> `👉` @' + user.user.username, inline: true},
        {name: '`💰` Kwota do oddania', value: '> `👉` ' + amount + ' PLN', inline: true},
        {name: '`🔮` Powód', value: '> `👉` ' + reason, inline:true}
    )

    user.send({embeds: [dmUserEmbed]})


}

module.exports = {
    sendOnBlackList,
    sendMoneyPenalty
}