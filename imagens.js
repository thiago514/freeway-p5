let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro = [];
let colidiu;
let pontos;
let trilha;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    for(let i = 1; i <= 3; i++){
        imagemCarro[i] = loadImage("imagens/carro-"+i+".png")
    }
    soundFormats('mp3','wav');
    colidiu = loadSound("sons/colidiu.mp3");
    ponto = loadSound("sons/pontos.wav");
    trilha = loadSound("sons/trilha.mp3");
}

function incluiPlacar(){
    textAlign(CENTER);
    textSize(20)
    fill(255);
    textStyle(BOLD);
    text(ator.pontos, 150, 26);
  }