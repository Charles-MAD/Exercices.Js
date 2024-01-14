'use strict';
// let a = 2 + 2;
// // exemple de cas d'utilisation de la declaration "switch"

// switch (a) {
//     case 'value1': // si (a === 'value1')
//     ...
//     [break]

//     case 'value2': // si (a === 'value2')
//     ...
//     break

//     default: 
//     ...
//     [break]
// }

// Exemple de code avec switch

let a = 2 + 2;

switch (a) {
    case 3: 
        console.log('Too small');
    case 4:
        console.log('Exactly');
    case 5:
        console.log('Too big');
    default:
        console.log("I don't know such values");
}