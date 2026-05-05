const btn = document.getElementById("backToTop");

// Show/hide button on scroll
//window.addEventListener("scroll", () => {
  //if (document.documentElement.scrollTop > 100) {
    //btn.style.display = "block";
  //} else {
    //btn.style.display = "none";
  //}
//});

// Scroll to top when clicked
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});