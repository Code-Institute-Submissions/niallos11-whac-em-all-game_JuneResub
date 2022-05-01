let score = 0;
let highscore = localStorage.getItem('highscore') || score;

const boxs = document.querySelectorAll('.box')
const target = document.querySelector('.target')
const timeLeft = document.querySelector('.time-left')

renderScores = () => {
document.getElementById('js-score').innerText = score;
document.getElementById('js-highscore').innerText = highscore;
}
renderScores();