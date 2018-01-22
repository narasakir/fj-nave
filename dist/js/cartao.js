'use strict';

;(function () {
    // IIFE
    var cartoes = document.querySelectorAll('.cartao');
    // Delegate : É quando o (Elemento/Componente) Pai ouve um evento que aconteceu no Filho (Elemento/Componente)

    var _loop = function _loop(cartao) {

        cartao.addEventListener('focusin', function () {
            cartao.classList.add('cartao--focado');
        });

        cartao.addEventListener('focusout', function () {
            cartao.classList.remove('cartao--focado');
        });

        // Delegate para trocar a cor
        cartao.addEventListener('change', function (event) {
            // Verifica quando o evento for disparada, neste caso, a mudança do estado. 
            var $elementoAtual = event.target; // Pega os eventos do elemento atual        
            var novaCor = $elementoAtual.value; // Pega os eventos do elemento atual || Quando pegar um elemento da página sempre adicionar $ na variável
            cartao.style.background = novaCor;
        });
        // Delegate para trocar a cor ao teclar
        cartao.addEventListener('keyup', function (event) {
            var $elementoAtual = event.target; // Pega os eventos do elemento atual
            var isLabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao'); // verifica se o elemento atual contem a classe 
            if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                // verifica se é o elemento e o evento desejado.
                $elementoAtual.click();
            }
        });
        // Delegate para remover o cartão
        cartao.addEventListener('click', function (event) {
            var $elementoAtual = event.target;
            var isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove');

            if (isRemove) {
                cartao.classList.add('cartao--somePeixinho');
                cartao.addEventListener('transitionend', function () {
                    cartao.remove();
                });
            }
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = cartoes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cartao = _step.value;

            _loop(cartao);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})();