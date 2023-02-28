// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function dayPlanner() {
  var timeHeader = $('#currentDay');
  var currentTime = dayjs();
  var save = $('.saveBtn');
  var hourIndex = $('.dailyPlan')

  //Function to add IDs to all textareas
  function addId() {
    for (let i = 0; i < hourIndex.length; i++) {
      hourIndex[i].id = 'hour-' + (i)
    }
  }

  //Function to add/remove classes based on ID number compared to current hour
  function addRemoveClass() {
    for (let i = 0; i < hourIndex.length; i++) {
      var hourId = hourIndex[i].id.split('hour-').join('')
      var hourNum = parseInt(hourId);

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

  //Function used to save text values to local storage based on id
  save.click(function (e) {
    e.preventDefault;
    console.log(e.target.id)
    var dayEvents = e.target.id.split('saveId-').join('');
    var eventNum = parseInt(dayEvents)
    console.log(eventNum);
    console.log($('textarea').val())
    
    var key = eventNum
    var event = $('textarea').val()
    // eventStorage.push(event);
    localStorage.setItem(key, JSON.stringify(event));
  })

  //Code used to add text content to textarea based on id
  for (let i = 0; i < 9; i++) {
    let key = i
    console.log(key)
    hourIndex[i].textContent = localStorage.getItem(JSON.parse(key))
  }
  
  //Code to display the current date in the header of the page.
  timeHeader.text(currentTime.format('dddd, MMM DD'));
});

