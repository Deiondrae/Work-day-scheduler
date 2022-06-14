const date = moment().format("dddd, MMM Do");
const hour = parseInt(moment().hour());
const currentDate = document.getElementById("currentDay")
const taskArea = document.querySelectorAll("textarea")
taskAreaArr = (Array.from(taskArea))
currentDate.innerHTML = date


function checkTasks(taskAreaArr) {
    for (let i = 0; i < taskAreaArr.length; i++) {
        timeId = parseInt(taskAreaArr[i].id)
        if (moment(timeId).isBefore(hour)) {
            taskAreaArr[i].classList.add("past")
        }
        else if (moment(timeId).isSame(hour)) {
            taskAreaArr[i].classList.add("present")
        }
        else if (moment(timeId).isAfter(hour)) {
            taskAreaArr[i].classList.add("future")
        }
    }
}

setInterval(() => {
    location.reload();
}, 3600000); 
//
checkTasks(taskAreaArr);

function savingTasks(taskAreaArr) {
    for (let i = 0; i < taskAreaArr.length; i++) {
        timeId = parseInt(taskAreaArr[i].id)
        }
}
    
function saveTasks(id){
    for (let i = )
    localStorage.setItem(taskAreaArr[i], taskAreaArr[i].value )
} 