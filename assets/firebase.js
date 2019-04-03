var config = {
  apiKey: "AIzaSyAdbLOzyRP7TX1AZ5Ero01bzzYJaz4WmUs",
  authDomain: "project-6a7dc.firebaseapp.com",
  databaseURL: "https://project-6a7dc.firebaseio.com",
  projectId: "project-6a7dc",
  storageBucket: "project-6a7dc.appspot.com",
  messagingSenderId: "119882092763"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#drift-button").on("click", function (event) {
  event.preventDefault();

  var city = $("#").val().trim();
  var state = $("#").val().trim();

  var recent = {
    city: city,
    state: state
  };

  database.ref().push(recent);

});

database.ref().on("child_added", function() {
  var city = childSnapshot.val().city;
  var state = childSnapshot.val().state;

  $("#city").html(city);
  $("#state").html(state);
  
});