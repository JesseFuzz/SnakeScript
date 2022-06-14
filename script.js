let canvas = document.getElementById("snake"); //estou ligando com o id do canvas no html
let context = canvas.getContext("2d");
let box = 32; 
let snake = [];
snake[0] = {x:8*box, y:8*box} //esse array de snake vazio acima vai receber esse x e y na posição zero do array

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
    for(i=0; i<snake.length; i++){ 
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
 
criarBG();
criarCobrinha();