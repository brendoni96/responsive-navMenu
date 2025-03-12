// const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const hamburger = document.querySelector(".hamburger");
const scrollTopButton = document.querySelector(".scrollTop");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// For button 
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.opacity = "1";
        scrollTopButton.style.visibility = "visible";
    } else {
        scrollTopButton.style.opacity = "0";
        scrollTopButton.style.visibility = "hidden";
    }
});
