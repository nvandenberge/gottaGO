// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the welcome page
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the welcome page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    if (!req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });
  app.get("/review", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/review.html"));
  });
  app.get("/results", async (req, res) => {
    if (!req.user) {
      res.redirect("/login");
    }
    let zipCode;
    req.query.zipCode === undefined ? zipCode = ' ' : zipCode = req.query.zipCode;
    // console.log("req.params ==", req.params);
    console.log("zipCode ===", zipCode);
    const reviewData = await db.Review.findAll({
      where: { zipCode: zipCode || "" },
    });
    // console.log('reviewData ===', reviewData)
    res.render("index", {
      reviewData: reviewData.map((review) => review.dataValues),
    });
  });
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
