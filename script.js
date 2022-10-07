let quote = document.getElementById("quote");
let author = document.getElementById("author");
const fades = document.querySelectorAll(".fade");

const url = "https://api.quotable.io/random";

const fadeIn = () => {
  [...fades].forEach((fade) => {
    fade.style.opacity = `1`;
    fade.style.transition = `all 2.5s ease`;
  });
};

const fadeOut = () => {
  [...fades].forEach((fade) => {
    fade.style.opacity = `0`;
    fade.style.transition = `all 2.5s ease`;
  });
};

let getQuote = () => {
    fetch(url).then((data) => data.json()).then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
        fadeIn();
        setTimeout(fadeOut, 7500);
    });
};
window.addEventListener('load', getQuote);


setInterval(getQuote, 10000);
