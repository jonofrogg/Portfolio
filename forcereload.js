window.addEventListener("pageshow", function (event) {
    if (Event.persisted) {
        window.location.reload();
    }
});