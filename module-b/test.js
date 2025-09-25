/const wheel = document.getElementById("list");
const welcomeFrame = document.getElementById("welcomeFrame");
const segments = wheel.querySelectorAll("li");
const washingFrame = document.getElementById("washingFrame");
const totalItems = segments.length;
const wheelContainer = document.getElementById('wheel_container');
const resultFrame = document.getElementById("resultFrame");
const startButton = document.getElementById('Start');
const spinButton = document.getElementById("Spin");

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
const prizes = JSON.parse(prizesString);

function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function setCookie(cname, token, result) {
  const now = new Date();
  const timestamp = now.getTime();
  const value = `${token},+${result},+${timestamp}`;
  const expires = new Date(timestamp + 24 * 60 * 60 * 1000);
  document.cookie = `${cname}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(type) {
  const val = document.cookie;
  if (!val) return null;

  const parts = val.split(";");
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(",+")) return null;

  const [nameValue, result, timestamp] = lastPart.split(",+");
  const [name, token] = nameValue.includes("=") ? nameValue.split("=") : [null, null];

  switch (type) {
    case "name":
      return name || null;
    case "token":
      return token || null;
    case "result":
      return result === "true" ? true : result === "false" ? false : null;
    case "timestamp":
      return timestamp ? parseInt(timestamp) : null;
    default:
      return null;
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
  return { hours, minutes, seconds, remainingMs };
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

  return { timer, cname };
}

function animate(time) {
  const elements = document.querySelectorAll('.init');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * time);
  });
}

function resetAnimation() {
  const elements = document.querySelectorAll('.init');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove('visible');
    }, index * 500);
  });
  document.getElementById('footer').style.display = "none";
}

function Win(token, prizeName) {
  resultFrame.innerHTML = ''; // Clear previous content
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
  };

  const resTextStyles = {
    color: "white",
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
    marginBottom: "5px",
  };

  const cuponStyles = {
    position: "relative",
    height: "50px",
    width: "200px",
    backgroundColor: "#99c4ef",
    textAlign: "center",
  };

  const cuponTextStyles = {
    position: "absolute",
    fontFamily: "PlusJakartaSans",
    color: "white",
    textAlign: "center",
    bottom: "20%",
    left: "5%",
    margin: "0",
  };

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
  };

  const countdownStyles = {
    color: "white",
  };

  Object.assign(resultDiv.style, resultDivStyles);
  Object.assign(resHeader.style, resTextStyles);
  Object.assign(resDesc.style, resTextStyles);
  Object.assign(cupon.style, cuponStyles);
  Object.assign(cuponText.style, cuponTextStyles);
  Object.assign(copyButton.style, copyButtonStyles);
  Object.assign(countdown.style, countdownStyles);

  logo.src = "./images/sudsy-logo.svg";
  logo.style.width = "80px";
  copyButton.innerHTML = "Copy";
  cuponText.innerHTML = token;

  const prize = prizes.find(p => p.name === prizeName) || { name: "Unknown Prize", description: "Details not found" };
  resHeader.innerHTML = prize.name;
  resDesc.innerHTML = prize.description;

  cupon.appendChild(cuponText);
  cupon.appendChild(copyButton);
  resultDiv.appendChild(resHeader);
  resultDiv.appendChild(resDesc);
  resultDiv.appendChild(cupon);
  resultDiv.appendChild(divider);
  resultDiv.appendChild(logo);
  resultFrame.appendChild(resultDiv);
  resultFrame.appendChild(countdown);

  resultFrame.style.display = "flex";
  washingFrame.style.display = "none";
  startCountDown("countdown", countdown);
}

function Lose() {
  resultFrame.innerHTML = ''; // Clear previous content
  const resultDiv = document.createElement("div");
  const resultText = document.createElement("p");
  const countdown = document.createElement("p");

  const resultStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  const resultTextStyles = {
    color: "white",
    fontFamily: "PlusJakartaSans",
    fontSize: "2em",
    textAlign: "center",
  };

  const countdownStyles = {
    color: "white",
  };

  Object.assign(resultFrame.style, resultStyles);
  Object.assign(resultDiv.style, resultStyles);
  Object.assign(resultText.style, resultTextStyles);
  Object.assign(countdown.style, countdownStyles);

  resultText.innerHTML = "Better luck next time!";
  resultDiv.appendChild(resultText);
  resultFrame.appendChild(resultDiv);
  resultFrame.appendChild(countdown);

  resultFrame.style.display = "flex";
  washingFrame.style.display = "none";
  startCountDown("countdown", countdown);
}

function RunGame() {
  resetAnimation();

  function CreateWashingMachine() {
    welcomeFrame.style.display = "none";
    welcomeFrame.style.animation = "none";
    const washingFrameStyles = {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    };

    Object.assign(washingFrame.style, washingFrameStyles);

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
    const resultText = document.getElementById("result");
    const LogoTextTop = document.getElementById("Top");
    const LogoTextBot = document.getElementById("Bot");

    wheelContainer.style.setProperty('--spin-angle', `${randomAngle}deg`);
    wheelContainer.style.animation = 'spin 5s ease-in-out forwards';
    washingMachine.style.animation = 'shake 0.5s';
    washingMachine.style.animationIterationCount = 'infinite';
    indicatorText.style.animationIterationCount = '0';
    indicatorText.innerHTML = "SPIN";

    setTimeout(() => {
      const finalAngle = randomAngle % 360;
      const segmentIndex = Math.round(((360 - finalAngle) % 360) / (360 / totalItems));
      const winningSegment = segmentIndex;
      washingMachine.style.animationIterationCount = '0';

      const result = Number.isInteger(winningSegment / 2);
      const randomPrize = Math.floor(Math.random() * prizes.length);
      const token = generateToken();

      if (result) {
        indicatorText.innerHTML = "WIN";
        indicatorText.style.animation = 'blink 0.5s';
        indicatorText.style.animationIterationCount = 'infinite';
        washingMachine.style.animation = '';
      } else {
        indicatorText.innerHTML = "LOOSE";
        indicatorText.style.animation = 'blink 1.5s';
        indicatorText.style.animationIterationCount = 'infinite';
        washingMachine.style.animation = '';
      }

      const resultStyles = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      };

      const resultTextTopStyles = {
        fontSize: "4em",
      };

      const resultTextBotStyles = {
        fontSize: "3.5em",
      };

      setTimeout(() => {
        Object.assign(resultFrame.style, resultStyles);
        Object.assign(LogoTextTop.style, resultTextTopStyles);
        Object.assign(LogoTextBot.style, resultTextBotStyles);
        setCookie("countdown", token, result ? prizes[randomPrize].name : false);

        if (result) {
          resultText.innerHTML = "You win!";
          Win(token, prizes[randomPrize].name);
        } else {
          resultText.innerHTML = "Better luck next time!";
          Lose();
        }
        animate(250);
      }, 2000);

      console.log(result);
    }, 5000);
  }

  spinButton.onclick = function() {
    spin();
  };

  CreateWashingMachine();
}

window.addEventListener('load', () => {
  const cookieName = getCookie("name");
  if (cookieName !== null) {
    const token = getCookie("token");
    const result = getCookie("result");
    const timestamp = getCookie("timestamp");

    if (token && timestamp !== null && result !== null) {
      if (result) {
        Win(token, getCookie("result") === true ? getCookie("result") : "Unknown Prize");
      } else {
        Lose();
      }
    } else {
      animate(250);
    }
  } else {
    animate(250);
  }
});

startButton.onclick = function() {
  RunGame();
};
