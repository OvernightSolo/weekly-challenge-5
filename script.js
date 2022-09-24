// Display the current day in the header
let todayEl = $("#currentDay");
todayEl.text("Today is " + moment().format("dddd, MMMM Do"));

// Creating click functionality to the save buttons
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
  $(".time-block").each(() => {
    let timeBlock = parseInt($(this).attr("id").split("-")[1]);

    // Determine whether or not we are past the desired time block
    if (timeBlock < currentBlock) {
      $(this).addClass(".past");
    } else if (timeBlock === hoursAmount) {
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
