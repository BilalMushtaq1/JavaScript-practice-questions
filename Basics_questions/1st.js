// this is the optimized programs for showing the current day, date and time in the latest js --version

let today = new Date();
let day = today.getDay();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is : ${daylist[day]}`);


// displaying the current time 

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();


let comparison = (hour >= 12)? "PM" : "AM";
hour = (hour >= 12)? hour -12 : hour;

if(hour === 0){
    hour = 12;
    comparison = (comparison === "AM")? "Midnight" : "Noon";
}

console.log(`Current time is : ${hour}${comparison} : ${minute} : ${second}`);