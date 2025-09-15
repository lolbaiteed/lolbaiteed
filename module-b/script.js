document.addEventListener('DOMContentLoaded',() => {
    const TopEl = document.querySelectorAll('.init');
    TopEl.forEach((TopEl, index) => {
        setTimeout(() => {
            TopEl.classList.add('visible');
        }, index * 500);
    });
    const BotEl = document.querySelector('.footer');
    function delay() {
        BotEl.classList.add('visible');
    }
    setTimeout(delay, 800);
})

const startButton = document.getElementById('Start');

let prevAttemptDate = null;

function setCookie(cname, cval, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60  * 1000));
    let expires = "expires="+date.toUTCString();
    document.cookie = cname + "=" + cval + ";" + expires + ";path=/";
    console.log(document.cookie);
}

function CheckDate() {
    if (prevAttemptDate === null) {
        prevAttemptDate = new Date().toUTCString();
        console.log(prevAttemptDate);
        console.log("date set");
    } else if (prevAttemptDate != new Date().toUTCString()){
        console.log("OK");
    }
}

function RunGame() {
    CheckDate();

    function CreateWashingMachine(){
        // Hide previous frame
        const welcomeFrmae = document.getElementById("welcomeFrame");
        welcomeFrmae.style.display = "none";
        const washingFrame = document.getElementById("washingFrame");
        washingFrame.style.display = "block";
    }
    CreateWashingMachine();
}


startButton.onclick = function() {
    RunGame();
}