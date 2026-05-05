const img = document.getElementById("zoomImg");
const overlay = document.getElementById("overlay");

function toggleZoom(){
    img.classList.toggle("zoomed");
    overlay.classList.toggle("active");
}

img.addEventListener("click", toggleZoom);
overlay.addEventListener("click, toggleZoom");