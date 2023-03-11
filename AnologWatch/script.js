setInterval(setclock,1000)

const hourElem=document.getElementById("hour")
const minutesElem=document.getElementById("minutes")
const secondElem=document.getElementById("second")



function setclock() {
    const currentDate=new Date()
    const secondRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondRatio+currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio+currentDate.getHours())/12
    setRotation(secondElem,secondRatio);
    setRotation(minutesElem,minutesRatio);
    setRotation(hourElem,hoursRatio);
}
function setRotation(element,angle) {
    element.style.setProperty("--rot",angle*360)
    
}
