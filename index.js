const arrayOfQuotes = [

    {
        'author': 'Stephen Chbosky',
        'quote': 'Even if we do not have the power to choose where we come from we can still choose where we go from there '
    },
    {
        'author': 'Oscar Wilde',
        'quote': ' Life is never fair and perhaps it is a good thing for most of us that it is not'
    },
    {
        'author': 'Dr. Seuss',
        'quote': 'Do not cry because it s over.Smile because it happened '
    },
    {
        'author': 'Paula Coelho',
        'quote': 'Straight roads do not make skillful drivers.'
    },
    {
        'author': 'Francine Rivers',
        'quote': 'Have faith, have faith. When you have nothing else have faith'
    },
    {
        'author': 'Ernest Agyemang Yeboah',
        'quote': 'Keep calm when things don’t go according to your expectations! Beautiful things always meet friction!'
    },
    {
        'author': '​Oscar Wilde',
        'quote': 'It takes a great deal of courage to see the world in all its tainted glory, and still love i'
    },
    {
        'author': '​J.R.R. Tolkien',
        'quote': 'All that is gold does not glitter, not all those who wander are lost; the old that is strong. Does not wither, deep roots are not reached by the frost'
    },
    {
        'author': 'Johann Wolfgang von Goethe',
        'quote': 'Everything is hard before it is easy.'
    },
    {
        'author': 'Henry David Thoreau',
        'quote': 'Never look back unless you are planning to go that way.'
    },
    {
        'author': '​Robert Ingersoll',
        'quote': 'We rise by lifting others.'
    },
];

function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}-`;

};