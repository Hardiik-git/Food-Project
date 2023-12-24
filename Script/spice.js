let navresponsBtn = document.querySelector(".Res-Button");
let navBtnClick = "none";

navresponsBtn.addEventListener("click", () => {
  if (navBtnClick === "none") {
    navBtnClick = "block";
    document.querySelector(".nav_items").style.display = "flex";
  } else {
    navBtnClick = "none";
    document.querySelector(".nav_items").style.display = "none";
  }
});
