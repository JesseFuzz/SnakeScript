let canvas = document.getElementById("snake"); //estou ligando com o id do canvas no html
let context = canvas.getContext("2d");
let box = 32; 
let direction = "right";
let snake = [];
snake[0] = {x:8*box, y:8*box} //esse array de snake vazio acima vai receber esse x e y na posição zero do array

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
    for(i=0; i<snake.length; i++){ 
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction=="right") snakeX = snakeX + box;
    if (direction=="left") snakeX-=box;
    if (direction=="up") snakeY = snakeY - box;
    if (direction=="down") snakeY+=box;

    snake.pop();

    let cabeça = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(cabeça);
}
let jogo = setInterval(iniciarJogo, 100)
