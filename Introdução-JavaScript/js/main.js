function clicou(){
    console.log(document.querySelector("#agradecimento").innerHTML = "Obrigado por clicar")
    //console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por clicar")
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("http://devmedia.com.br/")
    window.location.href = "http://devmedia.com.br/"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    // document.querySelector("#mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    // document.querySelector("#mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function change(elemento){
    console.log(elemento.value)
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }

//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));

//alert(soma(5,10))

// var nome = "Guilherme Marques"
// alert(nome)

// var d = new Date();
// alert(d)