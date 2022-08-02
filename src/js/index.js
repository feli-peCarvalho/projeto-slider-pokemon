/* objetivo 1: quando clicarmos na seta avançar o proximo cartao da lista deve aparecer
    - Passo 1: pegar o elemento HTML da seta.


    - Passo 2: indentificar quando a seta avançar for clickada.


    passo 3: quando clickar mostrar o proximo cartão.


    passo 4: buscar o cartão selecionado e esconder ele (passar o selecionado para outro cartão).

*/

/* objetivo 2: quando clicarmos na seta voltar o cartao anterior da lista deve aparecer
    - Passo 1: pegar o elemento HTML da seta.


    - Passo 2: indentificar quando a seta voltar for clickada.


    passo 3: quando clickar mostrar o cartão anterior.


    passo 4: buscar o cartão selecionado e esconder ele (passar o selecionado para outro cartão).
    
*/

// objetivo 1
// passo 1 -
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}
 
btnAvancar.addEventListener("click", function () { 
    if(cartaoAtual === cartoes.length - 1) return
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})


btnVoltar.addEventListener('click', function () { 
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})