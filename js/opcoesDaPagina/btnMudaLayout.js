const btn = document.querySelector('#btnMudaLayout') // Variável tipo const é usado sempre que não for mudar o elemento.

//cria a função
function mudaTexto(){ 
    if(this.textContent == 'Blocos'){ // this refencia do elemento clicado 
        this.textContent = 'Linhas' // textContent == atributo que troca o texto
    }else {
        this.textContent = 'Blocos'
    }
}
btn.addEventListener('click', mudaTexto) 
//   btn.onclick = mudaTexto    Função de callback , chama a função sem executar

//Adicionar a classe
const mural = document.querySelector('.mural')

function mudaLayout(){
    mural.classList.toggle('mural--linha')

    // o método .toggle() executa a estrutura de condição 
    /*
    if(mural.classList.contains('mural--linha)){
        mural.classList.remove('mural--linha')
    }else{
        mural.classList.add('mural-linha)
    }
    */
}

btn.addEventListener('click', mudaLayout)

// Progressive enhancement == Carregamento Progressivo (oferecer quando tem disponível)
btn.classList.remove('no-js')

