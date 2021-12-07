// DISPLAYS DATE AS A STRING TO DISPLAY ON HTML 
var todayDate = moment().format("[Today is] dddd, MMMM Do YYYY").toString();
document.getElementById("container").innerHTML = todayDate;
// console.log(todayDate.format("[Today is] dddd, MMMM Do YYYY"));

