function entrada (va){
    va = va +10
}
function processa (va){
    va = va +10
}
function saida (va){
    alert (va)
}
function main(){
     //passando um número como parâmetro da função
    //vai receber o valor de 'a' (passagem de parâmetro por valor)
    let a=10 
    entrada (a)
    saida (a)
    processa (a)
}
main()