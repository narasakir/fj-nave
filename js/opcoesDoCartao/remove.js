// (IIFE) Funciona para isolar o codigo, possibilitando o uso das variaveis, infinito 
(function(){
        //onclick="this.parentNode.parentNode.remove();"
        //pega elemento
        const btnRemove = document.querySelector('.opcoesDoCartao-remove')
        
            btnRemove.addEventListener('click', function(){
                const cartao = this.parentNode.parentNode
                //console.log(cartao)
                //1 é o add
                cartao.classList.add('cartao--somePeixinho')
                cartao.addEventListener('transitionend', function(){
                    cartao.remove();
                })            
                // setTimeout(function(){cartao.remove(); }, 300 ) 
        })
          
})()