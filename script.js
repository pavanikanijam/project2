// Get a reference to the quote container element
const quoteContainer = document.querySelector('.quote-container');
// Get a reference to the new quote button
const newQuoteBtn = document.querySelector('#new-quote-btn');
// Create a function to fetch a random quote from the API
const getQuote = async () => {
  // Make a request to the API
  const response = await fetch('https://type.fit/api/quotes');
  // Parse the response as JSON
  const data = await response.json();
  // Get a random quote from the data
  const randomQuote = data[Math.floor(Math.random() * data.length)];
  // Update the HTML with the random quote
  quoteContainer.innerHTML = `
    <p>${randomQuote.text}</p>
    <p>— ${randomQuote.author}</p>
  `;
};
// Add an event listener to the new quote button
newQuoteBtn.addEventListener('click', getQuote);
// Get a random quote on page load
getQuote();
