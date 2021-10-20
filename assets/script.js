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
if (now < 10){
    $("#10amTask").addClass("future");
    } else if (now > 10){
        $("#10amTask").addClass("past");
    }else if (now = 10){
        $("#10amTask").addClass("present");
    }
if (now < 11){
    $("#11amTask").addClass("future");
    } else if (now > 11){
        $("#11amTask").addClass("past");
    }else if (now = 11){
        $("#11amTask").addClass("present");
    }
if (now < 12){
    $("#12pmTask").addClass("future");
    } else if (now > 12){
        $("#12pmTask").addClass("past");
    }else if (now = 12){
        $("#12pmTask").addClass("present");
    }
if (now < 13){
    $("#1pmTask").addClass("future");
    } else if (now > 13){
        $("#1pmTask").addClass("past");
    }else if (now = 13){
        $("#1pmTask").addClass("present");
    }
if (now < 14){
    $("#2pmTask").addClass("future");
    } else if (now > 14){
        $("#2pmTask").addClass("past");
    }else if (now = 14){
        $("#2pmTask").addClass("present");
    }
if (now < 15){
    $("#3pmTask").addClass("future");
    } else if (now > 15){
        $("#3pmTask").addClass("past");
    }else if (now = 15){
        $("#3pmTask").addClass("present");
    }
if (now < 16){
    $("#4pmTask").addClass("future");
    } else if (now > 16){
        $("#4pmTask").addClass("past");
    }else if (now = 16){
        $("#4pmTask").addClass("present");
    }
if (now < 17){
    $("#5pmTask").addClass("future");
    } else if (now > 17){
        $("#5pmTask").addClass("past");
    }else if (now = 17){
        $("#5pmTask").addClass("present");
    }
    
// onclick + local storage for tasks