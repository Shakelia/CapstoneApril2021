import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
// import {Placeholder for files from ./lib};

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer(st)}`;
  addEventListeners();
}

render(state.Home);

// menu toggle to hamburger

function addEventListeners() {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}
