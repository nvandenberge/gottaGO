$(document).ready(() => {
  const reviewForm = $("#reviewForm");
  reviewForm.on("submit", (event) => {
    event.preventDefault();
    // Validation to ensure zipCode length equals 5
    if ($("#inputZip").val().length !== 5) {
      console.log("zipLength ==", $("#inputZip").length)
      zipError();
    } else {
      $("#zipError").empty();
      // Creating array from all form input values to POST to DB
      const reviewData = $("#reviewForm")
      .serializeArray()
      .reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
      }, {});
      // console.log("reviewData===", reviewData);
      addReview(reviewData);
    }
  });

  function zipError() {
      $("#zipError").empty();
      $("#zipError").text("Zip code must be 5 numbers, please try again");
  }

  function addReview(reviewData) {
    $.post("/api/review", reviewData)
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
