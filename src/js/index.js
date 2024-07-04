const botao = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botao.addEventListener('click',() => {
    mostrarMaisProjetos();
    
    esconderBotao();
});


function esconderBotao() {
    botao.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

