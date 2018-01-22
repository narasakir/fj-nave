'use strict';

;(function () {
    var form = document.querySelector('.formNovoCartao');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var campoDeConteudo = document.querySelector('.formNovoCartao-conteudo');
        var $conteudo = campoDeConteudo.value.trim();

        if ($conteudo === '') {
            var $tplErro = document.createElement('tpl');
            $tplErro.innerHTML = '\n                <div class="formNovoCartao-msg">\n                    Elemento vazio\n                </div>\n            ';
            $msgErro = $tplErro.querySelector('.formNovoCartao-msg');
            document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro);

            form.addEventListener('animationend', function () {
                $msgErro.remove();
            });
        } else {
            criarCartao($conteudo);
        }
    });

    form.classList.remove('no-js');
})();