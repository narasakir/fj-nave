;(function(){
    const form = document.querySelector('.formNovoCartao')

    form.addEventListener('submit', function(event){
        event.preventDefault()
        const campoDeConteudo = document.querySelector('.formNovoCartao-conteudo')
        const $conteudo = campoDeConteudo.value.trim()

        if($conteudo === ''){            
            const $tplErro =document.createElement('tpl')
            $tplErro.innerHTML = `
                <div class="formNovoCartao-msg">
                    Elemento vazio
                </div>
            `
            $msgErro = $tplErro.querySelector('.formNovoCartao-msg')
            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin', $msgErro)

            form.addEventListener('animationend', function(){
                $msgErro.remove()
            })
        }else{
            criarCartao({conteudo : $conteudo})
        }

    })

    form.classList.remove('no-js')
})()