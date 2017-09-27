var tFrequency = 3;
    // Time is 3:30 AM
    var firstTime = "03:30";
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


var config = {
    apiKey: "AIzaSyC4propTX72dgtt8RZ8N1qUmrW1zgllraM",
    authDomain: "train-e6973.firebaseapp.com",
    databaseURL: "https://train-e6973.firebaseio.com",
    projectId: "train-e6973",
    storageBucket: "train-e6973.appspot.com",
    messagingSenderId: "30033833736"
  };
  firebase.initializeApp(config);
/* need to get the firebase to record the data. then update the table to have the new train, the logic needs to be able tocalulate when the trains will arrive
