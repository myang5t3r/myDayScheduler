////////////////    Variable declarations   //////////////////
// Get Dom elements
var rootEL = $("#root");
var dateEl = $("#currentDay");
var txtEl = $("textarea");
var btnEl = $("button")

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
    // getHour() returns int between 0-23
    var timeArray = [8,9,10,11,12,13,14,15,16,17]
    // Loop through array of times and compare to actual time
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
// For each button add an event handler
btnEl.each(function(index){
    // When you click this save button do something
    $(this).on("click", function(event){
    event.preventDefault();
    // Check to see if we have any data in local storage
    if(localStorage.getItem("events")===null){
        // create array to store objects
        var events=[];
        // get the text value inside of textarea
        var str = txtEl.eq(index).val().trim();
        // create object of event data and index 
        eventData = {index:index, event:str};
        // push eventData to events arrau
        events.push(eventData);
        // Save events array to local storage
        localStorage.setItem("event", JSON.stringify(events));
    }else{
        // Pull array from local storage
        events = JSON.parse(localStorage.getItem("event"));
        // get the text value inside of textarea
        var str = txtEl.eq(index).val().trim();
        // create object of event data and index 
        eventData = {index:index, event:str};
        // push eventData to events arrau
        events.push(eventData);
        // Save events array to local storage
        localStorage.setItem("event", JSON.stringify(events));
    }
    })
})

  
// console.log(txtEl.eq(0).value)



////////////////    Execute     ///////////////////////////// 
// Call setInterval method to display the time- call back function!!
setInterval(time,100)
bgColor()