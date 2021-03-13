$(document).ready(() => {
  // Getting references to our form and inputs
  // When the form is submitted, we validate there's an email and password entered
  const reviewForm = $("#reviewForm");
  reviewForm.on("submit", (event) => {
    event.preventDefault();
    const reviewData = $("#reviewForm")
      .serializeArray()
      .reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
      }, {});

    console.log("reviewData===", reviewData);
    addReview(reviewData);
  });

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
