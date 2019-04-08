$(document).ready(function () {


    var weatherIconp = ''; //for weather icons
//animate function 
    function animate(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)
            if (typeof callback === 'function') callback()
        }
        node.addEventListener('animationend', handleAnimationEnd)
    }
    $("#state").removeClass('invalid');
    $("#city").removeClass('invalid');
//on click function 
    $("#drift-button").on("click", function (event) {
        event.preventDefault();
        $("#top_div").empty();
  
        var cityLocation = $("#city").val().trim();
        var stateLocation = $("#state").val();

//if location is good call the weather 
            if (cityLocation && stateLocation)
             {
                callWeather();
             }
             //if location is not good animate the input type thats invalid
             else {
                if (!cityLocation) {
                    $("#city").addClass('invalid');
                    animate("#city", "heartBeat", _=>{
                        $("#city").removeClass('invalid');
                    });
                } else if (!stateLocation) {
                    $("#state").addClass('invalid');
                    animate("#state", "heartBeat", _=>{
                        $("#state").removeClass('invalid');
                    });
                    }
                
                }
                    
      
        console.log(cityLocation);
        console.log(stateLocation);

        function callWeather() {
        // grabbing the location searched 
        var searchLocat = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=4Q9DJCTVu2oLZ5wB2LArLIjGUSqzYlLm&q=" + cityLocation + "%20" + stateLocation + "&language=en-us&details=true";
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
                var forecast = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKeyNew + "?apikey=4Q9DJCTVu2oLZ5wB2LArLIjGUSqzYlLm&language=en-us&details=true&metric=false/";
                //second key 	4Q9DJCTVu2oLZ5wB2LArLIjGUSqzYlLm
                //key 1 113LBdVIIvDY0K9ZzAPIvjkrbVShUugG
                //get forecast response
                $.ajax({
                    url: forecast,
                    method: "GET"
                })
                    .then(function (response) {
                        var forecastResponse = response;
                        console.log(forecastResponse);
                        //added -1 in for loop to reduce number of days shown from 5 to 4 
                        for (var i = 0; i < response.DailyForecasts.length; i++) {

                            //ensuring data is returning correctly
                            console.log(response.DailyForecasts[i].Date);
                            console.log(response.DailyForecasts[i].Temperature.Minimum);
                            console.log(response.DailyForecasts[i].Temperature.Maximum);
                            console.log(response.DailyForecasts[i].Day.Wind.Speed.Value);
                            console.log(response.DailyForecasts[i].Day.Wind.Speed.Unit);
                            console.log(response.DailyForecasts[i].Day.Icon);

                            var weatherIcon = response.DailyForecasts[i].Day.Icon;

                            //check if weather icon needs a 0
                            checkIcon();

                            //div for weather 
                            var weatherAppd = $("<div>");

                            weatherAppd.addClass("days slide-in-top");
                            //p for weather data 
                            var contP = $("<p>");

                            contP.attr("class", "weathercontent");
                            //img to contain weather icon



                            var weatherIcondis = $("<img>")
                            weatherIcondis.attr("class", "align-self-start mr-3");
                            //construct image source url
                            weatherIcondis.attr("src", 'https://developer.accuweather.com/sites/default/files/' + weatherIconp + weatherIcon + '-s.png');
                            //append weather image to div
                            weatherAppd.append(weatherIcondis);
                            //append weather data to div
                            weatherAppd.append(contP);
                            console.log(weatherAppd);




                            //variables for weather display
                            var weathDate = response.DailyForecasts[i].Date;
                            var tempMin = response.DailyForecasts[i].Temperature.Minimum.Value;
                            var tempMax = response.DailyForecasts[i].Temperature.Maximum.Value;
                            var tempMinUnit = response.DailyForecasts[i].Temperature.Maximum.Unit;
                            var tempMaxUnit = response.DailyForecasts[i].Temperature.Minimum.Unit;
                            var windSpeed = response.DailyForecasts[i].Day.Wind.Speed.Value;
                            var windUnit = response.DailyForecasts[i].Day.Wind.Speed.Unit;
                            var iconDescript = response.DailyForecasts[i].Day.IconPhrase;

                            //date format 
                            var date = moment(weathDate).format('dddd MMM Do');
                            var smdate = moment(weathDate).format('ddd');
                            //append created variables to weather data paragraph
                            contP.append(iconDescript + "<br>" + "<b>Min Temp: </b>" + tempMin + tempMinUnit + "<br>" + "<b>Max Temp: </b>" + tempMax + tempMaxUnit + "<br>" + "<b>Wind: </b>" + windSpeed + windUnit + "<br>" + date);
                            $("#top_div").append(weatherAppd);
                            //paragraph to display temp only when screen is small 
                            var smallDisp = $("<p>");
                            smallDisp.attr("class", "smalldisplay");
                            smallDisp.append("<h4>" + tempMax + "°" + "</h4>");
                            smallDisp.append(smdate);
                            weatherAppd.append(smallDisp);
                        }
                        //function to check if icon needs a 0 
                        function checkIcon() {

                            if (JSON.stringify(weatherIcon) < 9) {
                                weatherIconp = 0;
                            } else {
                                weatherIconp = ''; `q`
                            }
                            console.log(weatherIconp);
                        }
                        //function to hide or show data based on windown width
                        function media(win) {

                            if (win.matches) { // If media query matches
                                $(".weathercontent").hide();
                                $(".smalldisplay").show();
                            } else {

                                $(".weathercontent").show();
                                $(".smalldisplay").hide();
                            }
                        }

                        var win = window.matchMedia("(max-width: 700px)")
                        media(win) // Call listener function at run time
                        win.addListener(media)

                    }

                    )
            },


            )


    }
})
}
)
