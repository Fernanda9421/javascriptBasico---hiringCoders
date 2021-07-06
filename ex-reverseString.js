// reverse a string => Hello Gama Academy

let newStr = '';
function reverseAString (str) {
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
        //console.log(newStr); // retorna toda iteração, uma a uma.
    }
    console.log(newStr); // retorna apenas a frase final - ymedacA amaG olleH
}

let resultado = reverseAString('Hello Gama Academy');