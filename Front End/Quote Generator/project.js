// variables

let btn = document.getElementById('new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
   { quote:"someone said something here",
    person:"random man"},
    { quote:"someone said something here too",
    person:"random man"},
    { quote:"someone said something here too too",
    person:"random boi"},
    { quote:"someone said something here I've heard",
    person:"random woman"},
    { quote:"someone said something here, I guess.",
    person:"random guy"},
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})