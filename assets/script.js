console.log(this);
console.log(moment());

// Header date 
var headerDateEl = moment().format("dddd LL");
console.log(headerDateEl);
$("#currentDay").append(headerDateEl);


// Changing timeblock colors according to time of day
var now = moment().format('H');
console.log(now);
if (now > 9){
        $("#9amTask").addClass("past");
    }else if (now = 9){
        $("#9amTask").addClass("present");
    }else if (now < 9){
        $("#9amTask").addClass("future");
    }
if (now > 10){
        $("#10amTask").addClass("past");
    }else if (now = 10){
        $("#10amTask").addClass("present");
    }else if (now < 10){
        $("#10amTask").addClass("future");
    }
if (now > 11){
        $("#11amTask").addClass("past");
    }else if (now = 11){
        $("#11amTask").addClass("present");
    }else if (now < 11){
        $("#11amTask").addClass("future");
    }
if (now > 12){
        $("#12pmTask").addClass("past");
    }else if (now = 12){
        $("#12pmTask").addClass("present");
    }else if (now < 12){
        $("#12pmTask").addClass("future");
    }
if (now > 13){
        $("#1pmTask").addClass("past");
    }else if (now = 13){
        $("#1pmTask").addClass("present");
    }else if (now < 13){
        $("#1pmTask").addClass("future");
    }
if (now > 14){
        $("#2pmTask").addClass("past");
    }else if (now = 14){
        $("#2pmTask").addClass("present");
    }else if (now < 14){
        $("#2pmTask").addClass("future");
    }
if (now > 15){
        $("#3pmTask").addClass("past");
    }else if (now = 15){
        $("#3pmTask").addClass("present");
    }else if (now < 15){
        $("#3pmTask").addClass("future");
    }
if (now > 16){
        $("#4pmTask").addClass("past");
    }else if (now = 16){
        $("#4pmTask").addClass("present");
    }else if (now < 16){
        $("#4pmTask").addClass("future");
    }
if (now > 17){
        $("#5pmTask").addClass("past");
    }else if (now = 17){
        $("#5pmTask").addClass("present");
    }else if (now < 17){
        $("#5pmTask").addClass("future");
    };

    // onclick + local storage for tasks
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log(task, hour);

    localStorage.setItem(hour, task);
    console.log(localStorage);
    });

// show saved tasks on each time row
$("#9amRow .description").val(localStorage.getItem("9amRow"));
$("#10amRow .description").val(localStorage.getItem("10amRow"));
$("#11amRow .description").val(localStorage.getItem("11amRow"));
$("#12pmRow .description").val(localStorage.getItem("12pmRow"));
$("#1pmRow .description").val(localStorage.getItem("1pmRow"));
$("#2pmRow .description").val(localStorage.getItem("2pmRow"));
$("#3pmRow .description").val(localStorage.getItem("3pmRow"));
$("#4pmRow .description").val(localStorage.getItem("4pmRow"));
$("#5pmRow .description").val(localStorage.getItem("5pmRow"));