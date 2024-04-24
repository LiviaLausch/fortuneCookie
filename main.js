const cookie = document.querySelector("#cookie")
const fortuneCookie = document.querySelector(".fortune")
const home = document.querySelector('.home')
const button = document.querySelector('.button')
const fraseInicial = document.querySelector('.frase')

var frases = [
   "A vida trará grandes desafios, e os obstáculos são apenas oportunidades para crescermos.",
   "Acredite em milagres, mas não dependa deles.",
   "O segredo para viver bem e por mais tempo é: comer a metade, andar o dobro e rir o triplo.",
   "Sua sorte está no próximo clique!",
   "A persistência é o caminho do êxito.",
   "Grandes poderes trazem grandes responsabilidades.",
   "O sucesso é a soma de pequenos esforços repetidos dia após dia."
];

function openCookie() {
   home.classList.toggle('hide')
   fortuneCookie.classList.toggle('hide')

   var indice = Math.floor(Math.random() * frases.length);
   fraseInicial.textContent = frases[indice];
}

function returnCookie() {
   home.classList.toggle('hide')
   fortuneCookie.classList.toggle('hide')
}

cookie.addEventListener('click', openCookie )
button.addEventListener('click', returnCookie )
