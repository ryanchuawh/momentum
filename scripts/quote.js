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