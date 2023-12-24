let navresponsBtn = document.querySelector(".Res-Button");
let navBtnClick = "none";

navresponsBtn.addEventListener("click", () => {
  if (navBtnClick === "none") {
    navBtnClick = "block";
    document.querySelector(".nav_items").style.display = "flex";
    document.querySelector(".nav_items").style.maxWidth = "992px";
  } else {
    navBtnClick = "none";
    document.querySelector(".nav_items").style.display = "none";
    document.querySelector(".nav_items").style.maxWidth = "992px";
  }
});
