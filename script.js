const date = new Date();
const showCalender = (count) => {
  date.setDate(1);
  var year = 2022 + count;

  const monthDays = document.querySelector(".grid-container-inner2");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const quotes = [
    "“Mere Karan Arjun Aayenge”",
    "“Tumse naa ho payega”",
    "“Don’t underestimate the power of a common man”",
    "“Mhari choriya chhoro se kam hai kay!”",
    "“Utha le re baba.”",
    "“Our Business Is Our Business None of Your Business!”",
    "“Mogambo Khush Hua”",
    "“Tension lene ka nahi, sirf dene ka.”",
    "“Jaa Simran, jaa. Jeele apni zindagi”",
    "“Kitne aadmi the?”",
    "“Picture abhi baaki hai mere dost.”",
    "“Parampara. Pratishtha. Anushasan. ”",
  ];

  const imgs = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "aug.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "3.jpg",
  ];

  document.querySelector("#month").innerHTML = months[date.getMonth()] + " " + year;
  document.querySelector(".item3").innerHTML = quotes[date.getMonth()];
  document.getElementById("right-section").style.backgroundImage = "url('img/" + imgs[date.getMonth()];


  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;

  document.querySelectorAll('.grid-container-inner2 > div')[0].style.color="red";
  document.querySelectorAll('.grid-container-inner2 > div')[7].style.color="red";
  document.querySelectorAll('.grid-container-inner2 > div')[14].style.color="red";
  document.querySelectorAll('.grid-container-inner2 > div')[21].style.color="red";
  document.querySelectorAll('.grid-container-inner2 > div')[28].style.color="red";
  if (document.querySelectorAll('.grid-container-inner2 > div')[35]){
    document.querySelectorAll('.grid-container-inner2 > div')[35].style.color="red";
  }
};

var count = 0;


document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  if (date.getMonth() == 11) {
    count = count - 1;
  }
  else {
    count = count;
  }
  console.log(count)
  showCalender(count);
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  if (date.getMonth() == 0) {
    count = count + 1;
  }
  else {
    count = count;
  }
  console.log(count)
  showCalender(count);
});


showCalender(count);
