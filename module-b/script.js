function animate() {
  const TopEl = document.querySelectorAll('.init');
  TopEl.forEach((TopEl, index) => {
    setTimeout(() => {
      TopEl.classList.add('visible');
    }, index * 500);
    document.removeEventListener('DOMContentLoaded', self);
  });
}

function resetAnimation() {
  const TopEl = document.querySelectorAll('.init');
  TopEl.forEach((TopEl, index) => {
    setTimeout(() => {
      TopEl.classList.remove('visible');
    }, index * 500);
    document.getElementById('footer').style.display = "none";
    document.removeEventListener('DOMContentLoaded', self);
  });
}

document.addEventListener('DOMContentLoaded', animate());

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
  resetAnimation();

  const wheel = document.getElementById("list");
  const welcomeFrmae = document.getElementById("welcomeFrame");
  const segments = wheel.querySelectorAll("li");
  const washingFrame = document.getElementById("washingFrame");
  const totalItems = segments.length;
  const wheelContainer = document.getElementById('wheel_container');
  const prizesString = `
    [
      {
        "name": "10% off",
        "description": "Get 10% off your next wash!"
      },
      {
        "name": "20% off",
        "description": "Get 20% off your next wash!"
      },
      {
        "name": "30% off",
        "description": "Get 30% off your next wash!"
      },
      {
        "name": "50% off",
        "description": "Get 50% off your next wash!"
      },
      {
        "name": "Free Wash",
        "description": "A free wash is on us!"
      },
      {
        "name": "Free Dry",
        "description": "A free drying is on us!"
      }
    ]
  `;

  function CreateWashingMachine() {
    // Hide previous frame
    welcomeFrmae.style.display = "none";
    welcomeFrmae.style.animation = "none";
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
    const randomAngle = Math.ceil(Math.random() * 360) + 3600;
    const washingMachine = document.getElementById("washingMachine");
    const resultFrame = document.getElementById("resultFrame");
    const resultText = document.getElementById("result");
    const LogoTextTop = document.getElementById("Top");
    const LogoTextBot= document.getElementById("Bot");


    wheelContainer.style.setProperty('--spin-angle', `${randomAngle}deg`);
    wheelContainer.style.animation = 'spin 5s ease-in-out forwards';
    washingMachine.style.animation = 'shake 0.5s';
    washingMachine.style.animationIterationCount = 'infinite';
    indicatorText.style.animationIterationCount = '0';
    indicatorText.innerHTML = "SPIN";

    let prizes = JSON.parse(prizesString);
    let result = null;

    setTimeout(() => {
      const finalAngle = randomAngle % 360;

      let winningSegment = null;

      const segmentIndex = Math.round(((360 - finalAngle) % 360) / 30);

      winningSegment = parseFloat(segmentIndex);
      washingMachine.style.animationIterationCount = '0';
      if (Number.isInteger(parseInt(winningSegment.toFixed(0)) / 2)) {
        let randomPrize = Math.round(Math.random() * prizes.length + 1);
        if (randomPrize >= 6) {
          randomPrize = 0;
        }
        indicatorText.innerHTML = "WIN";
        indicatorText.style.animation = 'blink 0.5s';
        indicatorText.style.animationIterationCount = 'infinite'
        washingMachine.style.animation = ' ';
        console.log(prizes[randomPrize].name);
        result = true;
      } else {
        indicatorText.innerHTML = "LOOSE";
        indicatorText.style.animation = 'blink 1.5s';
        indicatorText.style.animationIterationCount = 'infinite';
        washingMachine.style.animation = ' ';
        result = false;
      }
      let resultStyles = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }

      let resultTextTopStyles = {
        fontSize: "4em",
      }
      
      let resultTextBotStyles = {
        fontSize: "3.5em",
      }

      if (result != true) {
        washingFrame.style.display = "none";
        resultFrame.style.display = "flex";
        resultText.innerHTML = "You loose";
        Object.assign(resultFrame.style, resultStyles);
        Object.assign(LogoTextTop.style, resultTextTopStyles);
        Object.assign(LogoTextBot.style, resultTextBotStyles);
        animate();
      } else {
        washingFrame.style.display = "none";
        resultText.innerHTML = "You win!";
        Object.assign(resultFrame.style, resultStyles);
        Object.assign(LogoTextTop.style, resultTextTopStyles);
        Object.assign(LogoTextBot.style, resultTextBotStyles);
        animate();
      }
    }, 5000);
  }

  const spinButton = document.getElementById("Spin");
  spinButton.onclick = function() {
    spin();
  }

  CreateWashingMachine();
}

startButton.onclick = function() {
  RunGame();
}
