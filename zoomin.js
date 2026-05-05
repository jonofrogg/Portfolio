const img = document.getElementById("zoomImg");
if (!img) return

if (img.dataset.zoomBound) return;
img.dataset.zoomBound = "true";

img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
});

window.addEventListener("load", init);
window.addEventListener("pageshow", init);