const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is a help message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'This is the forecast',
        location: 'Costa Mesa, California, United States'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Your lack of navigation is disturbing'
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})