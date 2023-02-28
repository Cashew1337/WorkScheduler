// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function dayPlanner() {
  var timeHeader = $('#currentDay');
  var currentTime = dayjs();
  var save = $('.saveBtn');
  var hourIndex = $('.dailyPlan')

  console.log(hourIndex)


  //Creates local storage array for saved events
  let eventStorage = JSON.parse(localStorage.getItem('event'));

  if (eventStorage !== null) {
    eventTextArry = eventStorage;
  } else {
    eventTextArry = new Array(9)
  };


  function addId() {
    for (let i = 0; i < hourIndex.length; i++) {
      hourIndex[i].id = 'hour-' + (i)
      var hourId = hourIndex[i].id.split('hour-').join('')
      var hourNum = parseInt(hourId);
      // console.log(hourIndex, currentTime.$H - 9)
      console.log(hourIndex[i].id, hourId)
      console.log(hourNum < currentTime.$H - 9, hourNum === currentTime.$H - 9, hourNum > currentTime.$H - 9)
    } 
  }

  function addRemoveClass () {
    for (let i = 0; i < hourIndex.length; i++) {
      var hourId = hourIndex[i].id.split('hour-').join('')
      var hourNum = parseInt(hourId);
      var hourPlan = hourIndex[i]
      console.log(hourPlan.id)
    if (hourNum < currentTime.$H - 9) {
      console.log("if")
      hourIndex[i].classList.remove('future');
      hourIndex[i].classList.add('past');
    } else if (hourNum === currentTime.$H - 9) {
      console.log("else if 2")
      hourIndex[i].classList.remove('past');
      hourIndex[i].classList.add('present');
    } else {
      console.log("else if")
      hourIndex[i].classList.remove('present');
      hourIndex[i].classList.add('future');
    }
  }
  }

  addId();
  addRemoveClass();
  // console.log(hourIndex)
  // console.log(currentTime.$H - 9)
  // console.log(eventTextArry)

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

