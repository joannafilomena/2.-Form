const tableElements = document.querySelector(".table__elements");
const button = document.querySelector(".button__save");
const title = document.querySelector(".input__title");
const author = document.querySelector(".input__author");
const priority = document.querySelector(".input__priority");

button.addEventListener("click", (event) => {
    event.preventDefault ();
    console.log(title);
    console.log(author);
    console.log(priority);
})