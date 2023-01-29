const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const data = require('./assets/data.json')

app.get('/api/data/:number', (req, res) => {
    res.json(data.filter(item => (item.number == req.params.number))[0])
})

app.get('/api/data', (req, res) => {
    res.json(data)
})

app.get('/api/logo', (req, res) => {
    res.sendFile(`${__dirname}/assets/logo.svg`)
})

app.get('/api/img/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/${req.params.name}.jpg`)
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(3000)
