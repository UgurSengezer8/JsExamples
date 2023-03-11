function clk(buton) {
    if (buton=="=") {
        document.getElementById("txt").value=eval(document.getElementById("txt").value);
    }else if (buton=="C") {
        document.getElementById("txt").value=""
    }else if (buton=="AC") {
        document.getElementById("txt").value= document.getElementById("txt").value.toString().slice(0,-1)
    }
    else{
        document.getElementById("txt").value+=buton;
    }
}
