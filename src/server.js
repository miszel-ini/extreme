const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('OK')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log('[discord-bot] - server is ready to start!' + Date.now())
  })
}

module.exports = keepAlive;