$(document).ready(function () {

    var database = firebase.database(); //firebase variable

    // 113LBdVIIvDY0K9ZzAPIvjkrbVShUugG
    $("#search").on("click", function (event) {
        event.preventDefault();

        var cityLocation = $("#city-input").val().trim();
        var stateLocation = $("#state-input").val().trim();

        console.log(cityLocation);
        console.log(stateLocation);

        var searchLocat = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=113LBdVIIvDY0K9ZzAPIvjkrbVShUugG&q=" + cityLocation + "%20" + stateLocation + "&language=en-us&details=true";
        console.log(searchLocat);

        $.ajax({
            url: searchLocat,
            method: "GET"
        })
            .then(function (response) {
                var locationResponse = response;
                for (var i = 0; i < locationResponse.length; i++)
                    console.log(locationResponse[i]);
                console.log(locationResponse[0].Key);
                var locationKeyNew = locationResponse[0].Key;


                var forecast = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKeyNew + "?apikey=113LBdVIIvDY0K9ZzAPIvjkrbVShUugG&language=en-us&details=true&metric=false/";


                // var apiKey = '&appid=a8d8257e8f1ad8676bb90b41f879112c'
                // var unit = '&units=imperial'
                // var forecastSer = forecast + location + unit + apiKey;

                $.ajax({
                    url: forecast,
                    method: "GET"
                })
                    .then(function (response) {
                        var forecastResponse = response;
                        console.log(forecastResponse);
                        for (var i = 0; i < response.DailyForecasts.length; i++) {
                            console.log(response.DailyForecasts[i].Date);
                            console.log(response.DailyForecasts[i].Temperature.Minimum);
                            console.log(response.DailyForecasts[i].Temperature.Maximum);
                            console.log(response.DailyForecasts[i].Day.Wind.Speed.Value);
                            console.log(response.DailyForecasts[i].Day.Wind.Speed.Unit);

                        }
                    }
                    )

                // for (var i = 0; i < response.list.length; i++) {
                //     var timestamp = response.list[0].dt * 1000;
                //     console.log(timestamp);
                // }
            }
        ,)
    })
});


  // console.log("humidity: " + response.list[i].main.humidity);
                // console.log("Conditions: " + response.list[i].weather[0].main);
                // console.log("Wind: " + response.list[i].wind.speed);
                // console.log("Day: " + response.list[i].dt_txt);

                  // success: function (data) {
                //     data = JSON.stringify(data);
                //     $("#weatherresult").append('<div>' + data + '</div>');

                // },


                // 
                // console.log(response.list);
                // console.log(response.list[0]);
                // console.log(response.list[0].main);
                // console.log(response.list[0].main.temp);


                // for (var i = 0; i < response.list.length; i++) {
                //     console.log("Time of data: " + response.list[i].dt);