document.addEventListener('DOMContentLoaded', () => {
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
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cval + ";" + expires + ";path=/";
  console.log(document.cookie);
}

function CheckDate() {
  if (prevAttemptDate === null) {
    prevAttemptDate = new Date().toUTCString();
    console.log(prevAttemptDate);
    console.log("date set");
  } else if (prevAttemptDate != new Date().toUTCString()) {
    console.log("OK");
  }
}

function RunGame() {
  CheckDate();

  const wheel = document.getElementById("list");
  const segments = wheel.querySelectorAll("li");
  const totalItems = segments.length;
  const wheelContainer = document.getElementById('wheel_container');

  function CreateWashingMachine() {
    // Hide previous frame
    const welcomeFrmae = document.getElementById("welcomeFrame");
    welcomeFrmae.style.display = "none";
    const washingFrame = document.getElementById("washingFrame");
    let wahsingFrameStyles = {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }

    Object.assign(washingFrame.style, wahsingFrameStyles);


    segments.forEach((segment, index) => {
      const angle = (360 / totalItems) * index;
      segment.style.transform = `rotate(${angle}deg)`;
      segment.dataset.angle = angle;
    });
  }

  function spin() {
    const indicatorText = document.getElementById("indicatorText");
    const randomAngle = Math.ceil(Math.random() * 360) + 1080;
    const washingMachine = document.getElementById("washingMachine");
    wheelContainer.style.setProperty('--spin-angle', `${randomAngle}deg`);
    wheelContainer.style.animation = 'spin 4s ease-out forwards';
    washingMachine.style.animation = 'shake 0.5s';
    washingMachine.style.animationIterationCount = 'infinite';
    indicatorText.innerHTML = "SPIN";

    setTimeout(() => {
      const finalAngle = randomAngle % 360;

      let winningSegment = null;

      const segmentIndex = Math.round(((360 - finalAngle) % 360) / 30);
      console.log(Math.fround(segmentIndex).toFixed(2));

      winningSegment = parseFloat(segmentIndex);
      console.log(winningSegment);
      washingMachine.style.animationIterationCount = '0';
      if (Number.isInteger(parseInt(winningSegment.toFixed(0)) / 2)) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    }, 4000);
  }

  const spinButton = document.getElementById("Spin");
  spinButton.onclick = function() {
    let result = null;
    spin(result);
    console.log(result);
  }

  CreateWashingMachine();
}

startButton.onclick = function() {
  RunGame();
}
