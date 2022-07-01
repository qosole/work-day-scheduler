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

// Using Moment.js to change table color based on current time
var currentTime = moment();
if (currentTime.format("H") >= 9 && currentTime.format("H") < 10) {
    projectInput1.css("background-color", "lightcoral");
    projectInput2.css("background-color", "lightgreen");
    projectInput3.css("background-color", "lightgreen");
    projectInput4.css("background-color", "lightgreen");
    projectInput5.css("background-color", "lightgreen");
    projectInput6.css("background-color", "lightgreen");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 10 && currentTime.format("H") < 11) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightcoral");
    projectInput3.css("background-color", "lightgreen");
    projectInput4.css("background-color", "lightgreen");
    projectInput5.css("background-color", "lightgreen");
    projectInput6.css("background-color", "lightgreen");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 11 && currentTime.format("H") < 12) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightcoral");
    projectInput4.css("background-color", "lightgreen");
    projectInput5.css("background-color", "lightgreen");
    projectInput6.css("background-color", "lightgreen");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 12 && currentTime.format("H") < 13) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightcoral");
    projectInput5.css("background-color", "lightgreen");
    projectInput6.css("background-color", "lightgreen");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 13 && currentTime.format("H") < 14) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightgray");
    projectInput5.css("background-color", "lightcoral");
    projectInput6.css("background-color", "lightgreen");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 14 && currentTime.format("H") < 15) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightgray");
    projectInput5.css("background-color", "lightgray");
    projectInput6.css("background-color", "lightcoral");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 15 && currentTime.format("H") < 16) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightgray");
    projectInput5.css("background-color", "lightgray");
    projectInput6.css("background-color", "lightgray");
    projectInput7.css("background-color", "lightcoral");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 16 && currentTime.format("H") < 17) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightgray");
    projectInput5.css("background-color", "lightgray");
    projectInput6.css("background-color", "lightgray");
    projectInput7.css("background-color", "lightgray");
    projectInput8.css("background-color", "lightcoral");
    projectInput9.css("background-color", "lightgreen");
}
if (currentTime.format("H") >= 17 && currentTime.format("H") < 18) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightgray");
    projectInput5.css("background-color", "lightgray");
    projectInput6.css("background-color", "lightgray");
    projectInput7.css("background-color", "lightgray");
    projectInput8.css("background-color", "lightgray");
    projectInput9.css("background-color", "lightcoral");
}
if (currentTime.format("H") >= 18) {
    projectInput1.css("background-color", "lightgray");
    projectInput2.css("background-color", "lightgray");
    projectInput3.css("background-color", "lightgray");
    projectInput4.css("background-color", "lightgray");
    projectInput5.css("background-color", "lightgray");
    projectInput6.css("background-color", "lightgray");
    projectInput7.css("background-color", "lightgray");
    projectInput8.css("background-color", "lightgray");
    projectInput9.css("background-color", "lightgray");
}
if (currentTime.format("H") < 9) {
    projectInput1.css("background-color", "lightgreen");
    projectInput2.css("background-color", "lightgreen");
    projectInput3.css("background-color", "lightgreen");
    projectInput4.css("background-color", "lightgreen");
    projectInput5.css("background-color", "lightgreen");
    projectInput6.css("background-color", "lightgreen");
    projectInput7.css("background-color", "lightgreen");
    projectInput8.css("background-color", "lightgreen");
    projectInput9.css("background-color", "lightgreen");
}

// Saving user input to local storage when save button is pressed
var projectList = {
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: ""
};
if (JSON.parse(localStorage.getItem("projectList")) == null) {
    projectList.nine = "";
    projectList.ten = "";
    projectList.eleven = "";
    projectList.twelve = "";
    projectList.one = "";
    projectList.two = "";
    projectList.three = "";
    projectList.four = "";
    projectList.five = "";
} else {
    var savedProjects = JSON.parse(localStorage.getItem("projectList"));
    projectList.nine = savedProjects.nine;
    projectList.ten = savedProjects.ten;
    projectList.eleven = savedProjects.eleven;
    projectList.twelve = savedProjects.twelve;
    projectList.one = savedProjects.one;
    projectList.two = savedProjects.two;
    projectList.three = savedProjects.three;
    projectList.four = savedProjects.four;
    projectList.five = savedProjects.five;
}

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