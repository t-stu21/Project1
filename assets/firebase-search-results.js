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

var citySearched = "";
var stateSearched = "";
var firstFive = [];
var desThis = [];

$("#drift-button").on("click", function (event) {

  event.preventDefault();

  citySearched = $("#city").val().trim();
  stateSearched = $("#state").val().trim();

  // var locationRef = database.ref("top-five");
  // locationRef.child('city').push(citySearched);
  // locationRef.child('state').push(stateSearched);

  console.log(citySearched);
  console.log(stateSearched);



  var results = [{
    city: citySearched,
    state: stateSearched,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  }];

  database.ref("searched").push(results);
//console.log("1" + results, results.city[1], results.state[1]);
});

//database.ref("searched").limitToLast(5).on("value", function (childSnapshot) {
 
  console.log('childSnapshot',childSnapshot.val())

  console.log("childsnapshot:"+childSnapshot.val().city)


    //$('.results').empty();


   //$(".results").prepend("<div class='result'><span class='c'> " + childSnapshot.val().city +
   //"</span><span class='s'>" + childSnapshot.val().state + "</span></div>"),
   
  //function(errorObject) {
  //  console.log("errors handled: " + errorObject.code);
  //};
  //});

  //database.ref("searched").orderByChild("dataAdded").on("child_added", function(snapshot) {
   /// $("#city-display").text(snapshot.val().city);
   // $("#state-display").text(snapshot.val().state);
  //});
