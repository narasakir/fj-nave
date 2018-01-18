;(function(){// IIFE
    const cartoes = document.querySelectorAll('.cartao');
    // Delegate : É quando o (Elemento/Componente) Pai ouve um evento que aconteceu no Filho (Elemento/Componente)
    for(let cartao of cartoes){

        cartao.addEventListener('focusin', function(){
            cartao.classList.add('cartao--focado')
        })
        
        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado')
        })

        // Delegate para trocar a cor
        cartao.addEventListener('change', function(event){ // Verifica quando o evento for disparada, neste caso, a mudança do estado. 
            const $elementoAtual = event.target  // Pega os eventos do elemento atual        
                const novaCor = $elementoAtual.value // Pega os eventos do elemento atual || Quando pegar um elemento da página sempre adicionar $ na variável
                cartao.style.background = novaCor 
        })
        // Delegate para trocar a cor ao teclar
        cartao.addEventListener('keydown', function(event){
            const  $elementoAtual = event.target // Pega os eventos do elemento atual
            const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao') // verifica se o elemento atual contem a classe 
            if(isLabel && (event.key === 'Enter' || event.key === ' ')){ // verifica se é o elemento e o evento desejado.
                $elementoAtual.click()
            }
        })
        // Delegate para remover o cartão
        cartao.addEventListener('click', function(event){
            const $elementoAtual = event.target
            const isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove')

            const cartao = $elementoAtual.parentNode.parentNode
            cartao.classList.add('cartao--somePeixinho')
            if(isRemove){
                cartao.addEventListener('transitionend', function(){
                    cartao.remove();
                })         
            }
            
        })
    }

})()