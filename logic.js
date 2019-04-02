$(document).ready(function () {

    var database = firebase.database(); //firebase variable
    var weatherIconp = ''; //for weather icons


    $("#search").on("click", function (event) {
        event.preventDefault();

        var cityLocation = $("#city-input").val().trim();
        var stateLocation = $("#state-input").val().trim();

        console.log(cityLocation);
        console.log(stateLocation);
        // grabbing the location searched 
        var searchLocat = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=113LBdVIIvDY0K9ZzAPIvjkrbVShUugG&q=" + cityLocation + "%20" + stateLocation + "&language=en-us&details=true";
        console.log(searchLocat);

        $.ajax({
            url: searchLocat,
            method: "GET"
        })
            //Getting location key for searched location
            .then(function (response) {
                var locationResponse = response;
                for (var i = 0; i < locationResponse.length; i++)
                    console.log(locationResponse[i]);
                console.log(locationResponse[0].Key);
                var locationKeyNew = locationResponse[0].Key;

                //forecast URL
                var forecast = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKeyNew + "?apikey=113LBdVIIvDY0K9ZzAPIvjkrbVShUugG&language=en-us&details=true&metric=false/";


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

                            var weathDate = response.DailyForecasts[i].Date;
                            var tempMin = response.DailyForecasts[i].Temperature.Minimum.Value;
                            var tempMax = response.DailyForecasts[i].Temperature.Maximum.Value;
                            var tempMinUnit = response.DailyForecasts[i].Temperature.Maximum.Unit;
                            var tempMaxUnit = response.DailyForecasts[i].Temperature.Minimum.Unit;
                            var windSpeed = response.DailyForecasts[i].Day.Wind.Speed.Value;
                            var windUnit = response.DailyForecasts[i].Day.Wind.Speed.Unit;
                            var weatherIcon = response.DailyForecasts[i].Day.Icon;

                            //check if icon needs a 0 in front of it 
                            function checkIcon() {

                                if (JSON.stringify(weatherIcon) < 9) {
                                    weatherIconp = 0;
                                } else {
                                    weatherIconp = '';
                                }
                                console.log(weatherIconp);
                            }

                            checkIcon();
                            var iconDescript = response.DailyForecasts[i].Day.LongPhrase;
                            var weatherTest = $("<div>");
                            var weatherTInfo = $("<p>");
                            var weatherIconUrl = 'https://developer.accuweather.com/sites/default/files/';
                            var weatherDisp = $("<img>");
                            weatherDisp.attr('src', weatherIconUrl + weatherIconp + weatherIcon + '-s.png');
                            console.log(weatherDisp);

                            //put results in html
                            weatherTInfo.append(weatherDisp);
                            weatherTInfo.append(iconDescript + "<br>");
                            weatherTInfo.append("Date: " + weathDate + "<br>");
                            weatherTInfo.append("Min Temp: " + tempMin + tempMinUnit + "<br>");
                            weatherTInfo.append("Max Temp: " + tempMax + tempMaxUnit + "<br>");
                            weatherTInfo.append("Wind: " + windSpeed + windUnit + "<br>");





                            weatherTest.append(weatherTInfo);
                            $("#weatherresult").append(weatherTest);
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