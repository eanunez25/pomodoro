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