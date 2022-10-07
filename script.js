let quote = document.getElementById("quote");
let author = document.getElementById("author");
const fade = document.querySelector(".fade-in");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url).then((data) => data.json()).then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};
window.addEventListener('load', getQuote);


setInterval(getQuote, 10000);