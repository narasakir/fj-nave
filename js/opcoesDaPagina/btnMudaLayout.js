const btn = document.querySelector('#btnMudaLayout') // Variável tipo const é usado sempre que não for mudar o elemento.

//cria a função
function mudaTexto(){ 
    if(this.textContent == 'Blocos'){ // this refencia do elemento clicado 
        this.textContent = 'Linhas' // textContent == atributo que troca o texto
    }else {
        this.textContent = 'Blocos'
    }
}
btn.onclick = mudaTexto //Função de callback , chama a função sem executar

