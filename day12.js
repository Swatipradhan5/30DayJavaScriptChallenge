// Challenge 12
// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
//  "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


function clock()
{
    let currentDate = new Date(); //create a Date object and use it to fetch Year/Month/Day/Hours/Minutes/Seconds

    let time = currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();

    console.log("Current Time is - ", time);
}

//an interval is set to call clock() in every 1 sec.

const updateEverySec = setInterval(clock, 1000 );