const date = moment().format("dddd, MMM Do");
const hour = parseInt(moment().hour());
const currentDate = document.getElementById("currentDay");
const taskArea = document.querySelectorAll("textarea");
const btn = document.querySelectorAll("saveBtn");
//convert the NodeList from querySelectorAll to an array
taskAreaArr = (Array.from(taskArea));
//Set current date on load
currentDate.innerHTML = date;

// loop through array of textareas and update classes based on current time relative to time block of the div
function checkTasks(taskAreaArr) {
    for (let i = 0; i < taskAreaArr.length; i++) {
        timeId = parseInt(taskAreaArr[i].id);
        if (moment(timeId).isBefore(hour)) {
            taskAreaArr[i].classList.add("past");
        }
        else if (moment(timeId).isSame(hour)) {
            taskAreaArr[i].classList.add("present");
        }
        else if (moment(timeId).isAfter(hour)) {
            taskAreaArr[i].classList.add("future");
        }
    }
}
// refresh page every 5 mins 
setInterval(() => {
    location.reload();
}, 300000); 

// loop through task array and set each time block's tasks to localstorage
function saveTasks(taskAreaArr){
    for (let i = 0; i < taskAreaArr.length; i++) {
        localStorage.setItem(taskAreaArr[i].id, taskAreaArr[i].value);
    }
} 
// loop through task array and pull task values from localstorage into the appropriate code block
function getTasks(taskAreaArr) {
    for (let i = 0; i < taskAreaArr.length; i++) {
        timeId = parseInt(taskAreaArr[i].id);
        keys = localStorage.getItem(timeId);
        taskAreaArr[i].value = keys;
    }
}

getTasks(taskAreaArr);
checkTasks(taskAreaArr);
$(".saveBtn").on("click", () => {saveTasks(taskAreaArr)});
