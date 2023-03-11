let [seconds,minutes,hours] =[0,0,0]
var timer=null;
let sec ="0"
let mnt ="0"
let hrs ="0"
function str() {
    seconds++
    if (seconds>=60) {
        seconds=0;
        minutes++;
        if (minutes>=60) {
            minutes=0;
            hours++;
        }
    }
    sec=seconds;
    mnt=minutes;
    if (seconds<10) {
        sec = "0"+seconds;
    }
    if (minutes<10) {
        mnt = "0"+minutes;
    }
    if (hours<10) {
        hrs = "0"+hours;
    }
    document.getElementById("clock").innerHTML=hrs+":"+mnt+":"+sec;
}
function start() {
    if (timer!=null) {
        clearInterval(timer);
    }
    timer = setInterval(str,1000);
}
function pause() {
    if (timer!=null) {
        clearInterval(timer);
    }
}
function reset() {
    minutes=0;
    hours=0;
    seconds=0;
    document.getElementById("clock").innerHTML="00:00:00";
    if (timer!=null) {
        clearInterval(timer);
    }
}
