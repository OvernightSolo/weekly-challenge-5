// Display the current day in the header
let todayEl = $("#currentDay");
todayEl.text("Today is " + moment().format("dddd, MMMM Do"));

// Create click functionality to the save buttons
$(document).ready(() => {
  $("saveBtn").on("click", () => {
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    //Save to local storage
    localStorage.setItem(time, value);

    // Display a notification that the item was saved to local storage
    $(".notification").addClass("show");

    // Turn notification off after three seconds
    setTimeout(() => {
      $(".notification").addClass("show");
    }, 3000);
  });
});

function updateTime() {
  // Determine current amount of hours
  let currentBlock = moment().hours();

  // Iterate over the blocks of time
  $(".time-block").each(function () {
    let timeBlock = parseInt($(this).attr("id").split("-")[1]);

    // Determine whether or not we are past the desired time block
    if (timeBlock < currentBlock) {
      $(this).addClass(".past");
    } else if (timeBlock === currentBlock) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

updateTime();

// Check to see if the current time should be updated via interval
let timeInterval = setInterval(updateTime, 15000);

// Get items from local storage, if there is any
$("#9a .description").val(localStorage.getItem("9a"));
$("#10a .description").val(localStorage.getItem("10a"));
$("#11a .description").val(localStorage.getItem("11a"));
$("#12p .description").val(localStorage.getItem("12p"));
$("#1p.description").val(localStorage.getItem("1p"));
$("#2p .description").val(localStorage.getItem("2p"));
$("#3p .description").val(localStorage.getItem("3p"));
$("#4p .description").val(localStorage.getItem("4p"));
$("#5p .description").val(localStorage.getItem("5p"));
