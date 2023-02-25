// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function dayPlanner() {
  var timeHeader = $('#currentDay');
  var currentTime = dayjs();
  var save = $('.saveBtn');
  var planner = $('#planContainer');

  //Creates local storage array for saved events
  let eventStorage = JSON.parse(localStorage.getItem('event'));

  if (eventStorage !== null) {
    eventTextArry = eventStorage;
  } else {
    eventTextArry = new Array(9)
  };

  //Create the planner container and rows by hour
  for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;
    
    let $rowDiv = $('<div>');
    $rowDiv.addClass('row time-block');
    $rowDiv.attr('id', hour);
  
    //Creates the left hand column with hours of the day
    let $hourDiv = $('<div>');
    $hourDiv.addClass('col-2 col-md-1 text-center py-3');
  
    const $hourSpan = $('<span>');
    $hourSpan.attr('class','timeBox');
    
    //Displays the hour in the left-hand column of the row div
    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    
    $hourSpan.text(`${displayHour} ${ampm}`);

    $rowDiv.append($hourDiv);
    $hourDiv.append($hourSpan);
      
    //Creates the event input and event column
    let $planSpnDiv = $('<textarea>');
    let $planSpn = $('<span>')

    $planSpnDiv.attr('id', `input-${index}`);
    $planSpnDiv.attr('hour-index', index);
    $planSpnDiv.attr('class', 'dailyPlan col-8 col-md-10');
    $planSpn.attr('type', 'eventText');

    $planSpn.val( eventTextArry[index] );

    $planSpnDiv.append($planSpn);
    $rowDiv.append($planSpnDiv);

    //Creates the save buttons
    let $saveBtnDiv = $('<div>');
    $saveBtnDiv.addClass('col-2 col-md-1');

    let $saveBtn = $('<i>');
    $saveBtn.attr('id', `saveid-${index}`);
    $saveBtn.attr('save-id', index);
    $saveBtn.attr('class', "far fa-save saveIcon");
    
    $rowDiv.append($saveBtnDiv);
    $saveBtnDiv.append($saveBtn);

    //Add rows to the container
    planner.append($rowDiv);
    var idHour = $('textarea').parents().attr('id')
    if (idHour < currentTime.$H) {
      $(textarea).attr('id', 'past');
    // } else if (hour = currentTime.$H) {
    //   $planSpn.removeAttr('id', 'past');
    //   $planSpn.attr('id', 'present');
    } else {
      // $planSpn.removeAttr('id', 'present');
      $(textarea).attr('id', 'future');
      console.log(currentTime.$H)
    }
    console.log(idHour)
    console.log($planSpnDiv.attr('id'))
    // console.log(currentTime.$H)
  };

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('textArea').attr({
    type: 'text',
    id: 'input',
    value: 'event'
  });
  save.click(function (e) {
    e.preventDefault;
    var dayEvents = $('div:#hour-');
    eventStorage.push(dayEvents);
    localStorage.setItem('event', JSON.stringify(eventStorage));
    console.log(localStorage.event)
  })
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
  //
  // TODO: Add code to display the current date in the header of the page.
  timeHeader.text(currentTime.format('dddd, MMM DD'));
});

