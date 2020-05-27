document.querySelector("#submitChoice").onclick = function(event) {
  localStorage.setItem("letterChosen", document.querySelector("input[name='inlineRadioOptions']:checked").value);
}
