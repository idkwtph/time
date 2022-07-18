const twelveLabel = document.querySelector(".twelve-hour");
const twentyFourLabel = document.querySelector(".twenty-four-hour");
const dayLabels = document.querySelector(".day-container");
const hoursLabel = document.querySelector(".time-hours");
const minutesLabel = document.querySelector(".time-minutes");
const secondsLabel = document.querySelector(".time-seconds");
const colons = document.querySelectorAll(".colon");
const am = document.querySelector(".am");
const pm = document.querySelector(".pm");
const dateNumber = document.querySelector(".date-number");
const dateMonth = document.querySelector(".date-month");
const dateYear = document.querySelector(".date-year");

const zeroToAdd = 0;
const numberToMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let year = 0;
let dayNumber = 0;
let month = "";
let day = "";
let hour = 0;
let minute = 0;
let second = 0;

let timeType = 12;

twelveLabel.classList = "twelve-label active";
twentyFourLabel.classList = "twenty-four-label unactive";

function loop() {
  setup();
  checkTimeType();
  update();
}

function switchTimeType() {
  if (twentyFourLabel.classList == "twenty-four-hour active") {
    timeType = 12;
    twelveLabel.classList = "twelve-hour active";
    twentyFourLabel.classList = "twenty-four-hour unactive";
  } else {
    timeType = 24;
    twentyFourLabel.classList = "twenty-four-hour active";
    twelveLabel.classList = "twelve-hour unactive";
  }
}

function setup() {
  const date = new Date();
  const options = {
    weekday: "long",
  };
  const hoursNumber = date.getHours();
  const minutesNumber = date.getHours();
  const secondsNumber = date.getSeconds();
  year = date.getFullYear();
  month = numberToMonth[date.getMonth()];
  dayNumber = date.getDate();
  day = new Intl.DateTimeFormat("en-US", options).format(date);
  hour = hoursNumber;
  minute = minutesNumber;
  second = secondsNumber;
  colons.forEach((colon) => {
    colon.textContent = ":";
  });
}

function update() {
  [...dayLabels.children].forEach((dayLabel) => {
    dayLabel.classList.remove("not-today");
    dayLabel.classList.remove("today");
    if (day == dayLabel.textContent) {
      dayLabel.classList.add("today");
    } else {
      dayLabel.classList.add("not-today");
    }
  });
  dateYear.textContent = year;
  dateMonth.textContent = month;
  dateNumber.textContent = dayNumber;
  hoursLabel.textContent = hour;
  minutesLabel.textContent = minute;
  secondsLabel.textContent = second;
}

function checkTimeType() {
  var timeTypeBool = timeType === 24;
  if (timeType === 12) {
    if (hour > 11) {
      hour -= 12;
      if (hour < 10) {
        hour = "0" + hour.toString();
      }
      if (minute < 10) {
        minute = "0" + minute.toString();
      }
      if (second < 10) {
        second = "0" + second.toString();
      }
      pm.classList.toggle("invisible", timeTypeBool);
    } else {
      am.classList.toggle("invisible", timeTypeBool);
    }
  } else {
    if (hour < 10) {
      hour = "0" + hour.toString();
    }
    if (minute < 10) {
      minute = "0" + minute.toString();
    }
    if (second < 10) {
      second = "0" + second.toString();
    }
    am.classList = "am invisible";
    pm.classList = "pm invisible";
  }
}

function makeVisible() {
  twelveLabel.classList.remove("invisible");
  twentyFourLabel.classList.remove("invisible");
  dayLabels.classList.remove("invisible");
}

makeVisible();
setInterval(loop, 250);
