const personagens = document.querySelectorAll('.personagem');

personagens.forEach( (personagem) => {
    personagem.addEventListener('mouseenter',()=> {

        if(window,innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove( 'selecionado' )

        personagem.classList.add('selecionado');

        const imagempersonagemgrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagempersonagemgrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
    
        const descricaopersonagem = document.getElementById('descricao-personagem');
        descricaopersonagem.innerText = personagem.getAttribute('data-description');
    })
})



