var currentDayDisplay = $('#currentDay');
var projectInput1 = $('#1');
var projectInput2 = $('#2');
var projectInput3 = $('#3');
var projectInput4 = $('#4');
var projectInput5 = $('#5');
var projectInput6 = $('#6');
var projectInput7 = $('#7');
var projectInput8 = $('#8');
var projectInput9 = $('#nine');
var saveButton = $('.btn');

// Using Moment.js to display current date at the top of the page
var currentDay = moment().format("MMM Do, YYYY")
currentDayDisplay.text(currentDay);

// Saving user input to local storage when save button is pressed
var projectList = {
    nine: JSON.parse(localStorage.getItem("projectList")).nine,
    ten: JSON.parse(localStorage.getItem("projectList")).ten,
    eleven: JSON.parse(localStorage.getItem("projectList")).eleven,
    twelve: JSON.parse(localStorage.getItem("projectList")).twelve,
    one: JSON.parse(localStorage.getItem("projectList")).one,
    two: JSON.parse(localStorage.getItem("projectList")).two,
    three: JSON.parse(localStorage.getItem("projectList")).three,
    four: JSON.parse(localStorage.getItem("projectList")).four,
    five: JSON.parse(localStorage.getItem("projectList")).five
};

// Save button event handler
saveButton.click(function(event) {
    if (event.target.id == 9) {
        projectList.nine = projectInput1.val();
    }
    if (event.target.id == 10) {
        projectList.ten = projectInput2.val();
    }
    if (event.target.id == 11) {
        projectList.eleven = projectInput3.val();
    }
    if (event.target.id == 12) {
        projectList.twelve = projectInput4.val();
    }
    if (event.target.id == 1) {
        projectList.one = projectInput5.val();
    }
    if (event.target.id == 2) {
        projectList.two = projectInput6.val();
    }
    if (event.target.id == 3) {
        projectList.three = projectInput7.val();
    }
    if (event.target.id == 4) {
        projectList.four = projectInput8.val();
    }
    if (event.target.id == 5) {
        projectList.five = projectInput9.val();
    }
    localStorage.setItem("projectList", JSON.stringify(projectList));
})

// Load the local storage on page load
function init() {
    var projects = JSON.parse(localStorage.getItem("projectList"));
    projectInput1.text(projects.nine);
    projectInput2.text(projects.ten);
    projectInput3.text(projects.eleven);
    projectInput4.text(projects.twelve);
    projectInput5.text(projects.one);
    projectInput6.text(projects.two);
    projectInput7.text(projects.three);
    projectInput8.text(projects.four);
    projectInput9.text(projects.five);
}
init();