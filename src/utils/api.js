var axios = require('axios');

var baseURL = "http://api.openweathermap.org/data/2.5/";
var apikey = "b714ec74bbab5650795063cb0fdf5fbe";
// var apikey = "8fad34166684286360dc6d77073bd5e5";
var params = "&APPID=" + apikey;

module.exports = {
    fetchCurrentWeather: function(location) {
        var link = window.encodeURI(baseURL + "weather?q=" + location + params);
        return axios.get(link)
            .then(function(results) {
                // console.log('current weather results: ' + results);
                // console.log(JSON.stringify(results["data"]["weather"]));
                // console.log(results.data.weather);
                return results.data.weather;
            });
    },
    fetchFiveDayForecast: function(location) {
        var link = window.encodeURI(baseURL + "forecast/daily?q=" + location + ",us" + "&cnt=5" + params);
        return axios.get(link)
            .then(function(results) {
                // console.log('forecast results: ' + results);
                // console.log(JSON.stringify(results));
                return results.data;
            });
    }
}
