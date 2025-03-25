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
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let menor
    if (nro1<nro2){
        menor = nro1
    }
    if (nro1>nro2){
        menor = nro2
    }
    else{
        menor= "os dois números são iguais"
    }
    document.getElementById("menor").innerHTML = "o menor é " + menor
}
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let maior 
    if (nro1 >= nro2 && nro1 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro1
    }
    else if (nro2 >= nro1 && nro2 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro2
    }
    else if (nro3 >= nro1 && nro3 >= nro2){
        document.getElementById("maior").innerHTML = "O maior é " + nro3
    }
}
function exe5(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    // utilização do escolha
    switch (selecao){
        case 1: document.getElementById("result").innerText = (nro1 + nro2) / 2
                break
        case 2: if (nro1 >= nro2){
                    document.getElementById("result").innerText = nro1 - nro2
                }
                else {
                    document.getElementById("result").innerText = nro2 - nro1
                }
                break
        case 3: document.getElementById("result").innerText = nro1 * nro2
                break
        case 4: if (nro2 != 0){
                    document.getElementById("result").innerText = nro1 / nro2
                }
                else {
                    document.getElementById("result").innerText = "Divisão por zero"
                }
    }
}
function exe6 (){
    //recupera dados do usoario
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    switch(selecao){
        case 1:document.getElementById("result").innerHTML = "a potência é " + 
            Math.pow(nro1,nro2)
            break
        case 2:document.getElementById("result").innerHTML = "rq do nro 1" + Math.sqrt(nro1).toFixed(2) + 
            "<br/> rq do  nro 2" + Math.sqrt(nro2).toFixed(2)
        break
        case 3:document.getElementById("result").innerHTML = "rq do nro 1" + Math.cbrt(nro1).toFixed(2) + 
                "<br/> rq do nro 2" + Math.sqrt(nro2).toFixed(2)
    }
}
function exe7(){
    //rec dados do usoário
    let salario = number (document.getElementById("salário").value)
    //verif valor do salário 
    if (salario<0){
    document.getElementById("novo").innerHTML="salario negativo"
    }
    else if (salario < 500){
        document.getElementById("novo").innerHTML = "novo salário" + + (salario + salario*30/100)
    }
    else {
        document.getElementById("novo").innerHTML = "salario maior ou igual a 500, sem reajuste"
    }
}
function exe8(){
    //ttemplate string
    
    let salario = number (document.getElementById("salário").value)
    if (salario<0){
    document.getElementById("novo").innerHTML="salario negativo"
    }
    else if (salario < 500){
    document.getElementById("novo").innerHTML = 'novo salário $(salario) + {salario*35/100}'
    }
    else {
    document.getElementById("novo").innerHTML = "novo salário"  + (salario + salario*15/100)
    }
}
function exe9(){
    //saldo
    let saldo = Number (document.getElementById(saldo).value)
    //credito
    let credito =0//começa com valor zero
    if (saldo >400){
        credito = (saldo*30/100)
    }
    else if ((saldo>=300) && (saldo <=400)){
    credito = (saldo *25/100)
    }
    else if ((saldo>=200) && (saldo <=300)){
        credito = (saldo *20/100)
    }
    else if ((saldo>=0) && (saldo <=200)){
        credito = (saldo *10/100)
    }
    else{// saldo negativo 
        document.getElementById("credito").innerHTML = "saldo não pode ser negativo"
        return//saiu da função 
    }
    document.getElementById("credito").innerHTML = 'saldo ${saldo} e crédito ${credito}'
}
function exe10(){
    // rec custo
    let custo = Number (document.getElementById(saldo).value)
    let distribuidor =0
    let imposto =0
    if (custo <12000){
        distribuidor = custo *5/100
        imposto = 0
    }
    else if (custo >=12000 && custo <= 25000){
        distribuidor = custo *15/100
        imposto = custo *20/100
    }
    else {
        document.getElementById("consumidor").innerHTML = "custo negativo"
        return
    }
    document.getElementById("consumidor").innerHTML = 'custo da fábrica ${custo} <br/> distribuidor ${distribuidor} <br/> imposto <br/> valor consumidor ${consumidor}'

}