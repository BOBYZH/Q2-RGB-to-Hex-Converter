let redValue = document.querySelector("#red-value")
let greenValue = document.querySelector("#green-value")
let blueValue = document.querySelector("#blue-value")
let redRange = document.querySelector("#red-range")
let greenRange = document.querySelector("#green-range")
let blueRange = document.querySelector("#blue-range")
let background = document.querySelector("body")
let hexValue = document.querySelector("#hex-value")

//alter value according to range

//event change can't change RGB values immediately with changing slider
// redRange.addEventListener('change', (event) => {
//   redValue.innerText = redRange.value
// })

//so use another way:
redValue.innerText = redRange.value
redRange.oninput = function () {
  redValue.innerHTML = this.value;
  changeHexColor()
}

greenValue.innerText = greenRange.value
greenRange.oninput = function () {
  greenValue.innerHTML = this.value;
  changeHexColor()
}

blueValue.innerText = blueRange.value
blueRange.oninput = function () {
  blueValue.innerHTML = this.value;
  changeHexColor()
}

// Fixed from second answer of this thread "https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript" to pad "0"
String.prototype.pad = function (size) {
  let s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

function changeHexColor() {
  background.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`
  hexValue.innerText = `#${Number(redRange.value).toString(16).pad()}${Number(greenRange.value).toString(16).pad()}${Number(blueRange.value).toString(16).pad()}`
}