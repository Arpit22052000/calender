let currentDate = new Date; // get current date
currentDate.setMonth(11);
let first = currentDate.getDate() - currentDate.getDay(); // week first day, sunday
console.log("currentDate", currentDate)
console.log("currentDate.getDate()", currentDate.getDate())
console.log("currentDate.getDay()", currentDate.getDay())

//top type of date showcase
let fullDate = currentDate.toDateString();
let fullDate1 = currentDate.toLocaleString();
document.querySelector(".dayFormat").innerText = fullDate;

// evenlistener on fullDate
const change = document.querySelector('.myBtn');
change.addEventListener("click", changeFormat);
function changeFormat() {
    document.querySelector(".dayFormat").innerText = fullDate1;
}




// Days under week
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

for (let i = 0; i < days.length; i++) {
    const day = days[i];
    const index = i + first;
    document.querySelector(`.${day}`).innerText = index;
}


// button previous 
const prev = document.querySelector('.previous');
prev.addEventListener("click", previous);
function previous() {
    first = first - 7;
    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const index = i + first;
        document.querySelector(`.${day}`).innerText = index;
    }
}

// button next
const next = document.querySelector('.next');
next.addEventListener("click", nextDay);
function nextDay() {
    first = first + 7;
    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const index = i + first;
        document.querySelector(`.${day}`).innerText = index;
    }
}



