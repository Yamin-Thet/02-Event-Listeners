var count = 0;

// The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: Add a comment describing the functionality of the following code:
function setCounterText() {
    countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
    count++;
    setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
decrementEl.addEventListener('click', function() {
    // Action will fire if count is greater than 0
    if (count > 0) {
        count--;
        setCounterText();
    }
});