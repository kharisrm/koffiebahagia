document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");

  title.addEventListener("click", () => {
    title.querySelector("span").classList.toggle("animated");
  });

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const profile = document.querySelector(".profile");
  const main = document.getElementById("menu");
  const aboutLink = document.querySelector(".about-link");
  const closeAsideButton = document.querySelector(".close-aside");

  let asideVisible = false;

  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    asideVisible = !asideVisible;
    toggleAsideVisibility();
  });

  closeAsideButton.addEventListener("click", () => {
    asideVisible = false;
    toggleAsideVisibility();
  });

  window.addEventListener("scroll", () => {
    const mainBottom = main.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (window.innerWidth >= 576) {
      if (!asideVisible && mainBottom <= windowHeight) {
        profile.classList.add("show");
      } else if (!asideVisible) {
        profile.classList.remove("show");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 576) {
      asideVisible = false;
      toggleAsideVisibility();
    }
  });

  function toggleAsideVisibility() {
    if (asideVisible) {
      profile.classList.add("show");
    } else {
      profile.classList.remove("show");
    }
  }

  // Panggil fungsi toggleAsideVisibility() pada awalnya untuk menyembunyikan aside
  toggleAsideVisibility();
});
