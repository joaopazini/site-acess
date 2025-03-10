document.addEventListener("DOMContentLoaded", function (){
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