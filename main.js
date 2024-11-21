let btn = document.getElementById('btn');
let output= document.getElementById('output');
let quote=["","Resentment is like drinking poison and waiting for your enemies to die.--Nelson Mandela",
    "You miss 100% of the shots you don't take.--Wayne Gretzy",
    "It's not what happens to you, but how you react to it that matters.--Epictetus",
    "The best revenge is massive success.--Frank Sinatra"
]
btn.addEventListener('click', function(){
    let randomQuote= quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML=randomQuote;
})