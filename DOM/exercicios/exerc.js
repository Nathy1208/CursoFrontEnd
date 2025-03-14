//Ativ 1 - selecionar os elementos

let titulo = document.getElementById("titulo");
titulo.style.color="purple";

let paragrafo = document.getElementsByClassName("paragrafo")
console.log(paragrafo);

let button = document.getElementById("button");
console.log(button);


// Ativ 2 - alterar o texto
function alterarTexto() {
    document.getElementById("titulo").innerText = "Concluiu essa ativudade";
}

//Ativ 3 - Alterar Cor de Fundo
function alterarCorFundo(){
    let body =  document.querySelector("body");
    body.style.backgroundColor = "blue";
}

//Ativ 4 - Adicionando e Removendo Classes
function adicionarClasse(){
    titulo.classList.add("descricao");
    let descricao = document.querySelector(".descricao");
    descricao.style.color = "red";
}