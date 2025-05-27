function entrada(vet){
    for(let i=0;i<3;i++){
        //vet recebe vetor (vet=vetor)
        // cria o objeto
        let obj = {
            nome: prompt(`Informe nome do ${i+1}o vendedor`),
            vendas: Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)),
            percentual: Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`))
        }
        // calcula a comissão -> vamos utilizar o . para acessar o campo/atributo do objeto
        obj.comissao = (obj.vendas * obj.percentual) / 100
        // adiciona o objeto no vetor
        vet.push(obj)
    } // fecha o for
}
function gerarRelatorio(vet){
    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0;i<3;i++){
        relatorio += `\nVendedor: ${vet[i].nome} vai receber ${vet[i].comissao}`
    }
    alert(relatorio)
}

function totalDAsVendas(vet){
    let somaVendas = 0// total das vendas de todos os vendedores
    for(let i=0;i<3;i++){
        somaVendas = somaVendas + vet[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
}
function comissao (vet){
     // calcula o maior e menor valor de comissão
    let objMaior = vet[0] // primeiro funcionário é o maior
    let objMenor = vet[0] // primeiro funcionário é o menor
    for(let i=1;i<3;i++){
        if (vet[i].comissao > objMaior.comissao){
            objMaior = vet[i]
        }
        if (vet[i].comissao < objMenor.comissao){
            objMenor = vet[i]
        }
    }
    alert(`${objMaior.nome} vai receber maior comissão de ${objMaior.comissao}`)
    alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}
function exe6(){
    let vetor = []
    entrada(vetor) // entrada (vetor) amarra o entrada (vet) interligando vet e vetor por entrada
    gerarRelatorio(vetor)
    totalDAsVendas(vetor)
    comissao(vetor)
    // entrada de dados   
}
exe6()