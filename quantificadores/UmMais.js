const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi
console.log(texto1.match(regex)) // [fogo, FOGO]
console.log(texto2.match(regex)) // [fog]

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/\d+/g)) // /[0-9]+/g