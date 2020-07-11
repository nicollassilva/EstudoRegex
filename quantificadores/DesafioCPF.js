const texto = `
    CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 265.139.016-43
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))