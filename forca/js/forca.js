
// database de palavras
var programming_languages = [
  "c",
  "python",
	"javascript",
	"hybris",
  "java",
  "abap",
	"html",
  "css",
  "portugol",
	"csharp",
	"php",
  "shell",
  "pascal",
  "cobol",
  "react",
  "ajax",
	"ruby"  
]


//resposta aberto
let answer = '';
// contador de chances
let maxWrong = 6;
// registro de erros
let contadordeerros = 0;
let guessed = [];
let wordStatus = null;

// calc
function palavrarandom() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

// teclado
function botoesgerar() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letras =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letras + `'
        onClick="funcaozinha('` + letras + `')"      >
        ` + letras + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}











function funcaozinha(escolhaletras) {

  guessed.indexOf(escolhaletras) === -1 ? guessed.push(escolhaletras) : null;

  document.getElementById(escolhaletras).setAttribute('disabled', true);










  if (answer.indexOf(escolhaletras) >= 0) {
    chute();
    verificarvencedor();
  } else if (answer.indexOf(escolhaletras) === -1) {
    contadordeerros++;
    atualizadorerros();
    verificadorperdedor();
    atualizadorboneco();
  }
}






function atualizadorboneco() {
  document.getElementById('hangmanPic').src = './images/' + contadordeerros + '.jpg';
}







function verificarvencedor() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Voce ganhou!';
  }
}





function verificadorperdedor() {
  if (contadordeerros === maxWrong) {
    document.getElementById('localpalavra').innerHTML = 'A resposta era: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Voce perdeu!';
  }
}





function chute() {
  wordStatus = answer.split('').map(letras => (guessed.indexOf(letras) >= 0 ? letras : " _ ")).join('');

  document.getElementById('localpalavra').innerHTML = wordStatus;
}







function atualizadorerros() {
  document.getElementById('contadordeerros').innerHTML = contadordeerros;
}








function reset() {
  contadordeerros = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  palavrarandom();
  chute();
  atualizadorerros();
  botoesgerar();
}















document.getElementById('maxWrong').innerHTML = maxWrong;

palavrarandom();
botoesgerar();
chute();
