$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });

  $("#rateBtn").on("click", function() {
    console.log("DIARHHEA");
    window.location.replace("/review");
  });

  $("#findBtn").on("click", function() {
    console.log("DIARHHEA");
    window.location.replace("/results");
  });
});
