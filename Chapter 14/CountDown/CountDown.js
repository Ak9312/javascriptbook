let date = document.querySelector(".Date");
let clocks = document.querySelector(".clock");
let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

let savedInitialValue = localStorage.getItem("initial");


if (savedInitialValue != null) {
  date.value = savedInitialValue;
}



window.addEventListener("load", () => {
  setInterval(() => {
    let initialDate = date.value;
    let selectedDate = new Date(initialDate).getTime();
    localStorage.setItem("initial", initialDate);
    finalDate = new Date().getTime();
    totalTime = selectedDate - finalDate;


    countdownStart(totalTime);
  }, 1000);
});

function countdownStart(value) {
  let days = Math.floor(value / (1000 * 60 * 60 * 24));
  let hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((value % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}
