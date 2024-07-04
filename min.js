let card = document.querySelector(".container");
let account = document.querySelector("#account");
let closes = document.querySelector("#close");
// let car = document.querySelector(".containe");
// let close = document.querySelector("#close");

function openAccount() {
  card.classList.add("open-account");
}
function closeAccount() {
  card.classList.remove("open-account");
}
// clos.addEventListener("click", closeAccount);
closes.addEventListener("click", closeAccount);
account.addEventListener("click", openAccount);
