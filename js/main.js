// delare variables
var screen = $('#screen'),
    numberButton = $('.number'),
	  buttonValue = '',
	  query = [],
	  queryStr = '',
	  equalsButton = $('#equals'),
	  ceButton = $('#ce');
    screenVal = '';

// functions
// construct query
function constructQuery() {
	query.push(buttonValue);
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

// program
// get button value on click
numberButton.on('click', function() {
	buttonValue = $(this).data('val');

   // construct query
   constructQuery();
});

// equals button on click
equalsButton.on('click', function() {
	var result = calcTotal(queryStr);
	screen.text(result);

  if ( screen.text() === "37047734" ) {
    alert('hellhole');
  }
});

// ce button on click
ceButton.on('click', function() {
	screen.text('');
  query = [];
});
