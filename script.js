let dropdownIsDisplayed = false;
document
  .getElementsByClassName("hamburger")[0]
  .addEventListener("click", () => {
    document.getElementsByClassName("hamburger")[0].classList.toggle("active");
    // dropdownIsDisplayed = !dropdownIsDisplayed;
    // document.querySelector(".header__dropdown").style.display =
    //   dropdownIsDisplayed ? "block" : "none";
    document.querySelector(".header__dropdown").classList.toggle("display");
    document.querySelector(".header__dropdown").classList.toggle("hide");
  });

document.querySelector(".search-close-icon").addEventListener("click", (e) => {
  document.querySelector(".search-bar-overlay").classList.toggle("hide");
});

document
  .querySelector(".header__search-icon")
  .addEventListener("click", (e) => {
    document.querySelector(".search-bar-overlay").classList.toggle("hide");
  });
