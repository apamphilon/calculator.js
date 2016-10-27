// delare variables
var screen = $('#screen'),
    numberButton = $('.number'),
	  inputValue = '',
	  query = [],
	  queryStr = '',
	  equalsButton = $('#equals'),
	  ceButton = $('#ce'),
    screenVal = '';

// functions
// construct query
function constructQuery() {
  queryStr = query.join('');
  setScreenValue();
}

// set screen value
function setScreenValue() {
  screenVal = (queryStr);
  screenVal = screenVal.replace('*', 'x');
  screenVal = screenVal.replace('/', '%');
  screen.text(screenVal);
}

// calculate total
function calcTotal(a) {
  evaluate = eval(a)
  return evaluate;
}

// display total
function displayTotal() {
  var result = calcTotal(queryStr);
  screen.text(result);

  if ( screen.text() === "37047734" ) {
    alert('hellhole');
    $('#calculator').addClass('rotated');
  }
}

// reset query
function resetQuery() {
  screen.text('');
  query = [];
}


// program
// get button value on click
numberButton.on('click', function() {
  inputValue = $(this).data('val');
  query.push(inputValue);

  // construct query
  constructQuery();
});

// get key pressed
document.onkeypress = function(evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var inputValue = String.fromCharCode(charCode);

  // create an array of allowed keys
  var allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*'];

  // push to array if in allowedKeys
  if ( allowedKeys.indexOf(inputValue) > -1 ) {
    query.push(inputValue);
  }

  // if is return or =
  if ( charCode == '13' || charCode == '61' ) {
    displayTotal();
  }

  // construct query
  constructQuery();
};

// equals button on click
equalsButton.on('click', function() {
  displayTotal();
});

// ce button on click
ceButton.on('click', function() {
  resetQuery();
});
