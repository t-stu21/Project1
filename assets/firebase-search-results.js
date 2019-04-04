var config = {
    apiKey: "AIzaSyBYvs50zCq5GpVddL1ei3b_BPHu9B0Kmmk",
    authDomain: "project-1-20b87.firebaseapp.com",
    databaseURL: "https://project-1-20b87.firebaseio.com",
    projectId: "project-1-20b87",
    storageBucket: "project-1-20b87.appspot.com",
    messagingSenderId: "242372759001"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#drift-button").on("click", function () {

    var citySearched = $("#city").val().trim();
    var stateSearched = $("#state").val().trim();

    console.log(citySearched);
    console.log(stateSearched);

    var results = {
        cityName: citySearched,
        stateName: stateSearched,
    };

    database.ref().set(results);

});