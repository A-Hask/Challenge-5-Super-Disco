var timeblocks = $("#time-block");
var container = $("#calendar");
".container".appendChild(currentDay);

var currentDay = function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate= dd + "-" +( MM+1) + "-" + yyyy;
 
    return currentDate;
 }
 console.log("date obtained")