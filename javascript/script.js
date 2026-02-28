// Elements
var button = document.querySelector("button");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

// Variables
var Quotes = [
    {
        quote:"بعض القصص يجب أن تُروى لتكتمل",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"حينما يكتشف الإنسان أنه يطارد وهماً بدلاً من حلم،سيكفُّ بكاءه عليه،ويبكي خيبته عوضاً عن ذلك.",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"يملك المحبون عيون سحرية يخفون فيها صورة احبائهم لتتسني لهم رؤيتهم حين يغيبون عن انظارهم",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"والحقيقة الوحيدة فى تلك الحياة هى الموت.
حتى لا تُهلكك أفكارك، حتى تنجو أو ينجو ما تبقى منك ،الدنيا ليست دار عدل، لا تبحث عنه هنا ، لا حقائق ،لا ثوابت، لا تفكر أكثر من اللازم أو تنتظر أن ينتصر الحق أو الصواب ، لا كل صواب جائز ولا كل مظلوم منتصر ، حينما يؤلمك قلبك يمكنك الإنسحاب أحيانا أن تنجو بنفسك أكبر تضحية.",
        author: "Sara Abd Elhameed"
    },
    {
        quote:"أبناء الحرام ليسوا من وُلدوا بأنساب مجهولة لا حول لهم ولا قوة..
بل من يرتكبون الحرام أو يبتلعونه في بطونهم 
من يفترون على الضعفاء بلا ذنب، محاولين إشعارهم بخزي لا يستحقونه",
        author: "Sara Abd Elhameed"
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

