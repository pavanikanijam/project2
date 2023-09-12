
const quoteContainer = document.querySelector('.quote-container');

const newQuoteBtn = document.querySelector('#new-quote-btn');

const getQuote = async () => {
 
  const response = await fetch('https://type.fit/api/quotes');
  
  const data = await response.json();
  
  const randomQuote = data[Math.floor(Math.random() * data.length)];
  
  quoteContainer.innerHTML = `
    <p>${randomQuote.text}</p>
    <p>— ${randomQuote.author}</p>
  `;
};

newQuoteBtn.addEventListener('click', getQuote);

getQuote();
