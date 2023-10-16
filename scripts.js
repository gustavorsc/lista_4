function exemplovet() {
    let precos = []
    let soma = 0
    for (let i = 0; i < 10; i++) {
        precos[i] = Number(prompt(`Informe o preço ${i + 1}`))
    }
    for (let i = 0; i < 10; i++) {
        soma = soma + precos[i]
    }
    alert(`Média: ${soma / 10}`)

}

function exemplo1vet() {
    let vet = []
    let soma = 0

    for (let i = 0; i < 10; i++) {
        vet[i] = Number(prompt(`Informe o número ${i + 1} `))
    }
    for (let i = 0; i < 10; i++) {
        if (vet[i] % 2 == 0) {
            soma = soma + vet[i]
        }
    }
    alert(`A soma dos elementos pares é de: ${soma}`)
}

function exemplo2vet() {
    let vet = []
    let soma = 0

    for (let i = 0; i < 10; i++) {
        vet[i] = Number(prompt(`Informe o número ${i + 1} `))
    }
    for (let i = 0; i < 10; i++) {
        if (vet[i] % 2 != 0) {
            soma = soma + vet[i]
        }
    }
    alert(`A soma dos elementos pares é de: ${soma}`)
}

function ex1vet() {
    let vet = []
    for (let i = 0; i < 6; i++) {
        vet[i] = Number(prompt(`Informe o ${i + 1} elemento`))
    }
    let vetpares = []; let iPares = 0
    let vetimpares = []; let iImpares = 0
    for (let i = 0; i < 6; i++) {
        if (vet[i] % 2 == 0) {
            vetpares[iPares] = vet[i]
            iPares++
        }
        else {
            vetimpares[iImpares] = vet[i]
            iImpares++
        }
    }
    console.log(`Pares ${vetpares} Qtde: ${vetpares.length}`)
    console.log(`Pares ${vetimpares} Qtde: ${vetimpares.length}`)
}

function ex2vet() {
    let vet = []
    for (let i = 0; i < 7; i++) {
        vet[i] = Number(prompt(`Informe o ${i + 1} elemento`))
    }
    // cria os vetores novos
    let mult2 = []; let mult3 = []; let mult2e3 = []; let outros = []
    for (let i = 0; i < 7; i++) {
        if (vet[i] % 2 == 0 && vet[i] % 3 == 0) {
            mult2e3.push(vet[i])
            mult2.push(vet[i])
            mult3.push(vet[i])
        }
        else if (vet[i] % 2 == 0) {
            mult2.push(vet[i])
        }
        else if (vet[i] % 3 == 0) {
            mult3.push(vet[i])
        }
        else {
            outros.push(vet[i])
        }
    }
    console.log(`Multiplos de 2: ${mult2}`)
    console.log(`Multiplos de 3: ${mult3}`)
    console.log(`Multiplos de 2 e 3: ${mult2e3}`)
    console.log(`Outros números: ${outros}`)
}

function ex3vet() {
    let codigos = []; let estoque = []

    for (let i = 0; i < 5; i++) {
        codigos[i] = Number(prompt(`Informe o código do produto ${i + 1}: `))
        estoque[i] = Number(prompt(`Informe a quantidade de estoque do produto ${i + 1}`))
    }

    let codUser = Number(prompt(`Informe o código do produto para compra`))
    let qtde = Number(prompt(`Informe a quantidade de produtos para compra`))
    while (codUser != 0) {

        if (codigos.includes(codUser)) {
            if (qtde <= estoque[codUser - 1]) {
                estoque[codUser - 1] = estoque[codUser - 1] - qtde
                console.log("Pedido atendido. Obrigado e volte sempre!")
                qtde = Number(prompt(`Informe a próxima quantidade de produtos para compra`))
            }
            else {
                console.log("Não temos estoque suficiente dessa mercadoria.")
            }
        }
        else {
            alert("Codigo inexistente")
        }
        codUser = Number(prompt(`Informe o próximo código do produto para compra`))
    }
    for (let i = 0; i < 5; i++) {
        console.log(`Códigos: ${codigos[i]} Estoque: ${estoque[i]}`)
    }
}

function ex4vet() {
    let vet = []; posicoes = []
    for (let i = 0; i < 15; i++) {
        vet[i] = Number(prompt(`Informe o ${i + 1} elemento`))
    }
    for (let i = 0; i < 15; i++) {
        if (vet[i] == 30) {
            posicoes.push(i)
        }
    }
    console.log(`Posições em que se possui o número 30 dentro do vetor: ${posicoes}`)
}

function ex5vet() {
    let logica = []; programacao = []; cursa2 = []
    for (let i = 0; i < 15; i++) {
        logica[i] = Number(prompt(`Informe o codigo do aluno ${i + 1} `))
    }
    for (let i = 0; i < 10; i++) {
        programacao[i] = Number(prompt(`Informe o codigo do aluno ${i + 1} `))
    }
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 10; j++) {
            if (logica[i] === programacao[j]) {
                cursa2.push(logica[i])
            }
        }
    }
    console.log(`Cursa ambos os cursos os alunos com o codigo de matricula: ${cursa2}`)
}

function ex6vet() {
    let nomes = []; vendas = []; percentual = []; totalVendas = 0; totalReceber = []; maior = 0
    for (let i = 0; i < 10; i++) {
        nomes[i] = prompt(`Informe o nome do vendedor`)
        vendas[i] = Number(prompt(`Informe a quantidade de vendas do vendedor `))
        percentual[i] = Number(prompt(`Informe o percentual de comissão`))

        totalReceber[i] = vendas[i] * (percentual[i] / 100)
        totalVendas = totalVendas + vendas[i]
    }

    for (let i = 0; i < 10; i++) {
        if (totalReceber[i] > maior) {
            maior = totalReceber[i]
        }
    }
    let menor = maior
    for (let i = 0; i < 10; i++) {
        if (totalReceber[i] < menor) {
            menor = totalReceber[i]
        }
    }
    for (let i = 0; i < 10; i++) {
        console.log(`Nome: ${nomes[i]} | valor a receber: ${totalReceber[i]}`)
    }
    // let x = totalReceber.indexOf(maior)
    // let y = totalReceber.indexOf(menor)
    
    let indexNomeMaior = totalReceber.findIndex((valor) => valor === maior);
    let indexNomeMenor = totalReceber.findIndex((valor) => valor === menor);

    console.log(nomes)
    console.log(indexNomeMaior)
    console.log(indexNomeMenor)

    console.log(`Total de vendas: ${totalVendas}`)
    console.log(`Nome do maior vendedor: ${nomes[indexNomeMaior]}`)
    console.log(`Maior valor a receber: ${maior}`)
    console.log(`Nome do menor vendedor: ${nomes[indexNomeMenor]}`)
    console.log(`Menor valor a receber: ${menor}`)

}

function ex7vet() {
    let num = []; soma = 0; qtde = 0

    for (let i = 0; i < 10; i++) {
        num[i] = Number(prompt(`Informe o número: `))
        if (num[i] >= 0) {
            soma += num[i]
        }
        else {
            qtde++
        }
    }
    console.log(`quantidade de negativos: ${qtde}`)
    console.log(`Soma dos positivos: ${soma}`)
}

function ex8vet() {
    let nomes = []; medias = []; media = 7; provaExtra = []; maiorMedia = 0
    for (let i = 0; i < 3; i++) {
        nomes[i] = prompt(`Informe o nome do aluno ${i + 1}`)
        medias[i] = prompt(`Informe a média do aluno ${i + 1}`)
    }
    for (let i = 0; i < 3; i++) {
        if (medias[i] > maiorMedia) {
            maiorMedia = medias[i]
        }
    }
    for(let i=0; i<3; i++){
        if(medias[i] < media){
            provaExtra[i] = 10 - medias[i]
            console.log(`Nota necessária na prova para o aluno ${nomes[i]} passar: ${provaExtra[i]}`)
        }
    }
    // findIndex é usado para descobreir a posição em que a variavel é igual ao valor desejado
    let indexNomeMaior = medias.findIndex((valor) => valor === maiorMedia);
    console.log(`O aluno com a maior média é: ${nomes[indexNomeMaior]}`)
}

function ex9vet() {
    let nomes = []; cods = []; precos = []; novosPrecos = [];
    for (let i = 0; i < 10; i++) {
        nomes[i] = prompt(`Informe o nome do produto ${i + 1}`)
        cods[i] = Number(prompt(`Informe o código do produto ${i + 1}`))
        precos[i] = Number(prompt(`Informe o preço do produto ${i + 1}`))
    }

    for (let i = 0; i < 10; i++) {
        if (cods[i]%2 == 0 && precos[i] > 1000){
            novosPrecos[i] = (precos[i] + (precos[i] * 0.20))
        }
        else if(cods[i]%2 == 0){
            novosPrecos[i] = (precos[i] + (precos[i] * 0.15))
        }
        else if(precos[i] > 1000){
            novosPrecos[i] = (precos[i] + (precos[i] * 0.10))
        }
    }

    for(let i=0; i<10; i++){
        console.log(`Nome: ${nomes[i]} | Código: ${cods[i]} | Preço: ${precos[i]} | Novo preço: ${novosPrecos[i]}`)
    }
}

function revisaovet(){
    let cods = []; nomes = []; conta = 0
    for(let i=0; i<5; i++){
        let codigo = Number(prompt(`Informe o codigo do aluno ${i+1}: `))
        // cods tem todos os codigos
        // codigo tem somente um codigo
        // includes verifica se codigos existem em cods
        while (cods.includes(codigo)){
            codigo = Number(`Código ja existente. informe novamente:`)
        }
        //como codigo é novo, ele é inserido dentro do vetor na posição i
        cods[i] = codigo
        nomes[i] = prompt(`Informe o nome do aluno ${i+1}`)
    }
    console.log(`Códigos: ${cods} \n Nomes: ${nomes}`)     
        // do{
            // codigo = Number(prompt(`Informe o codigo do aluno ${i+1}`))
        // }
        //while(cods.includes(codigo))

        // includes é usado para descobrir se a ray possui o valor
        // indexOf é usado para descobrir a posição do valor, o index dele (i)
        // push é usado para adcionar um novo valor na ray na posição seguinte a ultima
        // length é usado para saber o tamanho da ray, quantos valores possui na ray 
    
}