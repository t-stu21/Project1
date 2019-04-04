$(document).ready(function () {

    var database = firebase.database(); //firebase variable
    var weatherIconp = ''; //for weather icons


    $("#drift-button").on("click", function (event) {
        event.preventDefault();

        var cityLocation = $("#city-input").val().trim();
        var stateLocation = $("#state-input").val().trim();


        // var locationRef = database.ref("Location Info");
        // locationRef.child('City').set(cityLocation);
        // locationRef.child('State').set(stateLocation);


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
                        //added -1 in for loop to reduce number of days shown from 5 to 4 
                        for (var i = 0; i < response.DailyForecasts.length - 1; i++) {

                            //ensuring data is returning correctly
                            console.log(response.DailyForecasts[i].Date);
                            console.log(response.DailyForecasts[i].Temperature.Minimum);
                            console.log(response.DailyForecasts[i].Temperature.Maximum);
                            console.log(response.DailyForecasts[i].Day.Wind.Speed.Value);
                            console.log(response.DailyForecasts[i].Day.Wind.Speed.Unit);
                            console.log(response.DailyForecasts[i].Day.Icon);
                            // creating variables from response data
                            var weatherIcon = response.DailyForecasts[i].Day.Icon;

                            checkIcon();
                            //append weather icon
                            var weatherAppd = $("<div>");
                            weatherAppd.addClass("days");
                            var weatherIcondis = $("<img>")
                            weatherIcondis.attr("src", 'https://developer.accuweather.com/sites/default/files/' + weatherIconp + weatherIcon + '-s.png');
                            weatherAppd.append(weatherIcondis);
                            console.log(weatherAppd);

                            var weathDate = response.DailyForecasts[i].Date;
                            var tempMin = response.DailyForecasts[i].Temperature.Minimum.Value;
                            var tempMax = response.DailyForecasts[i].Temperature.Maximum.Value;
                            var tempMinUnit = response.DailyForecasts[i].Temperature.Maximum.Unit;
                            var tempMaxUnit = response.DailyForecasts[i].Temperature.Minimum.Unit;
                            var windSpeed = response.DailyForecasts[i].Day.Wind.Speed.Value;
                            var windUnit = response.DailyForecasts[i].Day.Wind.Speed.Unit;
                            var iconDescript = response.DailyForecasts[i].Day.LongPhrase;



                            weatherAppd.append(iconDescript + weathDate + "<br>" + tempMin + tempMinUnit + "<br>" + tempMax + tempMaxUnit + "<br>" + windSpeed + windUnit + "<br>");
                            $("#top_div").append(weatherAppd);

                        }
                        //check if url needs 0 before icon 
                        function checkIcon() {

                            if (JSON.stringify(weatherIcon) < 9) {
                                weatherIconp = 0;
                            } else {
                                weatherIconp = ''; `q`
                            }
                            console.log(weatherIconp);
                        }


                    })
            }

                    ,
            )


    }
        ,)
})

