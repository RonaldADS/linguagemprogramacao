function seguir(){
    alert ('você agora está seguindo Ronald Santos')
}
//exercício 1
function exe1(){
    // vamos usar DOM para recuperar os dados do HTML
    // DOM= Document Object Model
    let nro1 = Number( document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)

    let sub = nro1 - nro2
    document.getElementById("sub").innerText = "o resultado é" +sub

}
function exe4 (){
    let nro1 = Number (document.getElementById("nro1").value)
    let nro2 = Number (document.getElementById("nro2").value)
let mp =  ((nro1*2) + (nro2*3)) / 5
document.getElementById("mp").innert
}
    function exercício (){
        let preco = Number( document.getElementById("preco").value)
        let desconto = (preco*10)/100
        document.getElementById("desconto").innerText ;"o novo preço é de " +(preco-desconto)
    }