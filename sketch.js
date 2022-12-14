function setup() {
  createCanvas(500, 400);
  criarCarros();
  trilha.loop();
}

function draw() {

  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltarCarro();
  verificaColisao();
  ganhaPontos();
  incluiPlacar();
}
