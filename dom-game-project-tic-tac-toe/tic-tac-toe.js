function checkForWin(){
  if (document.querySelector("#x0-y2").textContent === document.querySelector("#x1-y2").textContent && document.querySelector("#x0-y2").textContent === document.querySelector("#x2-y2").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x0-y2").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x0-y1").textContent === document.querySelector("#x1-y1").textContent && document.querySelector("#x0-y1").textContent === document.querySelector("#x2-y1").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x0-y1").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x0-y0").textContent === document.querySelector("#x1-y0").textContent && document.querySelector("#x0-y0").textContent === document.querySelector("#x2-y0").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x0-y0").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x0-y0").textContent === document.querySelector("#x0-y1").textContent && document.querySelector("#x0-y0").textContent === document.querySelector("#x0-y2").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x0-y0").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x1-y0").textContent === document.querySelector("#x1-y1").textContent && document.querySelector("#x1-y0").textContent === document.querySelector("#x1-y2").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x1-y0").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x2-y0").textContent === document.querySelector("#x2-y1").textContent && document.querySelector("#x2-y0").textContent === document.querySelector("#x2-y2").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x2-y0").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x0-y0").textContent === document.querySelector("#x1-y1").textContent && document.querySelector("#x0-y0").textContent === document.querySelector("#x2-y2").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x0-y0").textContent + " WINS!!!";
  }
  else if (document.querySelector("#x2-y0").textContent === document.querySelector("#x1-y1").textContent && document.querySelector("#x2-y0").textContent === document.querySelector("#x0-y2").textContent) {
    document.querySelector("h1").textContent = document.querySelector("#x2-y0").textContent + " WINS!!!";
  }
}

localStorage.setItem("letterChosen", document.querySelector(".form-check-label").textContent)
var XOrO = localStorage.getItem("letterChosen");
document.querySelector("#win-status").textContent = "You are playing as " + XOrO +".";
alert("You are playing as " + XOrO +".")

checkForWin();
