 let xCarro = 40;


var carros = [];

function criarCarros(){
    for(let i = 0; i < 6; i++){
        var carro = {yCarro : 600, xCarro: xCarro + 55 * i, velocidade : 6-i};
       carros.push(carro);
   }
}

function mostraCarro(){
    image(imagemCarro[1], carros[0].yCarro, carros[0].xCarro, 50, 40);
    image(imagemCarro[2], carros[1].yCarro, carros[1].xCarro, 50, 40);
    image(imagemCarro[3], carros[2].yCarro, carros[2].xCarro, 50, 40);
    image(imagemCarro[1], carros[3].yCarro, carros[3].xCarro, 50, 40);
    image(imagemCarro[2], carros[4].yCarro, carros[4].xCarro, 50, 40);
    image(imagemCarro[3], carros[5].yCarro, carros[5].xCarro, 50, 40);
}

function voltarCarro(){
    for(let i = 0; i < 6; i++){
        if(carros[i].yCarro < -30){
        carros[i].yCarro = 600;
        }
    }
}
function movimentaCarro(){
    for(let i = 0; i < 6; i++){
    carros[i].yCarro -= carros[i].velocidade;
    }
}