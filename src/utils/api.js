var axios = require('axios');

var apikey = "8fad34166684286360dc6d77073bd5e5";
var params = "&APPID=" + apikey;

module.exports = {
    fetchCurrentWeather: function(location) {
        var link = window.encodeURI("http://api.openweathermap.org/data/2.5/weather?q=" + location + params);
        return axios.get(link)
            .then(function(results) {
                console.log('results: ' + results);
                console.log(JSON.stringify(results));
            });
    }
}
