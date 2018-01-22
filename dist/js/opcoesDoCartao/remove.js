'use strict';

// (IIFE) Funciona para isolar o codigo, possibilitando o uso das variaveis, infinito 
;(function () {
    //onclick="this.parentNode.parentNode.remove();"
    //pega elemento
    var btns = document.querySelectorAll('.opcoesDoCartao-remove');

    var _loop = function _loop(btn) {
        //let i = 0; i < btns.length; i++ , o Javascript implantou uma forma mais facil de escrever, sempre que precisar percorrer uma lista.
        // A variável let é de leitura, var é dinamico e const é constante
        // o "this" é um elemento triste, porque ele assume um contexto em cada lugar.

        btn.addEventListener('click', function () {
            var cartao = btn.parentNode.parentNode;
            cartao.classList.add('cartao--somePeixinho');
            cartao.addEventListener('transitionend', function () {
                cartao.remove();
            });
            // setTimeout(function(){cartao.remove(); }, 300 ) 
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var btn = _step.value;

            _loop(btn);
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