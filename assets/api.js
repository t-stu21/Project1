// var config = {
//     apiKey: "AIzaSyAdbLOzyRP7TX1AZ5Ero01bzzYJaz4WmUs",
//     authDomain: "project-6a7dc.firebaseapp.com",
//     databaseURL: "https://project-6a7dc.firebaseio.com",
//     projectId: "project-6a7dc",
//     storageBucket: "project-6a7dc.appspot.com",
//     messagingSenderId: "119882092763"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

// leezair api function (apiKey e843fcc14b1b0cfd6739)
// need to incorporate firebase for recent searches
var stateSearched = "";
var citySearched = "";
console.log(citySearched);

// ajax call for leezair api
// will need to change target id to match tylers
$("#search-button").on("click", function display() {

    $("#where-activities-go").empty();

    console.log($("#city").val().trim());
    console.log($("#state").val().trim());

    var stateSearched = $("#state").val().trim();
    var citySearched = $("#city").val().trim();

    // var queryURL = "";
    var queryURL = "https://affiliate.api.leezair.com/v1/products?key=ca589a5d3fabeefcc4c9&country=United%20States&state=" + stateSearched + "&city=" + citySearched + "&distance=50&showFreeActivities=1&sort=popularity&limit=150&page=1";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data.list;
        console.log(results);

        results.forEach(function (result) {

            var actDiv = $("<div>");

            var activityTitle = result.title;
            var activityRating = result.avgRating;

            var title = $("<p>").html(activityTitle);
            var rating = $("<p>").text(activityRating + "/ ouf of 5");

            var link = $("<a>");
            link.attr("href", result.productUrl);

            var activityImage = $("<img>");
            activityImage.attr("src", result.coverImage);

            link.append(activityImage);
            actDiv.append(title, rating, link);

            $("#where-activities-go").append(actDiv);

        });

    });

});




