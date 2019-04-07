// leezair api function (apiKey e843fcc14b1b0cfd6739)
// need to incorporate firebase for recent searches
var stateSearched = "";
var citySearched = "";
console.log("test" + citySearched);





// ajax call for leezair api
// will need to change target id to match tylers
$("#drift-button").on("click", function display() {

    $("#bottom_div").empty();

    console.log($("#city").val().trim());
    console.log($("#state").val().trim());
    var stateSearched = $("#state").val().trim();
    var citySearched = $("#city").val().trim();

    if (citySearched && stateSearched) {
        getEvent();
    }
    console.log(stateSearched);
    console.log(citySearched);
    // var queryURL = "";

    function getEvent (){
    var queryURL = "https://affiliate.api.leezair.com/v1/products?key=ca589a5d3fabeefcc4c9&country=United%20States&state=" + stateSearched + "&city=" + citySearched + "&distance=50&showFreeActivities=1&sort=popularity&limit=150&page=1";



    console.log(queryURL);
    console.log(stateSearched);
    console.log(citySearched);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data.list;
        console.log(results);

        results.forEach(function (result) {

            var activeDiv = $("<a class='col-lg-3'>");
            activeDiv.addClass("ui card slide-in-blurred-top")
            activeDiv.attr("href", result.productUrl)

            var activityTitle = result.title;
            var description = "Drift"

            var rating = result.avgRating



            var title = $("<a>").html(activityTitle);
            title.attr("href", result.productUrl)
            title.addClass("header");


            var displayDes = $("<div>")
            displayDes.attr("href", result.productUrl);

            displayDes.addClass("description")
            var displayRating = $("<div>").text(rating + "/ ouf of 5");

            displayRating.addClass("extra content");
            var imageDiv = $("<img>");
            imageDiv.attr("href", result.productUrl);

            imageDiv.addClass("image")
            imageDiv.attr("src", result.coverImage);
            displayRating.append(rating);
<<<<<<< HEAD
            activeDiv.append(imageDiv, title);
=======
            activeDiv.append(imageDiv, title, displayDes);
>>>>>>> 167cc4652bf6a693a55602c26d1e593e8467dd3c
            $(displayDes).append(description);
            $("#bottom_div").append(activeDiv);

            activeDiv.css({
                "margin-top": "5px",
                "background-color": "navy",
                "margin-left": "85px",
                "margin-right": "5px",
                "margin-bottom": "10px",
                "text-align": "center",
                "width": "30%",
                "height": "100%",
                "bottom": "20px"

            })

            displayDes.css({
                "font-size": "10px",
                "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
            })

            title.css({
                 "font-size": "15px",
                "color": "white",
                "font-family": "'Titillium web', sans serif"
            })
            imageDiv.css ({
                "height": "100%"
            })

            if($(window).width() < 1024)
{
    displayDes.css({
        "font-size": "50px",
        "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
    })
   // change functionality for smaller screens
} else {
    displayDes.css({
        "font-size": "75px",
        "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
    })
   // change functionality for larger screens
}

if($(window).width() < 950)
{
    displayDes.css({
        "font-size": "25px",
        "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
    })
   // change functionality for smaller screens
} else {
    displayDes.css({
        "font-size": "50px",
        "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
    })
   // change functionality for larger screens
}

if($(window).width() < 650)
{
    console.log(window);
    displayDes.css({
        "font-size": "25px",
        "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
    })
   // change functionality for smaller screens
} else {
    displayDes.css({
        "font-size": "25px",
        "color": "white",
                "margin-top": "50px",
                "font-family": "'Pacifico', cursive"
    })
   // change functionality for larger screens
}

function media(win) {

    if (win.matches) { // If media query matches
        activeDiv.css({
            "margin-top": "5px",
            "background-color": "navy",
            "margin-left": "2px",
            "margin-right": "2px",
            "margin-bottom": "10px",
            "text-align": "center",
            "width": "95%",
            "height": "100%"

        })

    } 
}

var win = window.matchMedia("(max-width: 700px)")
media(win) // Call listener function at run time
win.addListener(media)

}
        ,);
    
    },


    );

}})



