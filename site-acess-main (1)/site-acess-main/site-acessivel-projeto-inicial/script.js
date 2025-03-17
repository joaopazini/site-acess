document.addEventListener("DOMContentLoaded", function (){
const botaodeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesdeAcessibilidade = document.getElementById(opcoes-acessibilidade)

botaodeAcessibilidade.addEventListener('click',function(){
    botaodeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesdeAcessibilidade.classList.toggle('apresenta-lista')
})

const aumentaFontebotao = document.getElementById('auemntar-fonte');
const diminuiFontebotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentaFontebotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
document.body.style.fontSize = "${tamanhoAtualFonte}rem"

})

diminuiFontebotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
document.body.style.fontSize = "${tamanhoAtualFonte}rem"

})


})