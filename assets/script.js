//assign a unique API Key
var APIKey = "1015eb987b571c9ae03f14ed84c2a9cc";
var currentCity = $("#currentCity");
var currentInfo = $("#current");
var searchBtn = $("#search");

// function to get current weather
var getWeather = (city) => {
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + (city) + "&units=imperial&appid=73f18ebb6396304904fb3525f689c405"
    fetch(requestURL)
        .then(function (response) {
            if (response.status !== 200) {
                alert("Cannot find city!")
                return
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data)


            currentInfo.empty();

            currentInfo.attr("class", "card-body m-2 border border-warning reounded p-3");
            var cityName = data.name;
            var cityNameEl = $('<h3>');
            cityNameEl.text(cityNameEl);

        })

            //search button event listener
            searchBtn.on("click", function (event) {
            getWeather(currentCity.val());
        });
}
