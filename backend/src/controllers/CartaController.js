const axios = require('axios')
const xml2json = require('xml2json')

module.exports = {
    async getChart(req, res) {
        var { icao } = req.query
        var { tipo } = req.query

        var url = process.env.BASE_URL
        url = url.replace('=Key', '=' + process.env.API_KEY)
        url = url.replace('=Pass', '=' + process.env.API_PWD)

        url = url.concat('&area=cartas&IcaoCode=', icao, '&tipo=', tipo)

        await axios.get(url, {
        })
            .then(function (data) {
                var result = data.data
                
                var responseJson = xml2json.toJson(result)                
                var downloadLink = JSON.parse(responseJson).aisweb.cartas.item.link
                res.send(downloadLink)
            })
            .catch(function (error) {
                return res.json(JSON.parse(error))
            })

        
    }
}