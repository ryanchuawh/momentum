var quote = [
    'When something is important enough, you do it even if the odds are not in your favor. <br> -Elon Musk',
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <br> -Thomas A. Edison', 
    'It always seems impossible until it\'s done. <br> -Nelson Mandela', 
    'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. <br> -Helen Keller', 
    'With the new day comes new strength and new thoughts. <br> -Eleanor Roosevelt', 
    'If you can dream it, you can do it. <br> -Walt Disney', 
    'A good plan violently executed now is better than a perfect plan executed next week. <br> -George S. Patton',
    'Quality is not an act, it is a habit. Aristotle The secret of getting ahead is getting started. <br> -Mark Twain',
    'To begin, begin. <br> -William Wordsworth'
];

var today = new Date();
var day = Math.floor(today/8.64e7);
document.getElementById('quotes').innerHTML = quote[day%9];

var quoteLife = [
    'Life isn\'t about finding yourself. Life is about creating yourself. <br> -George Bernard Shaw', 
    'Life is really simple, but we insist on making it complicated. <br> -Confucius', 
    'We do not remember days, we remember moments. <br> -Cesare Pavese', 
    'The truth is you don\'t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed. <br> -Eminem',
    'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. <br> -Marie Curie', 
    'He who has a why to live can bear almost any how. - Friedrich Nietzsche',
    'Life is a series of natural and spontaneous changes. Don\'t resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. <br> -Lao Tzu', 
    'Into each life some rain must fall. <br> -Henry Wadsworth', 
    'Longfellow Give me the luxuries of life and I will willingly do without the necessities. <br> -Frank Lloyd Wright', 
    'The aim of life is to live, and to live means to be aware, joyously, drunkenly, serenely, divinely aware. <br> -Henry Miller', 
    'Don\'t go through life, grow through life. <br> -Eric Butterworth', 
    'The most important thing is to enjoy your life - to be happy - it\'s all that matters. -Audrey Hepburn'
];

var quoteSuccess = [
    'Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it. <br> -Bruce Lee', 
    'Strive not to be a success, but rather to be of value. <br> -Albert Einstein', 
    'Success is the sum of small efforts - repeated day in and day out. <br> -Robert Collier', 
    'The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand. <br> -Vince Lombardi',
    'All you need in this life is ignorance and confidence, and then success is sure. <br> -Mark Twain', 
    'Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming. <br> -John Wooden', 
    'Success is a lousy teacher. It seduces smart people into thinking they can\'t lose. <br> -Bill Gates', 
    'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. <br> -Booker T. Washington', 
    'Man needs his difficulties because they are necessary to enjoy success. <br> -A. P. J. Abdul Kalam', 
    'One fails forward toward success. <br> -Charles Kettering',
    'Formal education will make you a living; self-education will make you a fortune. <br> -Jim Rohn',
    'Desire is the key to motivation, but it\'s determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek. <br> -Mario Andretti'
]

var cycle = 0;
var quoteArray = [quote, quoteLife, quoteSuccess];

var changeQuote = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', function changeQuote()
{
    cycle = (cycle+1)%quoteArray.length;
    document.getElementById('quotes').innerHTML = quoteArray[cycle][day%quoteArray[cycle].length];
});



