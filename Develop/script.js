//set variables and arrays. create elements
var timeBlocks = $("#time-block");
timeBlocks = document.createElement("div");
var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//add function to place current date at top of page
var currentDay = moment().format("MMM DD, YYYY");
$("#currentDay").append(currentDay);

//use for loop to create divs for each time block and add to the container
for (var i=0; i < timeArray.length; i++) {
    timeBlocks.append(
    $("#time-block").html("<div class='time-block' id=" + [timeArray.i] + "><span class='hour'>" + [timeArray.i] + "</span><input class='description' id='tasks10'></input><button class='saveBtn i'>Save</button></div>"));
};

//color code time blocks for past, present, and future
//if timeArray.i < the current hour(H), add .past class; if timeArray=H, .present; if timeArray>H, .future
    

//save text in local storage


