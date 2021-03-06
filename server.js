// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Sets up static route to public folder
// =============================================================
app.use(express.static(path.join(__dirname, "./public")));

// Sets up routes for application
// =============================================================
var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");

apiRoutes(app);
htmlRoutes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  