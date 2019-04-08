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



function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();

      returnArr.push(item);
  });

  return returnArr;

};

firebase.database().ref('searched').on('value', function(snapshot) {
console.log(snapshotToArray(snapshot));

var test = snapshotToArray(snapshot);

$(".results").text(test);

});

$("#drift-button").on("click", function (event) {

  event.preventDefault();

  citySearched = $("#city").val().trim();
  stateSearched = $("#state").val().trim();

  console.log(citySearched);
  console.log(stateSearched);



  var results = [{
    city: citySearched,
    state: stateSearched,

  };

  database.ref("searched").push(results);
//console.log("1" + results, results.city[1], results.state[1]);
});


// database.ref("searched").on("value", function (childSnapshot) {
// console.log(childSnapshot.val().city);
// console.log(childSnapshot.val().state);

//    $(".results").prepend("<div class='result'><span class='c'> " + childSnapshot.val().city +
//    "</span><span class='s'>" + childSnapshot.val().state + "</span></div>"),
   
//   function(errorObject) {
//     console.log("errors handled: " + errorObject.code);
//   };
//   });

//   database.ref("searched").on("child_added", function(snapshot) {
//     $("#city-display").text(snapshot.val().city);
//     $("#state-display").text(snapshot.val().state);
//   });

