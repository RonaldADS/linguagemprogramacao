function exe1(){
    //rec dados do usoário 
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular média
    let media = (nota1 + nota2 + nota3 + nota4)/ 4
    if (media >=7){
        document.getElementById("media").innerText = "aprovado com média " + media
    }
    else {
        document.getElementById("media").innerText = "aprovado com média " + media
    }
}
function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    let media = (nota1+nota2)/2
    if ((media>=0) && (media>3)){
        document.getElementById("media").innerHTML = "reprovado" + media
    }
    else if ((media>=3) && (media>7)){
        document.getElementById("media").innerHTML = "exame" + media
    }
    else if ((media>=7) && (media>10)){
        document.getElementById("media").innerHTML = "aprovado" + media
    }
    else {
            document.getElementById("media").innerHTML = "problema com notas" + media
    }
}