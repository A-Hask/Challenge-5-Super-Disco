//add function to place current date at top of page
var currentDay = moment().format("MMM DD, YYYY");
$("#currentDay").append(currentDay);

var currentTime = moment().format("H");
var timeArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var calendarEvents = [];

//color code time blocks for past, present, and future
function colorCode() {
    timeArray.map(function(hour){
        if (hour < currentTime) {
            $("#"+ hour).attr("class", "past");
        } 
        if (hour > currentTime) {
            $("#"+ hour).attr("class", "future");
        } else if (hour == currentTime) {
            $("#"+ hour).attr("class", "present");
        }
    })

}
colorCode();

//click event listener for save button
$("#time-block").on("click", "button", function (event) {
    var value = event.target.previousElementSibling.value;
    var id = event.target.previousElementSibling.id;
    var calendarEvent = {
        targetValue: value,
        targetId: id,
    }
    function taskText(event) {
        var isUndefined = typeof calendarEvents === "undefined";
        console.log(isUndefined==false);
        if (true) {
            calendarEvents.push(event);
            console.log(event);
            console.log("working");
        } else {
            var calendarEvents= [event];
            console.log("undefined: " + calendarEvent);
        }
    }
    taskText();
});

//save text in an array


//save text in local storage

//use JSON to parse entered text
