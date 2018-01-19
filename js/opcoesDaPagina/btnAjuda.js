;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda')
    $btnAjuda.addEventListener('click', () => { // Arrow function é usado quando não preciso do (this)
        const ajudas = [
            'Voce pode nalsk',
            'voce poderjans', 
            'sdhadas'
        ]

        ajudas.forEach(ajuda => alert(ajuda)) // Arrow function é usado quando não preciso do (this)

    })
    $btnAjuda.classList.remove('no-js') // Progressive enhancement - disponibiliza o componente na view depois de carregar a funcionalidade
})()