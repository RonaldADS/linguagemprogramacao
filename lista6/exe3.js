function entrada (vet){
for (let i = 0; i < 3; i++) {
        let objeto = {
            codigo: prompt("Informe o código do produto"),
            estoque: Number(prompt("Informe a qtde em estoque")),
            preco: Number(prompt("Informe o preço do produto"))
        }
         vet.push(objeto)
    }
}
function compra (vet){    
    // processo de compra
    let cliente = Number(prompt("Informe o código do cliente"))
    do {
        let codigo = prompt("Informe código do produto para compra")
        let qtde = Number(prompt("Informe a qtde do produto para compra"))
        // procura o produto
        let produtoEncontrado = null
        for (let i = 0; i < vetor.length; i++) {
            if (vet[i].codigo === codigo) {
                produtoEncontrado = vetor[i]
                break
            }
        }
        if (!produtoEncontrado) {
            alert(`Código ${codigo} inexistente`)
        } else {
            if (produtoEncontrado.estoque >= qtde) {
                produtoEncontrado.estoque -= qtde
                alert("Pedido atendido. Obrigado e volte sempre")
            } else {
                alert("Não temos estoque suficiente desta mercadoria")
            }
        }
        cliente = Number(prompt("Informe o código do novo cliente. Digite 0 para encerrar"))
    } while (cliente != 0)
}
function saida(vet){
    for (let i=0;i<vet.length;i++){
        alert(`codigo ${vet[i].codigo} estoque ${vet[i].estoque} preco ${vet[i].preco} `)
    }
}
function exe3() {
    // cadastra código, qtde em estoque e preço
    let vetor = [] // vetor de objetos
    entrada(vetor)
    compra (vetor)
    saida(vetor)
}