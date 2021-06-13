let myBook= {
    autor: " Garra ",
    pagina: 250 ,
    editora: ' Seekers ',
    titulo:' Legado sombrio ',
}
let bookTitulo = document.write(myBook.titulo);
let bookAutor = document.write(myBook.autor);
let bookPagina = document.write(myBook.pagina);
let bookEditora = document.write(myBook.editora);

function pesquisar() {
    let tn1=document.querySelector('input#txt');
    let n1=String(tn1.value);
    let res=document.getElementById('res');
    
    
    res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `
    
}


if(n1==myBook){document.write();}else(res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `);
if (n1 == autor) {
  document.write(myBook.autor);
}
if (n1 == pagina) {
  document.write(myBook.pagina);
}
if (n1 == editora) {
  document.write(myBook.editora);
}
if (n1 == titulo) {
  document.write(myBook.titulo);
} else {
  res.innerHTML(
    `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `
  );
}
function pesquisar() {
    let tn1=document.querySelector("input#txt");
    let n1=String(tn1.value);
    let res = document.getElementById("res");

  res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `
}