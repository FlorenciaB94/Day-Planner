console.log(this);
console.log(moment());
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var headerDateEl = moment().format("dddd LL");
console.log(headerDateEl);
$("#currentDay").append(headerDateEl);
