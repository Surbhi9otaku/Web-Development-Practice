const quotes = [
  "Stay hungry, stay foolish.",
  "Eat. Code. Sleep. Repeat.",
  "Growth begins where comfort ends.",
  "You are stronger than you think.",
  "Discipline will take you where motivation can’t.",
  "Build. Break. Fix. Learn.",
  "Consistency creates results.",
  "Dream big. Start small.",
  "Code never lies.",
  "Small steps every day matter."
];

const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const themeSelector = document.getElementById("themeSelector");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener("click", generateQuote);

themeSelector.addEventListener("change", function () {
  document.body.className = themeSelector.value;
});

generateQuote();
