let dataCompleta;
let horaAtual;
dataCompleta=new Date();
horaAtual=dataCompleta.getHours();
if(horaAtual<12){alert('Bom dia!');}
else if(horaAtual<18){alert('Boa tarde!');}else{alert('Boa noite!');}
document.write(dataCompleta)
/*dataCompleta.getDay();
dataCompleta.getDate();
dataCompleta.getMonth();
dataCompleta.getFullYear();
dataCompleta.getHours();
dataCompleta.getMinutes();
dataCompleta.getSeconds();*/