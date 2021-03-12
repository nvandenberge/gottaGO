$(document).ready(() => {
    const refineBtn = $("#refineBtn");

    refineBtn.on("click", (e) => {
        const zipCode = $("#zipInput").val().trim();
        console.log('hello')
        window.location.href = `/results?zipCode=${zipCode}`
    })
});
