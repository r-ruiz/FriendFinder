var path = require("path");

function htmlRoutes(app) {

  // A GET Route to /survey
  // =============================================================
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // A default route that leads to home.html
  // =============================================================
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

}

// Export for use in main server.js file
// =============================================================
module.exports = htmlRoutes;