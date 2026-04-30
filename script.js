const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navClose = document.getElementById("navClose");
const mobileOverlay = document.getElementById("mobileOverlay");

function openMenu() {
  mainNav.classList.add("active");
  mobileOverlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mainNav.classList.remove("active");
  mobileOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-dropdown-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const currentDropdown = button.closest(".nav-dropdown");

    document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        dropdown.classList.remove("open");
      }
    });

    currentDropdown.classList.toggle("open");
  });
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  let closeTimer;

dropdown.addEventListener("mouseenter", () => {
  if (window.innerWidth <= 768) return; // ❌ disable on mobile

  clearTimeout(closeTimer);
  dropdown.classList.add("open");
});

dropdown.addEventListener("mouseleave", () => {
  if (window.innerWidth <= 768) return; // ❌ disable on mobile

  closeTimer = setTimeout(() => {
    dropdown.classList.remove("open");
  }, 180);
  });
});