// Rewrite "switch" in an "if"

// Code with "if"

let a = +prompt('a?', '');

if (a == 0) {
    alert(a == 0);
}
if (a == 1) {
    alert( 1 );
}
if (a == 2 || a == 3) {
   alert( '2,3' );
}

// Code with "switch"

switch (a) {
    case 0:
        alert( a == 0);
        break;
    case 1:
        alert( 1 )
    case 2:
    case 3:
        alert( '2,3' );
        break;
}