/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/



//WHEN I open the planner - THEN the current day is displayed at the top of the calendar

var dateCheck = moment().format('dddd, MMMM Do');
$("#currentDay").append(dateCheck);

//WHEN I view the time blocks for that day - THEN each time block is color-coded to indicate whether it is in the past, present, or future

//current hour to check against time slots
var currentTime = moment().hour();

var timeBlocks = document.querySelectorAll(".time-block");

//function to check if past, present, or future
var checkBlock = function (){
    //loops through all of the time blocks
    for (i = 0; i < timeBlocks.length; i++){

        var timeSlot = timeBlocks[i].id;
        timeSlot = parseInt(timeSlot);
        var thisTime = timeBlocks[i];

        if(timeSlot > currentTime){
            thisTime.classList.remove("present")
            thisTime.classList.remove("past")
            thisTime.classList.add("future")
        }
        else if (timeSlot === currentTime){
            thisTime.classList.remove("future")
            thisTime.classList.add("present")
        }
        else {
            thisTime.classList.remove("present")
            thisTime.classList.add("past")
        }
}};

checkBlock();