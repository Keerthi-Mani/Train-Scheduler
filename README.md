![image](https://user-images.githubusercontent.com/52920074/67153499-95a47c80-f2b8-11e9-92a9-02e1c50d9153.png)

## Overview

The objective was to create a train schedule application that incorporates Firebase to host arrival and departure data. My app retrieves and manipulates the data with Moment.js. This website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

## Requirements

### App must suit these basic specs:

When adding trains, administrators should be able to submit the following:

- Train Name
- Destination
- First Train Time -- in military time
- Frequency -- in minutes
- Calculate when the next train will arrive; relative to the current time.
- Users from many different machines must be able to view same train times.

## Firebase Configuration

```
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
```

## Added Functionality

Form Validation for correct time input

## Link

[Train-Scheduler](https://keerthi-mani.github.io/Train-Scheduler/)

## Screenshots

![image](https://user-images.githubusercontent.com/52920074/67153509-c5ec1b00-f2b8-11e9-8c2e-e53bdb62039c.png)

![image](https://user-images.githubusercontent.com/52920074/67153537-1bc0c300-f2b9-11e9-8140-999467f70e20.png)

## Feedback and issues:

I really appreciate your feedback.

Additionally, if you find any issue when running the app or any other other matter, please feel free to open an issue in this Github repo.

## Author

<em>Keerthi</em> - 2019
