const texto = `
    Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
`


console.log(texto.match(/\w+@\w+\.\w{2,4}\.?\w/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// no futuro...

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))