// Elements
var button = document.querySelector("button");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

// Variables
var Quotes = [
    {
        quote:"بعض القصص يجب أن تُروى لتكتمل.",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"حينما يكتشف الإنسان أنه يطارد وهماً بدلاً من حلم،سيكفُّ بكاءه عليه،ويبكي خيبته عوضاً عن ذلك.",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"أنتَ لا تعي معنى أن تظلّ عالقًا في شعورِ حدِّ الخوف من أن تعيشه مجددًا، فيُكتَب عليك محاربةُ ماضيك المخيف عوضًا عن تجاوزه.",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"تكبر أحلامنا معنا… حتى نكبر، فنكتشف أننا صغرنا أمامها.",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"الإنسانُ مُخَيَّرٌ في اختيارِ طريقِهِ لِما سُيِّرَ إليه.",
        author: "Sara Abd Elhameed"
    },
    
]

// Event Listeners
button.addEventListener("click", function(){

    function getRandomObjectFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
    }

    const randomObject = getRandomObjectFromArray(Quotes);
    quote.textContent = randomObject.quote;
    author.textContent = "- " + randomObject.author;

    changeButtonColor();

});
// Functions
function changeButtonColor(){
    button.style.backgroundColor = "green";
    setTimeout(function() {
    button.style.backgroundColor = "blue";
  }, 250);

}


