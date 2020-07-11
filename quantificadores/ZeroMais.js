const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto = 'There is a big fog in NYC'

// * -> zero ou mais

const regex = /fogo*/gi
console.log(texto1.match(regex)) // [fogo, FOGO]
console.log(texto2.match(regex)) // [fog]