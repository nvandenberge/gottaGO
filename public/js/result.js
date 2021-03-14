$(document).ready(() => {
    const refineBtn = $("#refineBtn");
    // const resultCard = $(".resultCard")

    refineBtn.on("click", (e) => {
        const zipCode = $("#zipInput").val().trim();
        window.location.replace(`/results?zipCode=${zipCode}`);
    })

    // $(".resultCard").hide().show("slide", { direction: "left" }, 1500);

});
