// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $('.saveBtn').on("click", function () {
    var value9 = $('.description9').val()
    localStorage.setItem('9', value9);
    var value10 = $('.description10').val()
    localStorage.setItem('10', value10)
    var value11 = $('.description11').val()
    localStorage.setItem('11', value11)
    var value12 = $('.description12').val()
    localStorage.setItem('12', value12)
    var value1 = $('.description1').val()
    localStorage.setItem('1', value1)
    var value2 = $('.description2').val()
    localStorage.setItem('2', value2)
    var value3 = $('.description3').val()
    localStorage.setItem('3', value3)
    var value4 = $('.description4').val()
    localStorage.setItem('4', value4)
    var value5 = $('.description5').val()
    localStorage.setItem('5', value5)
  })
  $('#hour9 .description9').val(localStorage.getItem('9'))
  $('#hour10 .description10').val(localStorage.getItem('10'))
  $('#hour11 .description11').val(localStorage.getItem('11'))
  $('#hour12 .description12').val(localStorage.getItem('12'))
  $('#hour13 .description1').val(localStorage.getItem('1'))
  $('#hour14 .description2').val(localStorage.getItem('2'))
  $('#hour15 .description3').val(localStorage.getItem('3'))
  $('#hour16 .description4').val(localStorage.getItem('4'))
  $('#hour17 .description5').val(localStorage.getItem('5'))
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('dddd: MMMM DD, YYYY');
  $('#currentDay').text(today);

    var timeNow = dayjs().hour();

    $('.time-block').each(function () {
      var hour = parseInt($(this).attr('id').split('hour')[1])
      console.log(hour, timeNow)

      if (hour < timeNow) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (hour === timeNow) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  
);
