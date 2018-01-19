;(function(){
    const form = document.querySelector('.formNovoCartao')

    let contador = document.querySelectorAll('.cartao').length

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
            contador++
            const $tpl = document.createElement('tpl') // Criando o elemento como uma template string
            //Adicionando o conteudo e deixando dinamico
            $tpl.innerHTML = ` 
                    <article id="cartao_${contador}" class="cartao" tabindex="0">
                    <div class="opcoesDoCartao">
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg><use xlink:href="#iconeRemover"></use></svg>
                    </button>
            
                    <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                        Padrão
                    </label>
            
                    <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                        Importante
                    </label>
            
                    <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                        Tarefa
                    </label>
            
                    <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                        Inspiração
                    </label>
                    </div>
                    <p class="cartao-conteudo" contenteditable tabindex="0">${$conteudo}</p>
                </article>
            
            `
            const $cartao = $tpl.querySelector('.cartao') // Retirei o article dentro da tag tpl
            document.querySelector('.mural').insertAdjacentElement('afterbegin', $cartao) // Adicionando dentro do mural
        }

    })

    form.classList.remove('no-js')
})()