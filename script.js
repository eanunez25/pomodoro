/*
const lessSession = document.querySelector(".less-session");
const moreSession = document.querySelector(".more-session");
const sessionMins = document.querySelector(".mins-session");
const lessBreak = document.querySelector(".less-break");
const moreBreak = document.querySelector(".more-break");
const breakMins = document.querySelector(".mins-break");

lessSession.addEventListener("click", () => {
    (sessionMins.textContent < 2) ? sessionMins.textContent = 1 : sessionMins.textContent--;
});

moreSession.addEventListener("click", () => sessionMins.textContent++);

lessBreak.addEventListener("click", () => {
    (breakMins.textContent < 2) ? breakMins.textContent = 1 : breakMins.textContent--;
});

moreBreak.addEventListener("click", () => breakMins.textContent++);


const play = document.querySelector(".play");
const countdown = document.querySelector(".countdown");
let x = "";
let y = "";
play.addEventListener("click", () => {
    x = setInterval(startSession, 1000);
})

let counter = 0;
let status = document.querySelector(".status");
startSession = () => {
    status.textContent = "Focus";
    let seconds = sessionMins.textContent * 60;
    counter++;
    let secondsLeft = seconds - counter;
    let min = Math.floor(secondsLeft / 60);
    let sec = secondsLeft % 60;
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    countdown.textContent = min + ":" + zeroPad(sec,2);
    if (min == 0 && sec == 0) {
        clearInterval(x);
        status.textContent = "Ready to relax?";
        play.addEventListener("click", () => {
            y = setInterval(startBreak,1000)
        });
    }
}

let counter2 = 0;
startBreak = () => {
    status.textContent = "Relax";
    let seconds = breakMins.textContent * 60;
    counter2++;
    let secondsLeft = seconds - counter2;
    let min = Math.floor(secondsLeft / 60);
    let sec = secondsLeft % 60;
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    countdown.textContent = min + ":" + zeroPad(sec,2);
    if (min == 0 && sec == 0) {
        clearInterval(setInterval(startBreak,1000));
        status.textContent = "Ready to focus?";
    }
}
*/

// interface
const remote = document.querySelectorAll(".remote");
const timer = document.querySelector('.countdown');
const buttons = document.querySelectorAll(".settings")
const sessionSetting = document.querySelector(".mins-session");
const breakSetting = document.querySelector(".mins-break");

// default settings
const defaultSession = 1500;
const defaultBreak = 300;

let sessionTime = defaultSession;
let breakTime = defaultBreak;

// on load
timer.textContent = formatTime(defaultSession);

//button presses
remote.forEach((image) => {
    image.addEventListener("click", e => {
        let clickedImage = e.target;
        console.log(clickedImage);
    })
})

buttons.forEach((button) => {
    button.addEventListener("click", e => {
        let clickedButton = e.target;
        console.log(clickedButton);
        setTimes(clickedButton);
    })
})

// functions
function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = zeroPad(sec);
    time = `${min}:${sec}`;
    return time;
}

function zeroPad(num) {
    return String(num).padStart(2, '0');
}

function setTimes(button) {
    if (button.textContent == "<" && button.id == "less-session") {
        sessionSetting.textContent--;
        let mins = sessionSetting.textContent * 60
        timer.textContent = formatTime(mins);
    } else if (button.textContent == ">") {
        sessionSetting.textContent++;
        let mins = sessionSetting.textContent * 60
        timer.textContent = formatTime(mins);
    } else if (button.class == "less-break") {
        breakSetting.textContent--;
    } else {
        
    } 
}