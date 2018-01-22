'use strict';

(function () {
    var btn = document.querySelector('#btnMudaLayout'); // Variável tipo const é usado sempre que não for mudar o elemento.

    //cria e executa a função quando dispara o evento

    btn.addEventListener('click', function () {
        if (this.textContent == 'Blocos') {
            // this refencia do elemento clicado 
            this.textContent = 'Linhas'; // textContent == atributo que troca o texto
        } else {
            this.textContent = 'Blocos';
        }
    });
    //   btn.onclick = mudaTexto   , Função de callback , chama a função sem executar

    //Pega o Elemetento
    var mural = document.querySelector('.mural');

    btn.addEventListener('click', function () {
        mural.classList.toggle('mural--linha'); // o método .toggle() executa a estrutura de condição 
        /*
        if(mural.classList.contains('mural--linha)){
            mural.classList.remove('mural--linha')
        }else{
            mural.classList.add('mural-linha)
        }
        */
    });

    btn.classList.remove('no-js'); // Progressive enhancement == Carregamento Progressivo (oferecer quando tem disponível)

})();