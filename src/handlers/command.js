function loadCommands(client) {
    const ascii = require('ascii-table')
    const fs = require('fs')
    const table = new ascii().setHeading("[KOMENDY]", "[STATUS]")

    let cmdsArray = [];
    
    const cmdsFolder = fs.readdirSync('src/commands')

    for(const folder of cmdsFolder) {
        const cmdFiles = fs.readdirSync(`src/commands/${folder}`).filter((file) => file.endsWith(".js"))

        for(const file of cmdFiles) {
            const cmdFile = require(`../commands/${folder}/${file}`)
        
            client.commands.set(cmdFile.data.name, cmdFile)
            cmdsArray.push(cmdFile.data.toJSON())
            
            table.addRow(file, "wczytano")
            continue;
        }
    }

    client.application.commands.set(cmdsArray)
    
    return console.log(table.toString(), "\n[💻] -> Wczytane komendy!")
}

module.exports = {
    loadCommands
}