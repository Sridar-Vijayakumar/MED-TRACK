const express = require('express');
const mongose = require('mongoose');

const app = express();
port = 5000;
app.use(express.json());

mongose.connect("mongodb://localhost:27017/MedTrack")
.then(() => {
    console.log("Connected To Mongodb");
    app.listen(port, () => {
        console.log("Server is running on port " + port);
    });
})
.catch((err) => {
    console.log(err);
});


