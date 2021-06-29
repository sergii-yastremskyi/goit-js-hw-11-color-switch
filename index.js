const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');


colorChanger = () => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}



timerChanger = () => {
    if (isActive) {
        return;
    }
    timerId =  setInterval(() => {
            colorChanger()
    }, 1000);
    console.log(timerId);
    isActive = true;
       
}
    
stopTimer = () => {
    clearInterval(timerId);
    isActive = false;
}

startBtn.addEventListener('click', timerChanger);
stopBtn.addEventListener('click', stopTimer);
