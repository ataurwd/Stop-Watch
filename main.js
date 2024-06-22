
let time
let value = 0
let running = false


//This if for Timer Started
const startTimer = () => {
    if(!running){
        running = true;
        time = setInterval 
        ( updateTimer, 1000)
    }
}

//This is for Stop Timer
const stopTimer = () => {
    if(running){
        running = false
        clearInterval(time)
    }
}

//This Is for Timer Reset
const resetTimer = () => {
    stopTimer()
    value = 0
    updateDisplay()
}

//This is for update Timer

const updateTimer = () => {
    value++
    updateDisplay()
}


//This is for Update Display Function 
//This function for showing result in UI
const updateDisplay = () =>{
    const hours = Math.floor(value/ 3600);
    const minutes = Math.floor((value % 3600)/ 60);
    const seconds = value % 60;

    const formatedTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById('timer').textContent = formatedTime;
}