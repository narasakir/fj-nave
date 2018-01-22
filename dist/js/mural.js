'use strict';

;(function ($) {
    // Parametro para usar as Dependencias
    var contador = document.querySelectorAll('.cartao').length;

    function criarCartao(_ref) {
        var conteudo = _ref.conteudo,
            cor = _ref.cor;
        //Recebendo os parametros como objeto
        contador++;
        //Adicionando o conteudo e deixando dinamico com jQuery
        var $cartao = $(' \n            <article id="cartao_' + contador + '" style="background-color:' + cor + '" class="cartao" tabindex="0">\n            <div class="opcoesDoCartao">\n            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">\n                <svg><use xlink:href="#iconeRemover"></use></svg>\n            </button>\n    \n            <input type="radio" name="corDoCartao' + contador + '" value="#EBEF40" id="corPadr\xE3o-cartao' + contador + '" class="opcoesDoCartao-radioTipo" ' + (cor ? '' : 'checked') + '>\n            <label for="corPadr\xE3o-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n                Padr\xE3o\n            </label>\n    \n            <input type="radio" name="corDoCartao' + contador + '" value="#F05450" id="corImportante-cartao' + contador + '" class="opcoesDoCartao-radioTipo">\n            <label for="corImportante-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n                Importante\n            </label>\n    \n            <input type="radio" name="corDoCartao' + contador + '" value="#92C4EC" id="corTarefa-cartao' + contador + '" class="opcoesDoCartao-radioTipo">\n            <label for="corTarefa-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n                Tarefa\n            </label>\n    \n            <input type="radio" name="corDoCartao' + contador + '" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + contador + '" class="opcoesDoCartao-radioTipo">\n            <label for="corInspira\xE7\xE3o-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n                Inspira\xE7\xE3o\n            </label>\n            </div>\n            <p class="cartao-conteudo" contenteditable tabindex="0">' + conteudo + '</p>\n        </article>   \n    ');

        $cartao.on('focusin', function () {
            $cartao.addClass('cartao--focado');
        });

        $cartao.on('focusout', function () {
            $cartao.removeClass('cartao--focado');
        });

        // Delegate para trocar a cor
        $cartao.on('change', function (event) {
            // Verifica quando o evento for disparada, neste caso, a mudança do estado. 
            var $elementoAtual = $(event.target); // Pega os eventos do elemento atual        
            var novaCor = $elementoAtual.val(); // Pega os eventos do elemento atual || Quando pegar um elemento da página sempre adicionar $ na variável
            $cartao.css('background', novaCor);
        });
        // Delegate para trocar a cor ao teclar
        $cartao.on('keyup', '.opcoesDoCartao-opcao', function (event) {
            var $elementoAtual = $(event.target); // Pega os eventos do elemento atual 
            if (event.key === 'Enter' || event.key === ' ') {
                // verifica se é o elemento e o evento desejado.
                $elementoAtual.click();
            }
        });
        // Delegate para remover o cartão
        $cartao.on('click', '.opcoesDoCartao-remove', function (event) {
            // No jQuery faz delegate acoplado
            var $elementoAtual = $(event.target);
            $cartao.addClass('cartao--somePeixinho');
            $cartao.on('transitionend', function () {
                $cartao.remove();
            });
        });
        $('.mural').prepend($cartao); // Adicionando dentro do mural
    }
    window.criarCartao = criarCartao;
})(jQuery); //Dependencia == Declarando que o arquivo depende do jQuery