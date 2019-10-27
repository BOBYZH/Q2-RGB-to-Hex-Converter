const convertButton = document.querySelector(".convert")
let red = document.querySelector("#red-value")
let green = document.querySelector("#green-value")
let blue = document.querySelector("#blue-value")
let hexInput = document.querySelector("#hex-value")
let hexColor = document.querySelector(".big-color-square")

// verify RGB color value
function RGBCheck(color) {
  if (color.value > 255 || color.value < 0 || color.value % 1 !== 0) { // when not valid
    RGBError()
  } else if (color.value.length === 0) { // blank columns will be defined as "0" 
    color.value = 0
  }
}

function RGBError() { // invalid value(s) will lead to reset
  red.value = 0
  green.value = 0
  blue.value = 0
  hexColor.style.backgroundColor = 'rgb(0, 0, 0)'
  alert("Please enter valid values!")
}

// Fixed from second answer of this thread "https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript" to pad "0"
String.prototype.pad = function (size) {
  let s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

convertButton.addEventListener("click", e => {
  RGBCheck(red)
  RGBCheck(green)
  RGBCheck(blue)
  hexColor.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
  hexInput.value = `#${Number(red.value).toString(16).pad()}${Number(green.value).toString(16).pad()}${Number(blue.value).toString(16).pad()}`
})