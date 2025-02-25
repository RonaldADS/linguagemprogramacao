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