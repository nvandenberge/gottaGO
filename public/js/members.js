$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // $.get("/api/user", data).then((data) => {
  //   $(".member-name").text(data.email);
  //   console.log(data.email);
  // });

  $("#rateBtn").on("click", function() {
    window.location.replace("/review");
  });

  $("#findBtn").on("click", function() {
    window.location.replace("/results");
  });

  $("#accountBtn").on("click", function() {
    console.log("myAccountBtn clicked!");
    window.location.replace("/account");
  });
});
