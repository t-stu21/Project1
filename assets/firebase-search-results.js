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

$("#drift-button").on("click", function (event) {

  event.preventDefault();

  var citySearched = $("#city").val().trim();
  var stateSearched = $("#state").val().trim();

  // var locationRef = database.ref("top-five");
  // locationRef.child('city').push(citySearched);
  // locationRef.child('state').push(stateSearched);

  console.log(citySearched);
  console.log(stateSearched);

  var results = {
    city: citySearched,
    state: stateSearched,
  };

  database.ref("searched").push(results);

});

database.ref("searched").on("child_added", function (childSnapshot) {
  var city = childSnapshot.val().city;
  var state = childSnapshot.val().state;

// results id is where firebase data appends to
    $("#results").html("City:  " + city + "  State:  " + state);

});
