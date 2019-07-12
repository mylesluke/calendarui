let date = new Date(); // Day, Month, Year
let months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"
    ];

// Generate Calendar
function renderDate() {

    date.setDate(1);
    let day = date.getDay(); // Day of the week (0-6)
    let endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // Full Year, Month, Days
    let prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let today = new Date();

    // Check Initial Month to Load Photo
    checkDate();
    // Print month
    document.getElementById("month").innerHTML = months[date.getMonth()];
    // Print out the date
    document.getElementById("date_str").innerHTML = date.toDateString();

    let cells = "";

    // loop through day of the week
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    // Loops through the entire year and month
    for (i = 1; i <= endDate; i++) {

        // Set date to todays date in the correct month 
        if (i == today.getDate() && date.getMonth() == today.getMonth()) {

            // Set todays date to active
            cells += "<div class='today'>" + i + "</div>";

        } else {

            // Print all other dates
            cells += "<div>" + i + "</div>";
        }
    }
    // Assign cells to 'days' element
    document.getElementsByClassName("days")[0].innerHTML = cells;

} // End of dateRender

// Change calendar month 
function moveDate(selection) {
    if (selection == 'prev') {
        date.setMonth(date.getMonth() - 1);
    } else if (selection == 'next') {
        date.setMonth(date.getMonth() + 1);
    }
    renderDate(); // Generate calendar
    checkDate(); // Change image based on month
}

// Checks date, changes photo based on current month
function checkDate() {
    if (months[date.getMonth()] == months[0]) {
        document.getElementById("photo").src = "images/img1.jpeg";
    } else if (months[date.getMonth()] == months[1]) {
        document.getElementById("photo").src = "images/img2.jpg";
    } else if (months[date.getMonth()] == months[2]) {
        document.getElementById("photo").src = "images/img3.jpeg";
    } else if (months[date.getMonth()] == months[3]) {
        document.getElementById("photo").src = "images/img4.jpeg";
    } else if (months[date.getMonth()] == months[4]) {
        document.getElementById("photo").src = "images/img5.jpeg";
    } else if (months[date.getMonth()] == months[5]) {
        document.getElementById("photo").src = "images/img6.jpeg";
    } else if (months[date.getMonth()] == months[6]) {
        document.getElementById("photo").src = "images/img7.jpeg";
    } else if (months[date.getMonth()] == months[7]) {
        document.getElementById("photo").src = "images/img8.jpeg";
    } else if (months[date.getMonth()] == months[8]) {
        document.getElementById("photo").src = "images/img9.jpeg";
    } else if (months[date.getMonth()] == months[9]) {
        document.getElementById("photo").src = "images/img10.jpeg";
    } else if (months[date.getMonth()] == months[10]) {
        document.getElementById("photo").src = "images/img11.jpeg";
    } else if (months[date.getMonth()] == months[11]) {
        document.getElementById("photo").src = "images/img12.jpg";
    }
}
