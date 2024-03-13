const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
// const { dirname } = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  const query = req.body.cityName;
  const apiKey = "58b5f4d524e77a47b9f85f0d3ac76a19";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    // console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //   console.log(weatheData);
      const weatherDescp = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(
        "<h1>The temprature in " + query + " is " + temp + " degree Celcius.</h1>"
      );

      res.write("<p>The weather is currently " + weatherDescp + "</p>");

      res.write("<img src = " + imageUrl + ">");
      res.send();
    });
  });
})



app.listen(3000, () => {
  console.log("server is running on port 3000");
});
