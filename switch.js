'use strict';
// let a = 2 + 2;
// example of use case of "switch" declaration

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

// Example the code with switch

// let a = 2 + 2;

// switch (a) {
//     case 3: 
//         console.log('Too small');
//     case 4:
//         console.log('Exactly');
//     case 5:
//         console.log('Too big');
//     default:
//         console.log("I don't know such values");
// }

// Having an expression, it can be a switch/case argument
// let a = "1";
// let b = 0;

// switch(+a) {
//     case b + 1:
//         console.log("this runs, because +a is 1, exactly equals b+1");
//         break;
//     default:
//         console.log("this doesn't run");
// }

// If we have several boxes that share the same code, we can group them.

let a = 2 + 2;

switch(a) {
    case 4:
        console.log('Rigth!');
        break;

    case 3: // grouping of two cases
    case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

    default:
        console.log('The result is strange. Really!');
}
