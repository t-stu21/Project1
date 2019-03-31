$(document).ready(function () {

    var database = firebase.database(); //firebase variable

    // 113LBdVIIvDY0K9ZzAPIvjkrbVShUugG
    $("#search").on("click", function (event) {
        event.preventDefault();

        var location = $("#location-input").val().trim();
        console.log(location);

        var serUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='
        var apiKey = '&appid=a8d8257e8f1ad8676bb90b41f879112c'
        var unit = '&units=imperial'
        var locatSer = serUrl + location + unit + apiKey;

        console.log(locatSer);

        $.ajax({
            url: locatSer,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                // console.log(response.list);
                // console.log(response.list[0]);
                // console.log(response.list[0].main);
                // console.log(response.list[0].main.temp);


                for (var i = 0; i < response.list.length; i++) {
                    console.log("Time of data: " + response.list[i].dt);
                    console.log("Temp: " + response.list[i].main.temp);
                    console.log("humidity: " + response.list[i].main.humidity);
                    console.log("Conditions: " + response.list[i].weather[0].main);
                    console.log("Wind: " + response.list[i].wind.speed);
                    console.log("Day: " + response.list[i].dt_txt);
                }


            })
    })
})