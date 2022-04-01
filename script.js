var todayDate = moment().format('dddd, MMM Do YYYY');
    let displayDate = document.getElementById("currentDay").innerHTML = todayDate;
   
var saveBtn = document.getElementById(saveBtn)
    addEventListener(onclick , saveBtn)
    console.log("the button has been pressed!")