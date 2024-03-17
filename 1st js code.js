const colorchange = document.querySelector(".fruits li:nth-child(5)")
colorchange.style.color ="blue";

const stylechange = document.querySelectorAll(".fruits li")
stylechange.forEach(function(item) {
  item.style.fontStyle = "italic";
});