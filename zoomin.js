const img = document.getElementById("zoomImg");
if (!img) return

img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
});
