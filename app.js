let amigos = [];

function adicionarAmigo() {
    
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nomeAmigo = inputAmigo.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return; 
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        inputAmigo.value = ''; 
        inputAmigo.focus(); 
        return;
    }

    amigos.push(nomeAmigo);

    const itemLista = document.createElement('li');
    itemLista.textContent = nomeAmigo;
    listaAmigos.appendChild(itemLista);

    inputAmigo.value = '';
    
    inputAmigo.focus();
}

function sortearAmigo() {
    
    const resultado = document.getElementById('resultado');
 
    if (amigos.length < 2) {
        resultado.textContent = 'Adicione pelo menos 2 amigos para sortear!';
        resultado.style.color = '#FF0000'; 
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceSorteado];

    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
    resultado.style.color = '#05DF05'; 
}