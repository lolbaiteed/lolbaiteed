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

function setCookie(cname, token, result, prize, prizeDesc) {
  const now = new Date();
  const timestamp = now.getTime();
  const value = `${token}, + ${result}, + ${prize}, + ${prizeDesc}, + ${timestamp}`;
  const expires = new Date(timestamp + 24 * 60 * 60 * 1000);
  document.cookie = `${cname}=${value}; expires=${expires.toUTCString()}; path=/;`;
}

function getCookie(type) {
  const val = `${document.cookie}`;
  const parts = val.split(";");

  switch (type) {
    case "name":
      return parts.pop().split(', +')[0].split("=")[0];
    case "value":
      return parts.pop().split(', +')[1];
    case "timestamp":
      return parseInt(parts.pop().split(', +')[4]);
    case "token":
      return parts.pop().split(', +')[0].split("=")[1];
    case "prize":
      return parts.pop().split(', +')[2];
    case "prizeDesc":
      return parts.pop().split(', +')[3];
    default: return null;
  }
}

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
const resultFrame = document.getElementById("resultFrame");

const wheel = document.getElementById("list");
const welcomeFrmae = document.getElementById("welcomeFrame");
const segments = wheel.querySelectorAll("li");
const washingFrame = document.getElementById("washingFrame");
const totalItems = segments.length;
const wheelContainer = document.getElementById('wheel_container');
const resultText = document.getElementById("result");
const LogoTextTop = document.getElementById("Top");
const LogoTextBot = document.getElementById("Bot");
const startButton = document.getElementById('Start');

function Win(status) {
  let resultStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }
  welcomeFrmae.style.display = "none";
  Object.assign(resultFrame.style, resultStyles);

  const resultDiv = document.createElement("div");
  const resHeader = document.createElement("h2");
  const resDesc = document.createElement("p");
  const divider = document.createElement("hr");
  const logo = document.createElement("img");

  const cupon = document.createElement("div");
  const cuponText = document.createElement("h2");
  const copyButton = document.createElement("button");

  const countdown = document.createElement("p");

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

  const countdowsStyles = {
    color: "white",
  }

  logo.src = "./images/sudsy-logo.svg";
  logo.style.width = "80px";

  if (status === "check") {
    cuponText.innerHTML = getCookie("token");
    startCountDown("countdown", countdown);
    Object.assign(resHeader.style, resTextStyles);
    Object.assign(resDesc.style, resTextStyles);
    Object.assign(resultDiv.style, resultDivStyles);

    Object.assign(cupon.style, cuponStyles);
    Object.assign(cuponText.style, cuponTextStyles);
    Object.assign(copyButton.style, copyButtonStyles);
    copyButton.innerHTML = "Copy";
    cupon.appendChild(cuponText);
    cupon.appendChild(copyButton);

    resHeader.innerHTML = getCookie("prize");
    resDesc.innerHTML = getCookie("prizeDesc");

    Object.assign(countdown.style, countdowsStyles);

    resultDiv.appendChild(resHeader);
    resultDiv.appendChild(resDesc);
    resultDiv.appendChild(cupon);
    resultDiv.appendChild(divider);
    resultDiv.appendChild(logo);
    resultFrame.appendChild(resultDiv);
    resultFrame.appendChild(countdown);
  } else {

    let prizes = JSON.parse(prizesString);

    let randomPrize = Math.round(Math.random() * prizes.length + 1);
    if (randomPrize >= 6) {
      randomPrize = 0;
    }

    Object.assign(resHeader.style, resTextStyles);
    Object.assign(resDesc.style, resTextStyles);
    Object.assign(resultDiv.style, resultDivStyles);

    cuponText.innerHTML = genereateToken();

    Object.assign(cupon.style, cuponStyles);
    Object.assign(cuponText.style, cuponTextStyles);
    Object.assign(copyButton.style, copyButtonStyles);
    copyButton.innerHTML = "Copy";

    cupon.appendChild(cuponText);
    cupon.appendChild(copyButton);

    resHeader.innerHTML = prizes[randomPrize].name;
    resDesc.innerHTML = prizes[randomPrize].description;

    Object.assign(countdown.style, countdowsStyles);

    resultDiv.appendChild(resHeader);
    resultDiv.appendChild(resDesc);
    resultDiv.appendChild(cupon);
    resultDiv.appendChild(divider);
    resultDiv.appendChild(logo);
    resultFrame.appendChild(resultDiv);
    resultFrame.appendChild(countdown);
    setCookie("countdown", cuponText.textContent, true, resHeader.textContent, resDesc.textContent);
    startCountDown("countdown", countdown);
  }
}

function loose(status) {
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
  if (status === "check") {
    const countdown = document.createElement("p");
    welcomeFrmae.style.display = "none";
    resultText.innerHTML = "Better luck next time!";

    Object.assign(resultFrame.style, resultStyles);
    Object.assign(LogoTextTop.style, resultTextTopStyles);
    Object.assign(LogoTextBot.style, resultTextBotStyles);

    startCountDown("countdown", countdown);
    countdown.style.color = "white";
    resultFrame.appendChild(countdown);
  } else {
    const countdown = document.createElement("p");
    washingFrame.style.display = "none";
    resultText.innerHTML = "Better luck next time!";

    Object.assign(resultFrame.style, resultStyles);
    Object.assign(LogoTextTop.style, resultTextTopStyles);
    Object.assign(LogoTextBot.style, resultTextBotStyles);

    startCountDown("countdown", countdown);
    countdown.style.color = "white";
    resultFrame.appendChild(countdown);
    setCookie("countdown", "undefiend", false, null, null);
  }
}


function calcRemainingTime(cname) {
  const timestamp = getCookie("timestamp");
  if (!timestamp) return null;

  const now = new Date().getTime();
  const expiry = timestamp + 24 * 60 * 60 * 1000;
  const remainingMs = expiry - now;

  if (remainingMs <= 0) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    return null;
  }

  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);
  ;
  return { hours, minutes, seconds, remainingMs };
}

function genereateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function startCountDown(cname, el) {
  let timer = setInterval(() => {
    const time = calcRemainingTime(cname);
    if (!time) {
      console.log("Countdown reset");
      clearInterval(timer);
      return;
    }
    el.innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`;
  }, 1000);

  return { timer, cname }
}

function RunGame() {
  resetAnimation();

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

    wheelContainer.style.setProperty('--spin-angle', `${randomAngle}deg`);
    wheelContainer.style.animation = 'spin 5s ease-in-out forwards';
    washingMachine.style.animation = 'shake 0.5s';
    washingMachine.style.animationIterationCount = 'infinite';
    indicatorText.style.animationIterationCount = '0';
    indicatorText.innerHTML = "SPIN";

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

      if (result != true) {
        setTimeout(() => {
          washingFrame.style.display = "none";
          resultFrame.style.display = "flex";
          resultText.innerHTML = "Better luck next time!";

          Object.assign(resultFrame.style, resultStyles);
          Object.assign(LogoTextTop.style, resultTextTopStyles);
          Object.assign(LogoTextBot.style, resultTextBotStyles);
          loose();
          animate(250);
        }, 2000);
      } else {
        setTimeout(() => {
          washingFrame.style.display = "none";
          resultText.innerHTML = "You win!";
          Object.assign(resultFrame.style, resultStyles);
          Object.assign(LogoTextTop.style, resultTextTopStyles);
          Object.assign(LogoTextBot.style, resultTextBotStyles);
          Win();
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

window.addEventListener('load', () => {
  if (getCookie("name") != null) {
    if (getCookie("value" === true)) {
      startButton.style.display = "none"
      Win("check");
      animate(250)
      console.log("win");
    } else {
      startButton.style.display = "none"
      loose("check");
      animate(250);
      console.log("loose")
    }
  } else {
    animate(250)
  }
})
