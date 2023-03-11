var game =[[2,2,2],[2,2,2],[2,2,2]];
var sira="X";
var GameOver =false;
var xWin =0;
var oWin=0;
var berWin=0;




function tikla(x,y,name) {
    if (GameOver==false) {
        if (game[x][y]==2 &&sira=="X") {
            document.getElementById(name).style.backgroundImage="url(x.png)";
            sira="O"
            game[x][y] = 0;
            if ((game[x][0]==0&&game[x][1]==0&&game[x][2]==0)||((game[0][y]==0&&game[2][y]==0&&game[1][y]==0))) {
                xWin++;
                document.getElementById("xSkor").innerHTML="X:"+xWin;
                GameOver=true;
            }
        }else if (game[x][y]==2 &&sira=="O") {
            document.getElementById(name).style.backgroundImage="url(o.png)";
            sira="X"
            game[x][y] = 1;
            if ((game[x][0]==1&&game[x][1]==1&&game[x][2]==1)||(game[0][y]==1&&game[2][y]==1&&game[1][y]==1)) {
                oWin++;
                document.getElementById("oSkor").innerHTML="O:"+oWin;
                GameOver=true;
            }
    
        }
        if ((game[0][0]==0&&game[1][1]==0&&game[2][2]==0)||(game[0][2]==0&&game[1][1]==0&&game[2][0]==0)) {
            xWin++;
            document.getElementById("xSkor").innerHTML="X:"+xWin;
            GameOver=true;
        }
        if ((game[0][0]==1&&game[1][1]==1&&game[2][2]==1)||(game[0][2]==1&&game[1][1]==1&&game[2][0]==1)) {
            oWin++;
            document.getElementById("oSkor").innerHTML="O:"+oWin;
            GameOver=true;
        }
        if (game[0][0]!=2&&game[0][1]!=2&&game[0][2]!=2&&game[1][0]!=2&&game[1][1]!=2&&game[1][2]!=2&&game[2][0]!=2&&game[2][1]!=2&&game[2][2]!=2&&GameOver==false) {
            berWin++;
            document.getElementById("beraberS").innerHTML=""+berWin;

            GameOver=true;

        }
        document.getElementById("turn").innerHTML=sira+"' Turns"
    }
    

}
function reset() {
    const grids = document.getElementsByClassName("grid");
    for (let index = 0; index < 9; index++) {
        grids[index].style.backgroundImage="";
    }
    for (let i = 0; i < 3; i++) {
        for (let l = 0; l < 3; l++) {
            game[i][l]=2;
        }
    }
    GameOver=false;
    sira="X";
    document.getElementById("turn").innerHTML=sira+"' Turns"
}