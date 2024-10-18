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
  for (let i = 0; i < word.length && palindrome; i++) {
    word[i] == word[word.length - 1 - i];
    console.log("word[i]: " + word[i]);
    console.log("word[word.length - 1 - i]: " + word[word.length - 1 - i]);
  }
}

const word = "anna";
let wordConverted = convertToArray(word);
isPalindrome(wordConverted);

// ! TRACCIA

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

// ! SVOLGIMENTO
