$(document).ready(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA4171ciP79ckLBPoSd9_isrRm7YooNo1s",
        authDomain: "project-1-f9d74.firebaseapp.com",
        databaseURL: "https://project-1-f9d74.firebaseio.com",
        projectId: "project-1-f9d74",
        storageBucket: "project-1-f9d74.appspot.com",
        messagingSenderId: "232793427079",
        appId: "1:232793427079:web:ead826e9dbdd62a473fc22"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Create a variable to reference the database
    var database = firebase.database();

    //  Button for adding User-inputs
    $("#add-train").on("click", function (event) {
        event.preventDefault();

        // Grabbed values from text boxes
        var trainName = $("#name").val().trim();
        var trainDestination = $("#destination").val().trim();
        var trainTime = $("#train-time").val().trim();
        var trainFrequency = $("#frequency-min").val().trim();

        // Code for handling the push
        database.ref().push({
            name: trainName,
            desti: trainDestination,
            time: trainTime,
            freq: trainFrequency,
            TimeStamp: firebase.database.ServerValue.TIMESTAMP
        });

        alert("Train successfully added");
        clear();
    });

    // Clears all of the text-boxes
    function clear() {
        $("#name").val("");
        $("#destination").val("");
        $("#train-time").val("");
        $("#frequency-min").val("");
    }

    //  Button for clearing the User-inputs
    $("#add-train").on("click", function () {
        clear();
    });


    // Create Firebase event for adding train details to the database and a row in the html when a user adds the train name
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().desti;
        var trainTime = childSnapshot.val().time;
        var trainFrequency = childSnapshot.val().freq;

        // Train Info
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFrequency);

        // variable is declared
        var tFrequency = childSnapshot.val().freq;

        // Time 
        var firstTime = childSnapshot.val().time;

        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        // Time apart (remainder) // 
        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);

        // Minute Until Train
        var tMinutesTillTrain = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("HH:mm: A");

        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

        // Create the new row
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDestination),
            $("<td>").text(tFrequency),
            $("<td>").text(moment(nextTrain).format("HH:mm")),
            $("<td>").text(tMinutesTillTrain));
        $("#train-table > tbody").append(newRow);

    });
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
