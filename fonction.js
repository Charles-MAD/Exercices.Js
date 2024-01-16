'use stricct';

// Utilisation des fonctions en javaScript

function checkAge(age) { // arguments : age
      if (age < 18) {
        return alert("Tu es encore un mineur!");
      } else {
        // ...
        return confirm('Tu es deja un majeur!');
      }
}

checkAge(12); // age = 20
