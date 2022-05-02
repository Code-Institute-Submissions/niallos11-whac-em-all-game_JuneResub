//// score  area ////////////////////////////////////////
let score = 0;
let highscore = localStorage.getItem('highscore') || score;
let whacPosition

const boxs = document.querySelectorAll('.box')
const target = document.querySelector('.target')
const timeLeft = document.querySelector('.time-left')

renderScores = () => {
document.getElementById('js-score').innerText = score;
document.getElementById('js-highscore').innerText = highscore;
}
renderScores();

// if logic to update and render score + highscore //////////
updateHighscore = (score) => {
  if (score > highscore) {
    highscore = score;
  }
}

///////////// Random Box function  ///////////////////// 
function randomBox() {
  boxs.forEach(box => {
    box.classList.remove('target')
  })
  // Random location of target in boxes 
  let randomBox = boxs[Math.floor(Math.random() * 9)]
  randomBox.classList.add('target')

  whacPosition = randomBox.classList  // Declare hit position = to the random box hit
}
  boxs.forEach(box => {
    box.addEventListener('mousedown', () => {   // event listener for mouse down clicks
      if (box.className == whacPosition) {
        score ++;
        renderScores();
        localStorage.setItem('score'); // save score to local Storage
      }
    })
  })
// function for speed to move Target ///////////////////
function moveTarget() {
    timerId = setInterval(randomBox, 600)
  }
  //
  moveTarget()

///////////// timer countdown //////////////////////////

let currentTime = 10

let countDownTimerId = setInterval(countDown, 1000)

///////////// timer function ////////////////////////////

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
}
