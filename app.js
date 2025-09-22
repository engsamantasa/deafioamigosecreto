let listaAmigos = [];



function renderizarLista() {
        let ul = document.querySelector('#listaAmigos');
        ul.innerHTML = ""; // limpa a lista antes de recriar

        listaAmigos.forEach(nome => {
            let li = document.createElement('li');
            li.textContent = nome;
            ul.appendChild(li);
        });
    }

    function mostrarMensagem(msg) {
        let ulResultado = document.querySelector('#resultado');
        ulResultado.innerHTML = ""; // limpa mensagens anteriores
        let li = document.createElement('li');
        li.textContent = msg;
        ulResultado.appendChild(li);
    }

//Função para pegar o nome escrito e colocar  
function adicionarAmigo(){
    let input = document.querySelector('input').value;
   // let nomeAmigo = input.value.trim();


    if (input === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaAmigos.includes(input.toLowerCase())) {
        alert(`O nome "${input}" já foi adicionado.`);
        return;
    }

    listaAmigos.push(input.toLowerCase());
    renderizarLista();
    limparCampo();
    
    

}


function limparCampo(){
    input = document.querySelector('input');
    input.value = "";
};



//Função para escolher um nome escrito dos presentes na lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
     // Mudar algum texto informando que não tem nenhum nome na lista 
    return null;
  } else {
    renderizarLista()
    return listaAmigos[gerarIndice()];
  }
  
}

function gerarIndice(){
    let indiceLista = parseInt( Math.random() * listaAmigos.length + 1)
    return indiceLista;
}





