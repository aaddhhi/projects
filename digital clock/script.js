// Function to update the clock every second
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").innerText = timeString;

    // Check if alarm time matches the current time
    if (alarmTime === timeString) {
        document.getElementById("alarmSound").play();
    }
}

// Function to populate the alarm dropdowns
function populateTimeOptions() {
    let hoursSelect = document.getElementById("hours");
    let minutesSelect = document.getElementById("minutes");

    for (let i = 1; i <= 12; i++) {
        let hourOption = document.createElement("option");
        hourOption.value = i;
        hourOption.innerText = i;
        hoursSelect.appendChild(hourOption);
    }

    for (let i = 0; i < 60; i++) {
        let minuteOption = document.createElement("option");
        minuteOption.value = i < 10 ? "0" + i : i;
        minuteOption.innerText = i < 10 ? "0" + i : i;
        minutesSelect.appendChild(minuteOption);
    }
}

// Function to set the alarm
let alarmTime = null;
document.getElementById("setAlarm").addEventListener("click", function () {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let ampm = document.getElementById("ampm").value;

    alarmTime = `${hours}:${minutes}:00 ${ampm}`;
    alert(`Alarm set for ${alarmTime}`);
});

// Function to clear the alarm
document.getElementById("clearAlarm").addEventListener("click", function () {
    alarmTime = null;
    document.getElementById("alarmSound").pause();
    document.getElementById("alarmSound").currentTime = 0;
    alert("Alarm cleared!");
});

// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        this.innerText = "☀️ Light Mode";
    } else {
        this.innerText = "🌙 Dark Mode";
    }
});

// Initialize clock and populate dropdowns
populateTimeOptions();
setInterval(updateClock, 1000);
