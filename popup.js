const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const randomBtn = document.querySelector('.random')
const body = document.querySelector('.container')
const message = document.getElementById('message')
const hexcodes = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

// EVENTS

input1.addEventListener('input', function () {
  let firstColor = input1.value
  body.style.background = `linear-gradient(90deg, ${firstColor}, ${input2.value})`
  updateColorMessage()
})

input2.addEventListener('input', function () {
  let secondColor = input2.value
  body.style.background = `linear-gradient(90deg, ${input1.value}, ${secondColor})`
  updateColorMessage()
})

randomBtn.addEventListener('click', function () {
  applyRandomColor()
})

// CUSTOM FUNCTION
function updateColorMessage() {
  message.innerText = `background : linear-gradient(90deg, ${input1.value}, ${input2.value})`
}

function getRandomColor() {
  let randomColor = '#'
  while (randomColor.length < 7) {
    randomColor =
      randomColor + hexcodes[Math.floor(Math.random() * hexcodes.length)]
  }
  return randomColor
}

function applyRandomColor() {
  let randomColor = ''
  randomColor = getRandomColor()
  let firstRandom = getRandomColor()
  let secondRandom = getRandomColor()

  body.style.background = `linear-gradient(90deg, ${firstRandom}, ${secondRandom})`
  console.log(firstRandom, secondRandom)
  input1.value = firstRandom
  input2.value = secondRandom
  updateColorMessage()
}

// RUN AT LOAD
updateColorMessage()
applyRandomColor()
