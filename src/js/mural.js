;(function($){ // Parametro para usar as Dependencias
    let contador = document.querySelectorAll('.cartao').length


function criarCartao({conteudo, cor}){ //Recebendo os parametros como objeto
    contador++
    //Adicionando o conteudo e deixando dinamico com jQuery
    const $cartao = $(` 
            <article id="cartao_${contador}" style="background-color:${cor}" class="cartao" tabindex="0">
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${cor ? '' : 'checked'}>
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
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
        </article>   
    `)



    $cartao.on('focusin', function(){
        $cartao.addClass('cartao--focado')
    })
    
    $cartao.on('focusout', function(){
        $cartao.removeClass('cartao--focado')
    })

    // Delegate para trocar a cor
    $cartao.on('change', function(event){ // Verifica quando o evento for disparada, neste caso, a mudança do estado. 
        const $elementoAtual = $(event.target)  // Pega os eventos do elemento atual        
            const novaCor = $elementoAtual.val() // Pega os eventos do elemento atual || Quando pegar um elemento da página sempre adicionar $ na variável
            $cartao.css('background', novaCor)
    })
    // Delegate para trocar a cor ao teclar
    $cartao.on('keyup', '.opcoesDoCartao-opcao',  function(event){
        const  $elementoAtual = $(event.target) // Pega os eventos do elemento atual 
        if(event.key === 'Enter' || event.key === ' '){ // verifica se é o elemento e o evento desejado.
            $elementoAtual.click()
        }
    })
    // Delegate para remover o cartão
    $cartao.on('click', '.opcoesDoCartao-remove', function(event){ // No jQuery faz delegate acoplado
        const $elementoAtual = $(event.target)
        $cartao.addClass('cartao--somePeixinho')
        $cartao.on('transitionend', function(){
            $cartao.remove();
        })   
        
    })
    $('.mural').prepend($cartao) // Adicionando dentro do mural
}
window.criarCartao = criarCartao
})(jQuery) //Dependencia == Declarando que o arquivo depende do jQuery