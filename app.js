var config = {
    piKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
    authDomain: "time-sheet-55009.firebaseapp.com",
    databaseURL: "https://time-sheet-55009.firebaseio.com",
    storageBucket: "time-sheet-55009.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-rain-btn").on("click", function (event) {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var time = $("#time-input").val().trim();
    // var frequency = moment($("#frequency-input").val().trim(), "DD/MM/YY").format("X");