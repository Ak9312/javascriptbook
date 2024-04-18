var date = document.querySelector(".Date");
var clocks = document.querySelector(".clock");
var day = document.querySelector(".days");
var hour = document.querySelector(".hours");
var minute = document.querySelector(".minutes");
var second = document.querySelector(".seconds");
let timeInterval;
var timeStop = true;
var getDate = document.querySelector(".GetDate");

let saved = localStorage.getItem("countdown");
getDate.addEventListener("click", () => {
  selectedDate = new Date(date.value).getTime();
  finalDate = new Date().getTime();
  totalTime = finalDate - selectedDate;


    var days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

 
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
});
