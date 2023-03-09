"use strict";

window.addEventListener("load", start);

function start() {
  addClick();
}

function addClick() {
  console.log("button can be clicked");
  let button = document.querySelector("#knap");
  button.addEventListener("mousedown", showInfo);
}

function showInfo() {
  console.log("button was clicked");
  let ageValue = document.querySelector("#age").value;
  let emailValue = document.querySelector("#email").value;
  let nameValue = document.querySelector("#name").value;

  document.querySelector(
    "h3"
  ).textContent = `Hej ${nameValue}, din alder er ${ageValue} og din email er ${emailValue}`;
}
