const url = "https://api.seriesquotes.10cyrilc.me/quote/";
const quote = document.getElementById("quote");
const Name = document.getElementById("Name");
const next_quote = document.getElementById("new-quote");

function getQuote() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var series = String(data[0].series);
      Name.innerHTML = series.replace(/_/g, " ");
      quote.innerHTML = data[0].quote;
    });
}
getQuote();

// Next quote
next_quote.addEventListener("click", () => {
  getQuote();
  // Add animation in i to rotate on click
  next_quote.classList.add("rotate");
});
