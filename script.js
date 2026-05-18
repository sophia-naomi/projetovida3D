const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i =0; i <botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remover("ativo");
            textos[j].classList.remover("ativo");
        }
        botoes[j].classList.add("ativo");
        textos[j].classList.add("ativo");
    }
console.log(botoes);
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = Date("2026-12-28T23:59:59");