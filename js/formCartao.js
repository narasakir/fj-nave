;(function(){
    const form = document.querySelector('.formNovoCartao')

    form.addEventListener('submit', function(event){
        event.preventDefault()
        const campoDeConteudo = document.querySelector('.formNovoCartao-conteudo')
        const $conteudo = campoDeConteudo.value.trim()

        if($conteudo === ''){            
            const $msgErro = document.createElement('div')
            $msgErro.classList.add('formNovoCartao-msg')
            $msgErro.textContent = 'Nada de Nadas'
            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin', $msgErro)

            form.addEventListener('animationend', function(){
                $msgErro.remove()
            })
        }else{
            console.log('Fodes', $conteudo)
        }

    })

    form.classList.remove('no-js')
})()