let ator = {
    x : 366,
    y : 100,
    pontos : 0
};

function mostraAtor(){
    image(imagemDoAtor, ator.y, ator.x, 30, 30);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        ator.x -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        ator.x += 3;
    }
    if (keyIsDown(LEFT_ARROW)){
        ator.y -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        ator.y += 3;
    }
}

function verificaColisao(){
    for(let i = 0; i < carros.length; ++i){
        if(collideRectCircle(carros[i].xCarro, carros[i].yCarro, 40, 50, ator.x, ator.y, 15)){
            ator.x = 366;
            ator.pontos > 0 ? ator.pontos--  : null;
            colidiu.play();
        }
    }
}

function ganhaPontos(){
    if(ator.x <= 15){
        ator.pontos++;
        ator.x = 366;
        ponto.play();
    }
}