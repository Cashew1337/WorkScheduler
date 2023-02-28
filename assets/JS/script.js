// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function dayPlanner() {
  var timeHeader = $('#currentDay');
  var currentTime = dayjs();
  var save = $('.saveBtn');
  var hourIndex = $('.dailyPlan')

  //Creates local storage array for saved events
  let eventStorage = JSON.parse(localStorage.getItem('event'));

  if (eventStorage !== null) {
    eventTextArry = eventStorage;
  } else {
    eventTextArry = new Array(9)
  };
  console.log(eventTextArry)
  //Function to add IDs to all textareas
  function addId() {
    for (let i = 0; i < hourIndex.length; i++) {
      hourIndex[i].id = 'hour-' + (i)
      // console.log(hourIndex, currentTime.$H - 9)
      // console.log(hourIndex[i].id, hourId)
      // console.log(hourNum < currentTime.$H - 9, hourNum === currentTime.$H - 9, hourNum > currentTime.$H - 9)
    }
  }

  //Function to add/remove classes based on ID number compared to current hour
  function addRemoveClass() {
    for (let i = 0; i < hourIndex.length; i++) {
      var hourId = hourIndex[i].id.split('hour-').join('')
      var hourNum = parseInt(hourId);
      // console.log(hourPlan.id)
      if (hourNum < currentTime.$H - 9) {
        // console.log("if")
        hourIndex[i].classList.remove('future');
        hourIndex[i].classList.add('past');
      } else if (hourNum === currentTime.$H - 9) {
        // console.log("else if 2")
        hourIndex[i].classList.remove('past');
        hourIndex[i].classList.add('present');
      } else {
        // console.log("else if")
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
  function addSaveId() {
    for (let i = 0; i < hourIndex.length; i++) {
      save[i].id = 'saveId-' + (i)
    }
  }
  addSaveId();
  console.log(save)

  for (let i = 0; i < save.length; i++) {
    console.log(save[i].id)
    var dayEvents = save[i].id.split('saveId-').join('');
    var eventNum = parseInt(dayEvents)
    console.log(dayEvents)
    console.log(eventNum)
  }

  save.click(function (e) {
    e.preventDefault;
    let saveVal = $('this').children('textarea').val()
    eventTextArry.push(saveVal);
    localStorage.setItem('event', JSON.stringify(eventTextArry));
    console.log(localStorage.event)
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  timeHeader.text(currentTime.format('dddd, MMM DD'));
});

