// Scroll spy for nav
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if(section.offsetTop <= scrollPos + 100 && section.offsetTop + section.offsetHeight > scrollPos + 100){
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Toggle project/lab details
const toggleButtons = document.querySelectorAll(".toggle-btn");
toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const isVisible = window.getComputedStyle(content).display !== "none";

    content.style.display = isVisible ? "none" : "block";
    btn.textContent = isVisible ? "Show Details" : "Hide Details";
  });
});

// Project filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    projects.forEach(project => {
      if(filter === "all" || project.dataset.category === filter){
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
