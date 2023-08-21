const navButton = document.getElementById("nav-button");
const navIcon = document.getElementById("nav-icon");
const secondaryNav = document.getElementById("secondary-nav");
const notScroll = document.body;

navButton.addEventListener("click", () => {
  secondaryNav.classList.toggle("-translate-y-full");
  navIcon.classList.toggle("bx-x");

  if (secondaryNav.classList.contains("-translate-y-full")) {
    notScroll.style.overflow = "auto";
  } else {
    notScroll.style.overflow = "hidden";
  }
});
