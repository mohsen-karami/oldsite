/* Set Time and Date in the navbar */
var dayName = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
var monthName = ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'];
var hourap = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function showTime() {
    'use strict';
    var dateObj = new Date();
    var dayDate = dateObj.getDate(), day = dateObj.getDay(), month = dateObj.getMonth(), year = dateObj.getFullYear(), hour = dateObj.getHours(), minutes = (dateObj.getMinutes() <= 9 ? '0' + dateObj.getMinutes() : dateObj.getMinutes());
    var todayDate  = dayName[day] + ' ' + dayDate + ' ' + monthName[month] + ' ' + year;
    var todayTime = hourap[hour] + ':' + minutes + ' ' + (hour <= 11 ? 'پیش از ظهر' : 'پس از ظهر');
    var dateDiv = document.getElementById('today');
    /*Set Current Date */
    if (dateDiv !== null) {
        dateDiv.innerHTML = todayDate;
    }
    /*Set Current Time */
    var timeDiv = document.getElementById('time');
    if (timeDiv !== null) {
        timeDiv.innerHTML = todayTime;
    }
}
setInterval(showTime, 1000);

function rotate() {
    if (innerWidth <= innerHeight) {
    document.getElementById('css').setAttribute('href', 'information-security/information-security-mobile.css');
    } else {
        document.getElementById('css').setAttribute('href', 'information-security/information-security.css');
    }
}
setInterval(rotate, 100);