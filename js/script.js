/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    citation: '',
    year: '',
    tag: 'Nah, I don\'t like this quote.'
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    source: 'Mark Twain',
    citation: '',
    year: '',
    tag: 'Whataver.'
  },
  {
    quote: 'I love the smell of napalm in the morning.',
    source: 'Lt. Col. Bill Kilgore',
    citation: 'Apocalypse Now',
    year: '1979',
    tag: 'Did not see the movie.'
  },
  {
    quote: 'Louis, I think this is the beginning of a beautiful friendship.',
    source: 'Rick Blaine',
    citation: 'Casablanca',
    year: '1942',
    tag: 'Did not see this movie either.'
  },
  {
    quote: 'Show me the money!',
    source: 'Rod Tidwell',
    citation: 'Jerry Maguire',
    year: '1996',
    tag: 'Yes, please!'
  }
];

/***
 * `color` arry
***/

const color =[
  '#d16b88',
  '#2121bf',
  '#e2df71',
  '#c6976d',
  '#61e59a',
]




/***
 * `getRandomQuote` function
***/
const getRandomQuote = quotes =>{
  let randomQuote = quotes[Math.floor( Math.random() * quotes.length)];
  return randomQuote;
}

/***
 * `getRandomColor` function
***/
const getRandomColor = color =>{
  let randomColor = color[Math.floor( Math.random() * color.length)];
  return randomColor;
}

/***
 * `printQuote` function
***/
const quoteContent = document.getElementById('quote-box');
const printQuote = () =>{
  const colorSelected = getRandomColor(color);
  document.body.style.backgroundColor = colorSelected;
  const quoteSelected = getRandomQuote(quotes);
  if(quoteSelected.citation == ""){
    quoteContent.innerHTML = `<p class="quote">${quoteSelected.quote}</p>
                              <p class="source">${quoteSelected.source}</p>
                              <p class="tag">${quoteSelected.tag}</p>`}else{
  quoteContent.innerHTML = `<p class="quote">${quoteSelected.quote}</p>
                              <p class="source">${quoteSelected.source}
                              <span class="citation">${quoteSelected.citation}</span>
                              <span class="year">${quoteSelected.year}</span>
                              </p>
                              <p class="tag">${quoteSelected.tag}</p>` 
}
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * automatically refresh 
***/

setInterval(printQuote, 3000);