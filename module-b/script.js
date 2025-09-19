function animate(time) {
  const TopEl = document.querySelectorAll('.init');
  TopEl.forEach((TopEl, index) => {
    setTimeout(() => {
      TopEl.classList.add('visible');
    }, index * time);
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

document.addEventListener('DOMContentLoaded', animate(250));

const startButton = document.getElementById('Start');

let prevAttemptDate = null;

function setCookie(cname, cval, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cval + ";" + expires + ";path=/";
  console.log(document.cookie);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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
  let test = "test";
  setCookie("prevAttempt", test, 1);
  console.log(getCookie("prevAttempt"));

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
    const LogoTextBot = document.getElementById("Bot");


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
        indicatorText.innerHTML = "WIN";
        indicatorText.style.animation = 'blink 0.5s';
        indicatorText.style.animationIterationCount = 'infinite'
        washingMachine.style.animation = ' ';
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

      function genereateCupon() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }

      function showPrize() {
        let randomPrize = Math.round(Math.random() * prizes.length + 1);
        if (randomPrize >= 6) {
          randomPrize = 0;
        }

        const resultDiv = document.createElement("div");
        const resHeader = document.createElement("h2");
        const resDesc = document.createElement("p");
        const divider = document.createElement("hr");
        const logo = document.createElement("img");

        logo.src = "./images/sudsy-logo.svg";
        logo.style.width = "1px";

        const cupon = document.createElement("div");
        const cuponText = document.createElement("h2");
        const copyButton = document.createElement("button");

        copyButton.innerHTML = "Copy";

        const resultDivStyles = {
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "320px",
          height: "200px",
          backgroundColor: "var(--button)",
        }

        const resTextStyles = {
          color: "white",
          fontFamily: "PlusJakartaSans",
          textAlign: "center",
          marginBottom: "5px",
        }

        const cuponStyles = {
          position: "relative",
          height: "50px",
          width: "200px",
          backgroundColor: "#99c4ef",
          textAlign: "center",
        }

        const cuponTextStyles = {
          position: "absolute",
          fontFamily: "PlusJakartaSans",
          color: "white",
          textAlign: "center",
          bottom: "20%",
          left: "5%",
          margin: "0",
        }

        const copyButtonStyles = {
          position: "absolute",
          borderRadius: "0px",
          padding: "5px 10px",
          right: "5%",
          top: "20%",
          boxShadow: "none",
          background: "white",
          color: "black",
          fontFamily: "PlusJakartaSans",
          fontSize: "15px",
        }

        Object.assign(resHeader.style, resTextStyles);
        Object.assign(resDesc.style, resTextStyles);
        Object.assign(resultDiv.style, resultDivStyles);

        cuponText.innerHTML = genereateCupon();

        Object.assign(cupon.style, cuponStyles);
        Object.assign(cuponText.style, cuponTextStyles);
        Object.assign(copyButton.style, copyButtonStyles);

        cupon.appendChild(cuponText);
        cupon.appendChild(copyButton);

        resHeader.innerHTML = prizes[randomPrize].name;
        resDesc.innerHTML = prizes[randomPrize].description;

        resultDiv.appendChild(resHeader);
        resultDiv.appendChild(resDesc);
        resultDiv.appendChild(cupon);
        resultDiv.appendChild(divider);
        resultDiv.appendChild(logo);
        resultFrame.appendChild(resultDiv);
      }

      if (result != true) {
        setTimeout(() => {
          washingFrame.style.display = "none";
          resultFrame.style.display = "flex";
          resultText.innerHTML = "Better luck next time!";
          Object.assign(resultFrame.style, resultStyles);
          Object.assign(LogoTextTop.style, resultTextTopStyles);
          Object.assign(LogoTextBot.style, resultTextBotStyles);
          animate(250);
        }, 2000);
      } else {
        setTimeout(() => {
          washingFrame.style.display = "none";
          resultText.innerHTML = "You win!";
          Object.assign(resultFrame.style, resultStyles);
          Object.assign(LogoTextTop.style, resultTextTopStyles);
          Object.assign(LogoTextBot.style, resultTextBotStyles);
          showPrize();
          animate(250);
        }, 2000);
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
