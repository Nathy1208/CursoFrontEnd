//Exemplo de Script para manipulação DOM

function ClickBtn(){
    //manipulação pelo Id -> variavel simples
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Meu titulo modificado"; 
    let li = document.createElement("li");
    li.innerHTML = 'Modificado Texto do titulo <button onClick="btnConfere(this)>Confere</button>'
    //querySelector -> vetor/ variavel dimples
    document.querySelector (".lista").appendChild(li);
    //getElementsByClassName -> vetor.descricao
    let descricao = document.getElementsByClassName(".descricao");
    console.log(descricao);
    descricao.forEach(element => elemeny.style.cor = "red");
    texto = "Modificado cor da classe descrcicao para vermelho";
    li.innerHTML=texto+'<button onClick="btnConfere(this)">Confere</button>';
    document.querySelector(".list").appendChild(li);


};
