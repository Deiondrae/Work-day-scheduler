const date = moment().format("dddd, MMM Do");
const hour = parseInt(moment().hour());
const currentDate = document.getElementById("currentDay")
currentDate.innerHTML = date