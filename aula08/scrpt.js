

/* colocar entro da tag ID 
 onclick='clicar()' onmouseenter='entrar()' onmouseout='sair()'



function clicar() {
  let a1 = document.getElementById("area");
  a1.innerText = "Clicou mudou!";
  a1.style.background='blue'
}

function entrar() {
  let a2 = document.getElementById("area");
  a2.innerText = "Entrou gostoso!";
}

function sair() {
  let a3 = document.getElementById("area");
  a3.innerText = "Saiu rasgando!";
  a3.style.background='#8a2be2'
}

/*a1.addEventListener('click',clicar)
a2.addEventListener('mouseenter',entrar)
a3.addEventListener('mouseout',sair)*/
