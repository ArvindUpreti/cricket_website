const BarshBtn = document.getElementById("bars_icon");
const BarsIcon = BarshBtn.querySelector("i");

BarshBtn.addEventListener("click", () => {
  BarsIcon.classList.toggle("fa-bars");
  BarsIcon.classList.toggle("fa-xmark");
});
