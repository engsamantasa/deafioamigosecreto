let listaAmigos = [];



function renderizarLista() {
        let ul = document.querySelector('#listaAmigos');
        ul.innerHTML = "";

        listaAmigos.forEach(nome => {
            let li = document.createElement('li');
            li.textContent = nome;
            ul.appendChild(li);
        });
    }

function mostrarMensagem(msg) {
        let ulResultado = document.querySelector('#resultado');
        ulResultado.innerHTML = "";
        let li = document.createElement('li');
        li.textContent = msg;
        ulResultado.appendChild(li);
    }


function adicionarAmigo(){
    let input = document.querySelector('input').value;

    if (input === "") {
        alert("Por favor, insira um nome válido.");
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


    const indice = Math.floor(Math.random() * listaAmigos.length);
    const sorteado = listaAmigos[indice];
    mostrarMensagem(` O amigo secreto sorteado foi: ${sorteado}`);
    listaAmigos = [];
    renderizarLista();
}


function gerarIndice(){
    let indiceLista = parseInt( Math.random() * listaAmigos.length + 1)
    return indiceLista;
}





