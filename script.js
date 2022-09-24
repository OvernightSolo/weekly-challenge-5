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
