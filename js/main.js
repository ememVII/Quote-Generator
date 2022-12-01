const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const btn = document.querySelector('.btn');

let quotes = [
    {
        quote:'Be yourself; everyone else is already taken.',
        author:'Oscar Wilde'
    },
    {
        quote:'Be the change that you wish to see in the world.',
        author:'Mahatma Gandhi'
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:'Robert Frost'
    },
    {
        quote:"A friend is someone who knows all about you and still loves you.",
        author:'Elbert Hubbard'
    },
    {
        quote:"It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author:'J.K. Rowling'
    },
    {
        quote:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author:'Bill Keane'
    }
];

function getQuote() {
    let num = Math.floor(Math.random() * quotes.length)
    quoteText.innerHTML = `“ ${quotes[num].quote} ”`;
    authorText.innerHTML = `- ${quotes[num].author}`;
}

btn.addEventListener('click', getQuote)