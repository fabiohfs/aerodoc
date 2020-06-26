const axios = require('axios');
const xml2json = require('xml2json');
const path = require('path');
const fs = require('fs');

module.exports = {
    async getChart(req, res) {
        var { icao } = req.query;
        var { tipo } = req.query;

        var url = process.env.BASE_URL;
        url = url.replace('=Key', '=' + process.env.API_KEY);
        url = url.replace('=Pass', '=' + process.env.API_PWD);

        url = url.concat('&area=cartas&IcaoCode=', icao, '&tipo=', tipo);

        await axios.get(url, {
        }).then(async function (data) {
            var result = data.data;

            var responseJson = xml2json.toJson(result);
            var downloadLink = JSON.parse(responseJson).aisweb.cartas.item.link;

            return res.send({ "fileLink": downloadLink });
        })

        return res.end()
    }
}