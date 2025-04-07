let tripulacao = ["", "", ""];
let perigosMar = ["", "", ""];
let habilidadeTripulacao = 0;
let intensidadePerigos = 0;

alert("Os membros da tripulação são: " + tripulacao);
 /*Dados Membros Tripulação*/
for (let i = 0; i < 3; i++) {
  tripulacao[i] = prompt("Digite o nome do membro da tripulação " + (i + 1));
  habilidadeTripulacao = habilidadeTripulacao + Math.floor(Math.random() * 10) + 1;

 /*/Perigos*/
  for (let j = 0; j < 3; j++) {
    let indiceAleatorio = Math.floor(Math.random() * 5);
    let perigosPossiveis = ["Tempestade Violenta", "Ataque de Piratas", "Tubarão", "Tsunami", "Navegação em Águas Desconhecidas"];
    perigosMar[j] = perigosPossiveis[indiceAleatorio];
  }
  intensidadePerigos = intensidadePerigos + Math.floor(Math.random() * 10) + 1;
}

/*Resultado*/

alert("A habilidade total da tripulação é: " + habilidadeTripulacao);
alert("A intensidade total dos perigos no mar é: " + intensidadePerigos);

if (habilidadeTripulacao > intensidadePerigos) {
  alert("A tripulação superou os desafios e chegou ao seu destino em segurança!");
} else if (habilidadeTripulacao < intensidadePerigos) {
  alert("Os perigos do mar foram implacáveis... a viagem terminou em naufrágio ou contratempo!");
} else {
  alert("A viagem foi difícil, com desafios vencidos com a habilidade da tripulação. Chegaram ao destino, mas não sem muitos sustos!");
}

/*Botão Resultado*/

let button = document.getElement.ById(resultadobtn);