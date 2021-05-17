let vendedor, jan, fev, mar, media
        vendedor = prompt("Informe o nome do vendedor", "digite aqui");
        jan = prompt("informe o valor das vendas de janeiro", "digite aqui");
        fev = prompt("informe o valor das vendas de fevereiro", "digite aqui");
        mar = prompt("informe o valor das vendas de março", "digite aqui");
        abr = prompt("informe o valor das vendas de abril", "digite aqui");
        mai = prompt("informe o valor das vendas de maio", "digite aqui");
        jun = prompt("informe o valor das vendas de junho", "digite aqui");
        media = (parseFloat(jan) + parseFloat(fev) + parseFloat(mar) + parseFloat(abr) + parseFloat(mai) + parseFloat(
            jun)) / 6
        alert("A média de vendas do " + vendedor + "no 1 Semestre foi " + media);
        console.log(" A média de vendas do " + vendedor + " no 1 trim foi " + media);
        document.write(
            `Olá, <strong>${vendedor}</strong>! Sua média de vendas no primeiro semestre foi de ${media}. Incrível! Não?.`
        )