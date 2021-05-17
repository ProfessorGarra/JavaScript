let n1 = Number(prompt(
    "digite um número x")) // prompt sempre retorna uma string , mesmo que digite um número. Iremos converter o prompt para number usando Number.parseInt
let n2 = Number(prompt("digite outro número y diferente de x"))
let s = n1 + n2
alert(`A adição de ${n1} e ${n2} é igual a ${s}`)
//+ concatena e adiciona.
// para adicionar precisamos number + number.
// para concatenar precisamos de string + string.
//Number.parseInt()  é usado para números inteiros.
////Number.parseFloat()  é usado para números reais.
//number() é usado para qualquer número.
document.write(`Veja que ${Number.parseInt(s/3)} é quociente da terça parte da soma de x com y `)