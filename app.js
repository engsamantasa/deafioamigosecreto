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


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        mostrarMensagem(" Nenhum nome disponível para sortear.");
        return;
    }

    // escolhe um índice válido (de 0 até listaAmigos.length - 1)
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const sorteado = listaAmigos[indice];

    // mostra o resultado no HTML
    mostrarMensagem(` O amigo secreto sorteado foi: ${sorteado}`);

    // limpa a lista de amigos
    listaAmigos = [];
    renderizarLista();
}

function gerarIndice(){
    let indiceLista = parseInt( Math.random() * listaAmigos.length + 1)
    return indiceLista;
}





