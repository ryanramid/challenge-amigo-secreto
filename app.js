let listaDeAmigos = [];
let sorteador = '';
let sorteioRealizado = false;

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (!nomeAmigo.trim()) {
        alert('Por favor, insira um nome válido.');
        return;
    }
    if (listaDeAmigos.includes(nomeAmigo.trim())) {
        alert('Esse nome já foi adicionado.');
        return;
    }
    listaDeAmigos.push(nomeAmigo.trim());
    atualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

// Função para definir o sorteador
function adicionarSorteador() {
    sorteador = document.getElementById('sorteador').value.trim();
    if (!sorteador) {
        alert('Por favor, insira o seu nome.');
        return;
    }
    alert(`O sorteador foi definido como: ${sorteador}`);
    sorteioRealizado = false; // Permite um novo sorteio
    document.querySelector('.button-draw').disabled = false; // Habilita o botão de sorteio
}

// Função para atualizar a exibição da lista de amigos
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Função para realizar o sorteio aleatório de um amigo
function sortearAmigo() {
    if (sorteioRealizado) {
        alert('O sorteio já foi realizado.');
        return;
    }
    if (listaDeAmigos.length === 0) {
        alert('Por favor, adicione amigos à lista antes de sortear.');
        return;
    }
    if (!sorteador) {
        alert('Por favor, defina o sorteador antes de sortear.');
        return;
    }
    if (!listaDeAmigos.includes(sorteador)) {
        alert('O sorteador deve estar na lista de amigos.');
        return;
    }
    const listaFiltrada = listaDeAmigos.filter(amigo => amigo !== sorteador);
    const indiceAleatorio = Math.floor(Math.random() * listaFiltrada.length);
    const amigoSorteado = listaFiltrada[indiceAleatorio];
    atualizarListaAmigos(); // Mantém a lista visualmente
    exibirResultadoSorteio(amigoSorteado);
    sorteioRealizado = true;
    document.querySelector('.button-draw').disabled = true; // Desativa o botão de sorteio
}

// Função para exibir o resultado do sorteio
function exibirResultadoSorteio(amigo) {
    const resultadoSorteioElement = document.getElementById('resultado');
    resultadoSorteioElement.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `${sorteador}, o amigo sorteado é: ${amigo}`;
    resultadoSorteioElement.appendChild(li);
}
