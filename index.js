const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const data = require('./assets/data.json')

app.get('/api/data', (req, res) => {
    res.json(data)
})

app.get('/api/logo', (req, res) => {
    res.sendFile(`${__dirname}/assets/logo.svg`)
})

app.get('/api/img/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/${req.params.name}.jpg`)
})

app.get('/api/vdo/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/${req.params.name}.mp4`)
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(3000)