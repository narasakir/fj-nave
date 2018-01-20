;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda')
    $btnAjuda.addEventListener('click', () => { // Arrow function é usado quando não preciso do (this)
        const ajudas = [
            {msg: 'Voce pode nalsk', cor: 'lime' },
            {msg: 'Voce pode ', cor: 'pink' },
            {msg: 'Voce pode mudar cor', cor: 'grey' }
        ]

        ajudas.forEach(ajuda => criarCartao(ajuda.msg, ajuda.cor)) // Arrow function é usado quando não preciso do (this)

    })
    $btnAjuda.classList.remove('no-js') // Progressive enhancement - disponibiliza o componente na view depois de carregar a funcionalidade
})()