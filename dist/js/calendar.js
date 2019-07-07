let date = new Date();
//date.setDate();

let day = date.getDay();
let endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
let prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
let today = new Date();

let months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"
];

function renderDate() {
    checkDate(); 
    document.getElementById("month").innerHTML = months[date.getMonth()];
    document.getElementById("date_str").innerHTML = date.toDateString();

    let cells = "";

    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }

    for (i = 1; i < endDate; i++) {
        if (i == today.getDate() && date.getMonth() == today.getMonth()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
} // End of dateRender

function moveDate(para) {
    if (para == 'prev') {
        date.setMonth(date.getMonth() - 1);
        checkDate();
    } else if (para == 'next') {
        date.setMonth(date.getMonth() + 1);
        checkDate();
    }
    renderDate();
}

function checkDate() {
    if (months[date.getMonth()] == months[0]){
        document.getElementById("photo").src = "images/img1.jpeg";
    } else if (months[date.getMonth()] == months[1]){
        document.getElementById("photo").src = "images/img2.jpg";
    } else if (months[date.getMonth()] == months[2]){
        document.getElementById("photo").src = "images/img3.jpeg";
    } else if (months[date.getMonth()] == months[3]){
        document.getElementById("photo").src = "images/img4.jpeg";
    } else if (months[date.getMonth()] == months[4]){
        document.getElementById("photo").src = "images/img5.jpeg";
    } else if (months[date.getMonth()] == months[5]){
        document.getElementById("photo").src = "images/img6.jpeg";
    } else if (months[date.getMonth()] == months[6]){
        document.getElementById("photo").src = "images/img7.jpeg";
    } else if (months[date.getMonth()] == months[7]){
        document.getElementById("photo").src = "images/img8.jpeg";
    } else if (months[date.getMonth()] == months[8]){
        document.getElementById("photo").src = "images/img9.jpeg";
    } else if (months[date.getMonth()] == months[9]){
        document.getElementById("photo").src = "images/img10.jpeg";
    } else if (months[date.getMonth()] == months[10]){
        document.getElementById("photo").src = "images/img11.jpeg";
    } else if (months[date.getMonth()] == months[11]){
        document.getElementById("photo").src = "images/img12.jpg";
    }
}