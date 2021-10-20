console.log(this);
console.log(moment());

// Header date 
var headerDateEl = moment().format("dddd LL");
console.log(headerDateEl);
$("#currentDay").append(headerDateEl);

// Changing timeblock colors according to time of day
var now = moment().format('H');
console.log(now);
if (now < 9){
    $("#9amTask").addClass("future");
    } else if (now > 9){
        $("#9amTask").addClass("past");
    }else if (now = 9){
        $("#9amTask").addClass("present");
    }




// onclick + local storage for tasks
