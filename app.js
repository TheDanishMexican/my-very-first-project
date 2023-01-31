document.body.innerHTML += "";
//alert("Hej Asbjørn.js");
console.log("Hej Asbjørn.js");
console.log("Fungerer det faktisk.js");
console.log("Ja det gør det da");
function HelloDaniel() {
  document.querySelector("h3").textContent =
    "Great success " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", HelloDaniel);
document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("button").click();
  }
});
