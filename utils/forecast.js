const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=304de7682cf118807f3d99e8c0bac028&units=f&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            const data = body.current
            const { temperature, feelslike, wind_speed} = data
            const condition = data.weather_descriptions[0]
            callback(undefined, `${condition}. It is currently ${temperature} degrees out and feels like ${feelslike} degrees out. The wind speed is ${wind_speed} mph.`)
        }
    })
}

module.exports = forecast