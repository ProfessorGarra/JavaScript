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
    // let tn2=document.querySelector('input#txtn2');
    let res=document.getElementById('res');
    let n1=String(tn1.value);
    // let n2=Number(tn2.value);
    // let soma= n1;
    res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `
    
}

// if(n1==myBook){document.write(myBook);}else(res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `);