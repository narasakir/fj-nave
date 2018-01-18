// (IIFE) Funciona para isolar o codigo, possibilitando o uso das variaveis, infinito 
;(function(){
        //onclick="this.parentNode.parentNode.remove();"
        //pega elemento
        const btns = document.querySelectorAll('.opcoesDoCartao-remove')
            for(let btn of btns){ //let i = 0; i < btns.length; i++ , o Javascript implantou uma forma mais facil de escrever, sempre que precisar percorrer uma lista.
                // A variável let é de leitura, var é dinamico e const é constante
                // o "this" é um elemento triste, porque ele assume um contexto em cada lugar.

                btn.addEventListener('click', function(){
                    const cartao = btns[i].parentNode.parentNode
                    cartao.classList.add('cartao--somePeixinho')
                    cartao.addEventListener('transitionend', function(){
                        cartao.remove();
                    })            
                    // setTimeout(function(){cartao.remove(); }, 300 ) 
                })
        }
          
})()