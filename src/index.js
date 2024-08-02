const express = require('express')
const { tableGen } = require('./dbsimulator')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})