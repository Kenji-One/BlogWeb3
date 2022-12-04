function openUpPopUp(popup) {
  document.getElementById(popup).classList.add("active");
}

function closePopUp(popup) {
  document.getElementById(popup).classList.remove("active");
}

const addActive = (el) => el.classList.toggle("active");
const hideEl = (el) => el.classList.remove("show");
