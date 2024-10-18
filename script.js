function checkTime() {
    var timeInput = document.getElementById('timeInput').value;
    var time = parseInt(timeInput, 10);

    if (isNaN(time) || time < 0 || time > 2359 || timeInput.length !== 4) {
        swal("Invalid time format!", "Please enter time in HHMM format.", "error");
    } else if (time >= 0 && time <= 1159) {
        swal("Good Morning!", "Have a wonderful day!", "success");
    } else if (time >= 1200 && time <= 1659) {
        swal("Good Afternoon!", "Hope you're having a great day!", "info");
    } else if (time >= 1700 && time <= 1959) {
        swal("Good Evening!", "Enjoy your evening!", "warning");
    } else if (time >= 2000 && time <= 2359) {
        swal("Good Night!", "Sleep well and sweet dreams!", "success");
    } else {
        swal("Error!", "Time input is out of expected range.", "error");
    }
}