function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto alterado!";
}

// getElementById - seleção do elemento pelo ID

let titulo = document.getElementById("#titulo");
titulo.style.color = "blue";


let paragrafos = document.getElementsByClassName("descricao");
descricao[1].style.fontWeight = "bold"; // Deixa o primeiro parágrafo em negrito
descricao[2].style.color = "green";


let todosDescricao = document.getElementsByTagName("p");
console.log(todosParagrafos.lenght);

//query selector -> Primeiro Elemento

let primeiroDescricao =  document.querySelector;
(".cddescricao");
primeiroDescricao.style.color = "red";

//query selector all -> os elementos -> vetor

let ps = document.querySelectorAll("p");
ps.forEach(p => p.style.fontSiz = "18px")
