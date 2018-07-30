const express = require('express')
const app = express()

var port = Number(process.env.PORT || 3000);

var Config = require('./db_config');

app.use('/api', require('./route'))

app.listen(port, () => {
  console.log(`Start server at port ${port}.`)
})