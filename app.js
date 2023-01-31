document.body.innerHTML += "";
//alert("Hej Asbjørn.js");
console.log("Hej Asbjørn.js");
console.log("Fungerer det faktisk.js");
console.log("Ja det gør det da");
function ShowInfo() {
  document.querySelector("h3").textContent =
    "Great success " +
    document.querySelector("#name").value +
    " and your age is " +
    document.querySelector("#age").value +
    " and your email is " +
    document.querySelector("#email").value;
}
document.querySelector("button").addEventListener("click", ShowInfo);
