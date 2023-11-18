function clock()
{
    let currentDate = new Date(); //create a Date object and use it to fetch Year/Month/Day/Hours/Minutes/Seconds

    let time = currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();

    console.log(time);
}

//an interval is set to call clock() in every 1 sec.

const updateEverySec = setInterval(clock, 1000 );