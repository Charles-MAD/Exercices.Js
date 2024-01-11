// Ecrivons une boucle qui demande un nombre supérieur à 100.
'use strict';
let number;
let test = true;

do {
  let number = +prompt("Entrez un nombre supérieur à 100", 1);
  if (number <= 100) {
    test = true;
  } else {
    test = false;
  }
} while(test);