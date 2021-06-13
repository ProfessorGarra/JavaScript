let myBook= {
    autor: " Garra ",
    pagina: 250 ,
    editora: ' Seekers ',
    titulo:' Legado sombrio ',
}
class aulas{
    constructor(curso, modalidade, professor, turma, alunos ){
        this.curso=curso;
        this.modalidade=modalidade;
        this.professor=professor;
        this.turma=turma;
        this.alunos=alunos;
    }
}
let aula1=new aulas('matemática' , 'EAD' , 'Garra' , 'Cálculo' , 53 );
let aula2=new aulas('português' , 'Presencial' , 'Gramática' , 50 );
let aula3=new aulas('Física' , 'EAD' , 'Wands' , 'Termologia' , 49 );
let aula4=new aulas('Filosofia' , 'presencial' , 'Paulo' , 'Metafísica' , 47);
// let bookTitulo = document.write(myBook.titulo);
// let bookAutor = document.write(myBook.autor);
// let bookPagina = document.write(myBook.pagina);
// let bookEditora = document.write(myBook.editora);

// function pesquisar() {
//     let tn1=document.querySelector('input#txt');
//     let n1=String(tn1.value);
//     let res=document.getElementById('res');
    
    
//     res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `
    
// }



function pesquisar() {
    let tn1=document.querySelector("input#txt");
    let n1=String(tn1.value);
    let res = document.getElementById("res");

    if(n1==myBook){document.write(console.log.myBook);}else(res.innerHTML = `O nome que você pesquisou é  ${n1} e o resultado  não foi localizado `);
}

// if (n1==autor) {
    //   document.write(myBook.autor);

// if (n1==pagina) {
//   document.write(myBook.pagina);
// }
// if (n1==editora) {
//   document.write(myBook.editora);
// }
// if (n1==titulo) {
//   document.write(myBook.titulo);
// } 