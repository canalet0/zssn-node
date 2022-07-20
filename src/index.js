const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const survivorRouter = require('./routes/SurvivorRouter')

app.use(express.json())

app.use('/survivors', survivorRouter)

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
