let nome = prompt('Informe o nome do candidato', 'Digite aqui')
        let idade = prompt('Informe a idade do candidato', 'Digite aqui')
        let relacionamento = prompt('Informe se é casado ou solteiro', 'Digite aqui')

        if (parseInt(idade) >= 18) {
            alert(`O candidato ${nome} está apto à iniciar o processo`)
        } else {
            alert(`O candidato ${nome} não está apto à iniciar o processo`)
        }

        if ((relacionamento)=='casado') {
            alert(`O ${nome} esta em uma vida conjugal`)
        } else {
            alert(`O  ${nome} deve ser sozinho  e triste, certamente cuida de algum animal pra suprir o vazio...`)
        }