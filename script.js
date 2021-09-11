// You got this! 💫

// work and break buttons being selected by id for jquery syntax use
const work = $('#work-btn');
const shortBreak =$("#short-break-btn");
const longBreak =$("#long-break-btn");
const stop=$("stop-btn");
const timeDisplay = $('#time-display');
const workSessions =$('#workSessionCount');
const shortBreaks =$('#shortBreakCount');
const longBreaks =$('#longBreakCount');
const stops =$('#stopCount');
// const currentDayTime = $('#currentDay');
let totalWork =0;
let totalShort =0;
let totalLong =0;
let totalStop =0;

// selection by class
 const timer = $(".timer");
 const footerHide = $(".footer");

// Immediately hide the timer until one of the buttons are clicked
timer.hide();
stop.hide();
work.show();
// currentDayTime.show();
shortBreak.show();
longBreak.show();
footerHide.show();

// returns the hour reading from the current moment in time - example: 18 for 18:XX hours, 2 for 2:xx hours
var hourDisplayed = moment().format('H');
//console.log(hourDisplayed);
// mapping the schedule your workday and add button with identifiers
var schedule = document.querySelector("#schedule");
// console.log(schedule);

// Add event listener to the schedule_your_day button
schedule.addEventListener("click", scheduleDay);

//Display the current date and time
var timeDisplayed = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
//console.log(timeDisplayed);

// call currentTime every second (1000)
setInterval(currentTime, 1000);

// current time format
function currentTime() {
    // set the current time format
    timeDisplayed = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    // Empty the current day element
    $('#currentDay').empty();
    // Display the current time
    $('#currentDay').text(timeDisplayed);
}

// invoke the function to eliminate a 1s gap when the page loads
currentTime();
// // 💻 Work: 25 mins

// $(document).on('click', '.work', function Work(){
// countDown(25);
// totalWork++;
// workSessions.textContent = totalWork;
// });

// // ☕️ Short break: 5 mins
// $(document).on('click', '.shortBreak', function shortBreak(){
//     countDown(5);
//     totalShort++;
//     workSessions.textContent = totalShort;
//     });

// // 🌯 Long break: 15 mins
// $(document).on('click', '.longBreak', function longBreak(){
//     countDown(15);
//     totalLong++;
//     workSessions.textContent = totalLong;
//     });


