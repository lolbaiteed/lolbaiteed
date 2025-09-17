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

  const wheel = document.getElementById("list");
  const segments = wheel.querySelectorAll("li");
  const totalItems = segments.length; 
  const wheelContainer = document.getElementById('wheel_container');

    function CreateWashingMachine(){
        // Hide previous frame
        const welcomeFrmae = document.getElementById("welcomeFrame");
        welcomeFrmae.style.display = "none";
        const washingFrame = document.getElementById("washingFrame");
        washingFrame.style.display = "block";


        segments.forEach((segment, index) => {
          const angle = (360 / totalItems) * index; 
          segment.style.transform = `rotate(${angle}deg)`;
          segment.dataset.angle = angle;
        });
    }
    CreateWashingMachine();

    function spin() {
      const randomAngle = Math.floor(Math.random() * 360) + 1080;
      console.log(randomAngle);
      wheelContainer.style.setProperty('--spin-angle', `${randomAngle}deg`);
      wheelContainer.style.animation = 'spin 4s ease-out forwards';

      setTimeout(() => {
        const finalAngle = randomAngle % 360;

        if (!Number.isInteger(finalAngle)) {
          console.log(finalAngle);
        } 

        let winningSegment = null;

        const segmentIndex = Math.round(((360 - finalAngle) % 360) / 30);
        // const cstyles = window.getComputedStyle(segments[segmentIndex]);
        // winningSegment = cstyles.getPropertyValue("background-color");
        winningSegment = segments[segmentIndex].textContent;
        console.log(winningSegment);
      }, 4000);
    }

    const spinButton = document.getElementById("Spin");
    spinButton.onclick = function() {
      spin();
    }
}


startButton.onclick = function() {
    RunGame();
}
