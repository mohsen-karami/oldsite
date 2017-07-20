/* Set Time and Date in the navbar */
var dayName = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var monthName = new Array('January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var hourap = new Array(12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
function showTime(){
    var dateObj = new Date();
    var dayDate = dateObj.getDate(), day = dateObj.getDay(), month = dateObj.getMonth(), year = dateObj.getFullYear(), hour = dateObj.getHours(), minutes = (dateObj.getMinutes()<=9?'0'+dateObj.getMinutes():dateObj.getMinutes());
    var todayDate  = dayName[day]+' '+dayDate+' '+monthName[month]+', '+year;
    var todayTime = hourap[hour]+':'+minutes+' '+(hour<=11?'AM':'PM');
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