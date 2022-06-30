var currentDayDisplay = $('#currentDay');

var currentDay = moment().format("MMM Do, YYYY")
currentDayDisplay.text(currentDay);