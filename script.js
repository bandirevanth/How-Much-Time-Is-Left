//YEAR END
//get the number of months until the end of the year
function getMonthsUntilEndOfYear(date) {
  var endOfYear = new Date(date.getFullYear(), 11, 31);
  var months = Math.ceil((endOfYear.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30));
  return months;
}

//get the number of weeks until the end of the year
function getWeeksUntilEndOfYear(date) {
  var endOfYear = new Date(date.getFullYear(), 11, 31);
  var weeks = Math.ceil((endOfYear.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 7));
  return weeks;
}

//get the number of days until the end of the year
function getDaysUntilEndOfYear(date) {
  var endOfYear = new Date(date.getFullYear(), 11, 31);
  var days = Math.ceil((endOfYear.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  return days;
}

//get the number of hours until the end of the year
function getHoursUntilEndOfYear(date) {
  var endOfYear = new Date(date.getFullYear(), 11, 31);
  var hours = Math.ceil((endOfYear.getTime() - date.getTime()) / (1000 * 60 * 60));
  return hours;
}

//get the number of minutes until the end of the year
function getMinutesUntilEndOfYear(date) {
  var endOfYear = new Date(date.getFullYear(), 11, 31);
  var minutes = Math.ceil((endOfYear.getTime() - date.getTime()) / (1000 * 60));
  return minutes;
}

//get the number of seconds until the end of the year
function getSecondsUntilEndOfYear(date) {
  var endOfYear = new Date(date.getFullYear(), 11, 31);
  var seconds = Math.ceil((endOfYear.getTime() - date.getTime()) / 1000);
  return seconds;
}


//MONTH END
//get number of weeks until the end of the month
function getWeeksUntilEndOfMonth(date) {
  var endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var weeks = Math.ceil((endOfMonth.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 7));
  return weeks;
}

//get the number of days until the end of the month
function getDaysUntilEndOfMonth(date) {
  var endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var days = Math.ceil((endOfMonth.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  return days;
}

//get the number of hours until the end of the month
function getHoursUntilEndOfMonth(date) {  
  var endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var hours = Math.ceil((endOfMonth.getTime() - date.getTime()) / (1000 * 60 * 60));
  return hours;
}

//get the number of minutes until the end of the month
function getMinutesUntilEndOfMonth(date) {
  var endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var minutes = Math.ceil((endOfMonth.getTime() - date.getTime()) / (1000 * 60));
  return minutes;
}

//get the number of seconds until the end of the month
function getSecondsUntilEndOfMonth(date) {
  var endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var seconds = Math.ceil((endOfMonth.getTime() - date.getTime()) / 1000);
  return seconds;
}


//WEEK END

//get the number of days until the end of the week
function getDaysUntilEndOfWeek(date) {
  var endOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6);
  var days = Math.ceil((endOfWeek.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  return days;
}

//get the number of hours until the end of the week
function getHoursUntilEndOfWeek(date) {
  var endOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6);
  var hours = Math.ceil((endOfWeek.getTime() - date.getTime()) / (1000 * 60 * 60));
  return hours;
}

//get the number of minutes until the end of the week
function getMinutesUntilEndOfWeek(date) {
  var endOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6);
  var minutes = Math.ceil((endOfWeek.getTime() - date.getTime()) / (1000 * 60));
  return minutes;
}

//get the number of seconds until the end of the week
function getSecondsUntilEndOfWeek(date) {
  var endOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6);
  var seconds = Math.ceil((endOfWeek.getTime() - date.getTime()) / 1000);
  return seconds;
}

//DAY END
//get the number of hours until the end of the day
function getHoursUntilEndOfDay(date) {
  var endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  var hours = Math.ceil((endOfDay.getTime() - date.getTime()) / (1000 * 60 * 60));
  return hours;
}

//get the number of minutes until the end of the day
function getMinutesUntilEndOfDay(date) {
  var endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  var minutes = Math.ceil((endOfDay.getTime() - date.getTime()) / (1000 * 60));
  return minutes;
}

//get the number of seconds until the end of the day
function getSecondsUntilEndOfDay(date) {
  var endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  var seconds = Math.ceil((endOfDay.getTime() - date.getTime()) / 1000);
  return seconds;
}



//get today's date
function getToday() {
  var today = new Date();
  return today;
}

setInterval(()=> {
	let today = getToday();


document.querySelector('.monthsLeftYear').innerHTML = getMonthsUntilEndOfYear(today);
document.querySelector('.weeksLeftYear').innerHTML = getWeeksUntilEndOfYear(today);
document.querySelector('.daysLeftYear').innerHTML = getDaysUntilEndOfYear(today);
document.querySelector('.hoursLeftYear').innerHTML = getHoursUntilEndOfYear(today);
document.querySelector('.minutesLeftYear').innerHTML = getMinutesUntilEndOfYear(today);
document.querySelector('.secondsLeftYear').innerHTML = getSecondsUntilEndOfYear(today);

document.querySelector('.weeksLeftMonth').innerHTML = getWeeksUntilEndOfMonth(today);
document.querySelector('.daysLeftMonth').innerHTML = getDaysUntilEndOfMonth(today);
document.querySelector('.hoursLeftMonth').innerHTML = getHoursUntilEndOfMonth(today);
document.querySelector('.minutesLeftMonth').innerHTML = getMinutesUntilEndOfMonth(today);
document.querySelector('.secondsLeftMonth').innerHTML = getSecondsUntilEndOfMonth(today);

document.querySelector('.daysLeftWeek').innerHTML = getDaysUntilEndOfWeek(today);
document.querySelector('.hoursLeftWeek').innerHTML = getHoursUntilEndOfWeek(today);
document.querySelector('.minutesLeftWeek').innerHTML = getMinutesUntilEndOfWeek(today);
document.querySelector('.secondsLeftWeek').innerHTML = getSecondsUntilEndOfWeek(today);

document.querySelector('.hoursLeftDay').innerHTML = getHoursUntilEndOfDay(today);
document.querySelector('.minutesLeftDay').innerHTML = getMinutesUntilEndOfDay(today);
document.querySelector('.secondsLeftDay').innerHTML = getSecondsUntilEndOfDay(today);
}, 100);
