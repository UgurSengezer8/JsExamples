var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');
cw =620;
ch =620;
col = cw/20;
row = ch/20;
cellSize =20;

denem =true;

Score =0;

snake =[];
snakeLength =3;

elma ={x:null,y:null}

gameOver = false;


ZeminCiz()
SnakeOlustur();
SnakeCiz();
ElmaOlustur();
setInterval(loop, 125);

function KareCiz(posX,posY,color,Size) {
    ctx.fillStyle =color
    ctx.fillRect(posX*Size,posY*Size,Size,Size)
}
function KareCizSnake(posX,posY,color,Size) {
    ctx.fillStyle =color
    ctx.fillRect(posX*Size,posY*Size,Size,Size)
}
function ZeminCiz() {
    flag =true
    for (let indexX = 0; indexX < col; indexX++) {
        for (let indexY = 0; indexY < row; indexY++) {
            if (flag==true) {
                renk = "#c8c8c8"
                flag =false
            }
            else if(flag==false){
                renk ="#323232"
                flag =true
            }
            KareCiz(indexX,indexY,renk,cellSize)
        }
    }
}
function SnakeOlustur() {
    snake = [];
    for (let index = 0; index < snakeLength; index++) {
        snake.push({x :index,y:0})
        
        
    }
}
function SnakeCiz() {
    for (let index = 0; index < snake.length; index++) {
        KareCizSnake(snake[index].x,snake[index].y,"#ff0000",cellSize)
    }
    KareCizSnake(snake[0].x,snake[0].y,"#bd0000",cellSize)

}
document.addEventListener('keydown', function(event) {
    if((event.keyCode == 38||event.keyCode == 87)&&vertical==0) {
        //up
        vertical=-1;
        horizontal=0;
    }
    else if((event.keyCode == 40||event.keyCode == 83)&&vertical==0) {
        //down
        vertical=1;
        horizontal=0;
    }
    else if((event.keyCode == 37||event.keyCode == 65)&&horizontal==0) {
        //left
        vertical=0;
        horizontal=-1;
    }
    else if((event.keyCode == 39||event.keyCode == 68)&&horizontal==0) {
        //right
        vertical=0;
        horizontal=1;
    }
});
horizontal =0;
vertical =0;
function CheckColision() {
    const head = {x:snake[0].x,y:snake[0].y}
    for (let index = 1; index < snake.length; index++) {
        if (snake[index].x==head.x&&snake[index].y==head.y) {
            GameOver();
            gameOver =true;
        }
    }
}
function GameOver() {
    alert("GameOver Score :"+Score)
    ZeminCiz()
    SnakeOlustur();
    SnakeCiz();
    gameOver =false;
    horizontal =0;
    vertical =0;

}
function ElmaOlustur() {
    elma= {x:Math.floor(Math.random()*(col-1)),y:Math.floor(Math.random()*(row-1))}


    for (let index = 0; index < snake.length; index++) {
        if (snake[index].x==elma.x&&snake[index].y==elma.y) {
            
            ElmaOlustur();
            break;
        }
    }
}
function SnakeMove() {
    if (!(vertical ==0&&horizontal==0)) {
        const head = {x:snake[0].x+horizontal,y:snake[0].y+vertical}
        if (snake[0].x==elma.x&&snake[0].y==elma.y) {
            ElmaYe();
        }
        if (head.x==col-1) {
            head.x =0;
        }
        if (head.x==-1) {
            head.x =col-1;
        }
        if (head.y==-1&&vertical==-1) {
            head.y =row-1;
        }
        if (head.y==row) {
            head.y =0;
        }
        snake.unshift(head);
        
        if(denem==true){
            snake.pop();
        }
        if (denem==false) {
            denem =true;
        }
    }
    

}

function ElmaYe() {
    denem=false;
    ElmaOlustur();
    length++;
    Score++;
    
}

function loop() {
    
    ZeminCiz();
    KareCiz(elma.x,elma.y,"#00A6FF",cellSize);
    SnakeMove();
    SnakeCiz();
    CheckColision();
}
ctx.stroke();
