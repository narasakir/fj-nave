;(function(){// IIFE
    const cartoes = document.querySelectorAll('.cartao');

    for(let cartao of cartoes){

        cartao.addEventListener('focusin', function(){
            cartao.classList.add('cartao--focado')
        })
        
        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado')
        })
    }

})()