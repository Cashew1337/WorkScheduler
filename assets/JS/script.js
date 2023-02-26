// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function dayPlanner() {
  var timeHeader = $('#currentDay');
  var currentTime = dayjs();
  var save = $('.saveBtn');

  //Creates local storage array for saved events
  let eventStorage = JSON.parse(localStorage.getItem('event'));

  if (eventStorage !== null) {
    eventTextArry = eventStorage;
  } else {
    eventTextArry = new Array(9)
  };
  let hourIndex = $("textarea[data-index]")
    for (let i = 0; i < hourIndex.length; i++) {
      if (hourIndex[i] < currentTime.$H - 9) {
        $('textarea').addClass('past');
      } else if (hourIndex[i] > currentTime.$H - 9) {
        $('textarea').removeClass('present');
        $('textarea').addClass('class', 'future');
      } else if (hourIndex[i] === currentTime.$H - 9) {
        $('textarea').removeClass('past');
        $('textarea').addClass('class', 'present');
      } 
      console.log(hourIndex)
      console.log(hourIndex[i])
    };
      
      console.log(currentTime.$H - 9)
      console.log(eventTextArry)
    
  save.click(function (e) {
    e.preventDefault;
    var dayEvents = $('button:.saveId');
    eventStorage.push(dayEvents);
    localStorage.setItem('event', JSON.stringify(eventStorage));
    console.log(localStorage.event)
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  timeHeader.text(currentTime.format('dddd, MMM DD'));
});

