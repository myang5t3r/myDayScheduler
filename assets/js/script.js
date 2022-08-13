// Get Dom elements
var rootEL = $("#root");
var dateEl = $("#currentDay");



// Function to display time
function time() {
    // call Date() method use options to display time
    var d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',  minute:'numeric', second:'numeric'}
    timeNow = d.toLocaleDateString(undefined, options)
    dateEl.text(timeNow);
    rootEL.append(dateEl)
}


// Call setInterval method - call back function!!
setInterval(time,100)