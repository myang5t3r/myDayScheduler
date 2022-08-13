////////////////    Variable declarations   //////////////////
// Get Dom elements
var rootEL = $("#root");
var dateEl = $("#currentDay");
var txtEl = $("textarea");



////////////////    Functions   /////////////////////////
// Function to display time
function time() {
    // call Date() method use options to display time
    var d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',  minute:'numeric', second:'numeric'}
    timeNow = d.toLocaleDateString(undefined, options)
    dateEl.text(timeNow);
    rootEL.append(dateEl)
}

// Function to change color of background based on time
function bgColor(){
    // Get hour from Date()
    var d = new Date();
    // create array to compare values
    var timeArray = [8,9,10,11,12,13,14,15,16,17]
    
    // Loop through array of times and compare to actual time
    // getHour() returns int between 0-23
    // Condition for past
    for (var i =0; i<timeArray.length;i++){
        if(timeArray[i] < d.getHours()){
            txtEl.eq(i).addClass('past')
        }
        else if(timeArray[i] === d.getHours()){
            txtEl.eq(i).addClass('present')
        }
        else if(timeArray[i] > d.getHours()){
            txtEl.eq(i).addClass('future')
        }
    }
}

////////////////    Event Handlers      /////////////////////// 

////////////////    Execute     ///////////////////////////// 
// Call setInterval method to display the time- call back function!!
setInterval(time,100)
bgColor()