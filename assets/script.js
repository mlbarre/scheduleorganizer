// DISPLAYS DATE AS A STRING TO DISPLAY ON HTML 
var todayDate = moment().format("[Today is] dddd, MMMM Do YYYY").toString();
document.getElementById("container").innerHTML = todayDate;
// console.log(todayDate.format("[Today is] dddd, MMMM Do YYYY"));


// var storageEvents = document.querySelector(".eventdes");
// var saveButton = document.querySelector(".saveBtn");

// var newEvents = function () {
//     storageEvents.onClick(function() {
//         var savedEvents = saveButton.val();
//         console.log(savedEvents);
//         // localStorage.setItem('event', savedEvents);
//     });
// };
// saveButton.addEventListener("click", newEvents);


var eventInput = document.querySelector(".eventdes");
var saveButton = document.querySelector(".saveBtn");

saveButton.addEventListener("click", function(event) {
    event.preventDefault;

    var savedEvents = {
        newEvent: eventInput.value.trim() 
    };

    localStorage.setItem("Saved", JSON.stringify(savedEvents));
});

