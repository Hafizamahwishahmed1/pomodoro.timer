const circularProgressBar = document.querySelector('#circularProgressBar');
const circularProgressBarNumber = document.querySelector('#circularProgressBar');
const buttonTypePomodoro = document.querySelector('#buttonTypePomodoro');
const buttonTypeShortBreak = document.querySelector('#buttonTypeShortBreak');


const pomodoroTimerInSeconds = 1500;
const shortBreakTimerInSeconds = 300;
const TIMER_TYPE_POMODORO = 'PMODORO';
const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

let progressInteval;
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;

function formatNumberInStringMinute(number){

    const minutes = Math.trunc(number / 60)
                    .toString()
                    .padStart(2, '0');
    const seconds = Math.trunc(number % 60) 
                    .toString()
                    .padStart(2, '0'); 
                    
    return `${minutes}: ${seconds}`;                
}

const startTimer = () =>{
    progressInteval = setInterval(() =>{
        timerValue --;
        setInfoCircularProgressBar()
    }, 1000);
}

const stopTimer = () => clearInterval(progressInteval);

const resetTimer = () =>{
    clearInterval(progressInteval);

    timerValue = (pomodoroType === TIMER_TYPE_POMODORO)
                 ? pomodoroTimerInSeconds : shortBreakTimerInSeconds;

    multiplierFactor = 360 / timerValue;
    setInfoCircularProgressBar();
             
}

function setInfoCircularProgressBar(){

    if(timerValue === 0){
        startTimer();
        
    }

    circularProgressBarNumber.textContent =
    `${formatNumberInStringMinute(timerValue)}`;

    circularProgressBar.style.background =
    `(${timerValue * multiplierFactors}`;
    
}

const setPomodoroType = (type) =>{
      pomodoroType = type;

      if(type === TIMER_TYPE_POMODORO){
        buttonTypeShortBreak.classList.remove("active");
        buttonTypePomodoro.classList.add("active");

      }else{
        buttonTypePomodoro.classList.remove("active");
        buttonTypeShortBreak.classList.add("active");

      }

      resetTimer();
}