const express = require('express')
const { greeting } = require('utility-a')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World Service A! ' + greeting())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})