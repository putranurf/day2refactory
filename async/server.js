const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const address = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(address)

app.get('/', (req, res) => {
    res.json({
        message: 'Hello worlds'
    })
})

app.listen(3000, () => console.log(`Running on Port ${port}`))