// Wait for the document to be ready before executing the following code
$(document).ready(function () {
    // Log "Let's Go" to the console
    console.log("Let's Go");
    });
    
    // Get the current date and time using Moment.js and display it on the page
    let now = moment().format("MMMM Do YYYY, h:mm:ss a");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    
    // Get the current hour of the day using Moment.js
    let currentHour = moment().format("HH");
    
    // Iterate over each time block element and determine if it is in the past, present, or future based on the current hour
    $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");
    } else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
    } else if (currentHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
    }
    });
    
    // Save data to local storage when the save button is clicked
    $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    });
    
    // Retrieve data from local storage and set the values of the time block elements accordingly
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
    
    // Clear the contents of the text area elements and the data stored in local storage when the clear button is clicked
    $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textArea").val("");
    localStorage.clear();
    });