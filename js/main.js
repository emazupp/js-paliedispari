// ! TRACCIA

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// ! SVOLGIMENTO

function convertToArray(word) {
  const arrayWord = [...word];
  return arrayWord;
}

function isPalindrome(word) {
  let palindrome = true;
  const wordArray = convertToArray(word);
  for (let i = 0; i < wordArray.length / 2 && palindrome; i++) {
    palindrome =
      wordArray[i] == wordArray[wordArray.length - 1 - i] ? true : false;
  }
  return palindrome;
}

const word = prompt("Inserisci una parola per controllare se palindroma:");
console.log(
  isPalindrome(word)
    ? `'La parola "${word}" è palindroma'`
    : `La parola "${word}" NON è palindroma`
);

// ! TRACCIA

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

// ! SVOLGIMENTO

function generateNumber1to5() {
  return Math.floor(Math.random() * 5) + 1;
}

function evenOdd(sum) {
  return sum % 2 ? "dispari" : "pari";
}

const userChoice = prompt(
  'Scegli "pari" oppure "dispari" digitandolo qui sotto'
);
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
const pcNumber = generateNumber1to5();
const sumNumbers = userNumber + pcNumber;

// ! OUTPUT

console.log(`Il tuo numero è: "${userNumber}"`);
console.log(`Il numero del computer è: "${pcNumber}"`);
console.log(evenOdd(sumNumbers) == userChoice ? "Hai vinto" : "Hai perso");
