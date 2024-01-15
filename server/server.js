const express = require('express')
const app = express()
const port = 3000
const beverageRoute = require('./routes/BeverageRoute');

app.use('/beverage', beverageRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`MixIT Server listening on port ${port}`)
})