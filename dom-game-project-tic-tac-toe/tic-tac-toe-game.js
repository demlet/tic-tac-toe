function checkForWin(positions){
  if (document.querySelector("#x0y2").innerText === document.querySelector("#x1y2").innerText
  && document.querySelector("#x0y2").innerText === document.querySelector("#x2y2").innerText
  && document.querySelector("#x0y2").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x0y2").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x0y1").innerText === document.querySelector("#x1y1").innerText
  && document.querySelector("#x0y1").innerText === document.querySelector("#x2y1").innerText
  && document.querySelector("#x0y1").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x0y1").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x0y0").innerText === document.querySelector("#x1y0").innerText
  && document.querySelector("#x0y0").innerText === document.querySelector("#x2y0").innerText
  && document.querySelector("#x0y0").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x0y0").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x0y0").innerText === document.querySelector("#x0y1").innerText
  && document.querySelector("#x0y0").innerText === document.querySelector("#x0y2").innerText
  && document.querySelector("#x0y0").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x0y0").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x1y0").innerText === document.querySelector("#x1y1").innerText
  && document.querySelector("#x1y0").innerText === document.querySelector("#x1y2").innerText
  && document.querySelector("#x1y0").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x1y0").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x2y0").innerText === document.querySelector("#x2y1").innerText
  && document.querySelector("#x2y0").innerText === document.querySelector("#x2y2").innerText
  && document.querySelector("#x2y0").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x2y0").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x0y0").innerText === document.querySelector("#x1y1").innerText
  && document.querySelector("#x0y0").innerText === document.querySelector("#x2y2").innerText
  && document.querySelector("#x0y0").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x0y0").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (document.querySelector("#x2y0").innerText === document.querySelector("#x1y1").innerText
  && document.querySelector("#x2y0").innerText === document.querySelector("#x0y2").innerText
  && document.querySelector("#x2y0").innerText !== "") {
    document.querySelector("h1").innerText = document.querySelector("#x2y0").innerText + " WINS!!!!!!!!!!!!!!!!!!!!!!!!!!";
    return true;
  }
  else if (boardPositions.length == 0) {
    document.querySelector("h1").innerText = "DRAW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var XOrO = localStorage.getItem("letterChosen");

if (XOrO === 'X') {
  var opponentLetter = 'O';
}
else {
  var opponentLetter = 'X';
}

var boardPositions = ["#x0y0", "#x1y0", "#x2y0", "#x0y1", "#x1y1", "#x2y1", "#x0y2", "#x1y2", "#x2y2"];

function aiMove(positions) {
  var moveMade = false;
  while (!moveMade) {
    var moveToTry = getRandomInt(positions.length);
    if (document.querySelector(positions[moveToTry]).innerText === "") {
      document.querySelector(positions[moveToTry]).innerText = opponentLetter;
      positions.splice(moveToTry, 1);
      moveMade = true;
    }
    else {
      positions.splice(moveToTry, 1);
    }
  }
}

var firstPlayer = getRandomInt(2);

if (firstPlayer === 0) {
  document.querySelector("#winStatus").innerText = "You are playing as " + XOrO + ". Super intelligent AI as " + opponentLetter + " has gone first!!!!!";
  aiMove(boardPositions);
}
else {
  document.querySelector("#winStatus").innerText = "You are playing as " + XOrO + ". Super intelligent AI is " + opponentLetter + ". You go first!!!!!";
}

document.getElementById("x0y2").addEventListener("click", function (event) {
  if (document.querySelector("#x0y2").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x0y2").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x0y2"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x1y2").addEventListener("click", function (event) {
  if (document.querySelector("#x1y2").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x1y2").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x1y2"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x2y2").addEventListener("click", function (event) {
  if (document.querySelector("#x2y2").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x2y2").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x2y2"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x0y1").addEventListener("click", function (event) {
  if (document.querySelector("#x0y1").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x0y1").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x0y1"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x1y1").addEventListener("click", function (event) {
  if (document.querySelector("#x1y1").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x1y1").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x1y1"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x2y1").addEventListener("click", function (event) {
  if (document.querySelector("#x2y1").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x2y1").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x2y1"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x0y0").addEventListener("click", function (event) {
  if (document.querySelector("#x0y0").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x0y0").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x0y0"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x1y0").addEventListener("click", function (event) {
  if (document.querySelector("#x1y0").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x1y0").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x1y0"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
document.getElementById("x2y0").addEventListener("click", function (event) {
  if (document.querySelector("#x2y0").innerText === "" && boardPositions.length > 0 && !checkForWin(boardPositions)) {
    document.querySelector("#x2y0").innerText = XOrO;
    boardPositions.splice(boardPositions.indexOf("#x2y0"), 1);
    if (!checkForWin(boardPositions)) {
      aiMove(boardPositions);
      checkForWin(boardPositions);
    }
  }
});
