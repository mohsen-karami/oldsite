/* Set Time and Date in the navbar */
var dayName = new Array('یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه');
var monthName = new Array('ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر');
var hourap = new Array(12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
function showTime(){
    var dateObj = new Date();
    var dayDate = dateObj.getDate(), day = dateObj.getDay(), month = dateObj.getMonth(), year = dateObj.getFullYear(), hour = dateObj.getHours(), minutes = (dateObj.getMinutes()<=9?'0'+dateObj.getMinutes():dateObj.getMinutes());
    var todayDate  = dayName[day]+' '+dayDate+' '+monthName[month]+' '+year;
    var todayTime = hourap[hour]+':'+minutes+' '+(hour<=11?'پیش از ظهر':'پس از ظهر');
    var dateDiv = document.getElementById('today');
    /*Set Current Date */
    if(dateDiv !== null) {
        dateDiv.innerHTML = todayDate;
    };
    /*Set Current Time */
    var timeDiv = document.getElementById('time');
    if(timeDiv !== null) {
        timeDiv.innerHTML = todayTime;
    };
};
setInterval(showTime,1000);