// Elements
var button = document.querySelector("button");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

// Variables
var Quotes = [
    {
        quote:"The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote:"In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote:"The best way to predict the future is to invent it.",
        author: "Alan Kay"
    }
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
