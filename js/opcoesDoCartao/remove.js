//onclick="this.parentNode.parentNode.remove();"

//pega elemento
const btnRemove = document.querySelector('.opcoesDoCartao-remove')

btnRemove.addEventListener('click', removeCartao)

function removeCartao(){
    const cartao = this.parentNode.parentNode
    //console.log(cartao)
    //1 é o add
    cartao.classList.add('cartao--somePeixinho')
    cartao.addEventListener('transitionend', function(){
        cartao.remove();
    })
}

/*
setTimeout(function(){
    cartao.remove();
}, 300)

*/