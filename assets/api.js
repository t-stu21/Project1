// leezair api function (apiKey e843fcc14b1b0cfd6739)
// need to incorporate firebase for recent searches
var stateSearched = "";
var citySearched = "";
console.log("test" + citySearched);

// ajax call for leezair api
// will need to change target id to match tylers
$("#drift-button").on("click", function display() {

    $("#bottome_div").empty();

    // console.log($("#city").val().trim());
    // console.log($("#state").val().trim());

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
            actDiv.addClass("activity col-lg-4");

            var card = $("<div>");
            card.addClass("tourist ui card")

            var activityImage = $("<img>");
            activityImage.attr("src", result.coverImage);

            var activityTitle = result.title;
            var activityRating = result.avgRating;

            var content = $("<div>");

            var title = $("<a>").html(activityTitle);
            title.addClass("header");
            
            var rating = $("<a>").text(activityRating + "/ ouf of 5");
            rating.addClass("extra content");

            var link = $("<a>");
            link.attr("href", result.productUrl);

            
            link.append(activityImage);

            content.append(title, rating);

            card.append(activityImage, link);

            actDiv.append(card, content);

            $("#bottom_div").append(actDiv);

        });

    });

});




