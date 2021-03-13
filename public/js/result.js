$(document).ready(() => {
    const refineBtn = $("#refineBtn");

    refineBtn.on("click", (e) => {
        const zipCode = $("#zipInput").val().trim();
        window.location.replace(`/results?zipCode=${zipCode}`);
    })
});
