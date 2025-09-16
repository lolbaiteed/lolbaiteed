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
      wheel.style.setProperty('--spin-angle', `${randomAngle}deg`);
      wheel.style.animation = 'spin 4s ease-out forwards';

      // setTimeout(() => {
      //   wheel.style.animation = '';
      //   const finalAngle = randomAngle % 360;
      //   let winningSegment = null;
      //   segments.forEach(segment => {
      //     const segmentAngle = parseFloat(segment.dataset.angle);
      //     const normalizedAngle = (segmentAngle + finalAngle) % 360;
      //     if (normalizedAngle < (360 / totalItems)) {
      //       winningSegment = segment;
      //     };
      //   });
      //   alert(`${winningSegment.textContent}`);
      // }, 4000);
    }

    const spinButton = document.getElementById("Spin");
    spinButton.onclick = function() {
      spin();
    }
}


startButton.onclick = function() {
    RunGame();
}
