let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let currentDate = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = ["Januasry", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = currentDate.getDate();
day.innerHTML = weekDays[currentDate.getDay()];
month.innerHTML = allMonths[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear();


