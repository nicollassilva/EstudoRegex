const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')

// Métodos do RegExp...
console.log(regexNove.test()) // true ou false \\ -> true
console.log(regexNove.exec()) // index, input \\

const regexLetras = /[a-f]/g

// Métodos da string...

console.log(texto.match(regexLetras)); // index,input ou array
console.log(texto.search(regexLetras)) // retorna indice do 1° elemento
console.log(texto.replace(regexLetras, 'Achei')) // substitui toda a regex pelo texto
console.log(texto.split(regexLetras)) // faz split no texto através do regex