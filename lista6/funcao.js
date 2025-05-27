function entrada(vet){ // vetor=vet
    vet [0] = 'a'
    vet [1] = 'b'
    vet [2] = 'c'
    alert(`entrada`)
}
function processa(vet){
    vet [0] = vet [0] ='u'
    vet [1] = vet [1] ='u'
    vet [2] = vet [2] ='u'

}
function saida(vet){
    alert(`saida de dados ${vet}`)
}

function main(){
    let vetor = []
    
    //passando vetor como parâmetro da função
    //vai receber uma referência de vetor (passagem de parâmetro por referência)
    entrada (vetor)
    processa (vetor)
    saida (vetor)

}
main ()