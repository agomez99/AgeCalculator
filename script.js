// Calculate the age based on the current date and user input
function calculateAge() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const inputDay = Number(document.getElementById("day").value);
    const inputMonth = Number(document.getElementById("month").value);
    const inputYear = Number(document.getElementById("year").value);

    // Validate input
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 // Refactored code: function calculateAge() { const currentDate = new Date(), currentDay = currentDate.getDate(), currentMonth = currentDate.getMonth() + 1, currentYear = currentDate.getFullYear(), monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], inputDay = Number(document.getElementById("day").value), inputMonth = Number(document.getElementById("month").value), inputYear = Number(document.getElementById("year").value);

// Input validation
if (inputMonth < 1 || inputMonth > 12 || inputDay < 1 || inputDay > monthDays[inputMonth - 1] || inputYear < 0) {
    alert("Invalid input values entered! Please try again");
    return;
}

// Calculate age in years, months and days
let ageInDays = currentDay - inputDay,
    ageInMonths = currentMonth - inputMonth,
    ageInYears = currentYear - inputYear;

if (ageInMonths < 0) {
    ageInMonths += 12;
    ageInYears--;
}

if (ageInDays < 0) {
    ageInDays += monthDays[currentMonth - 1];
    ageInMonths--;
}

// Update HTML with calculated age
document.getElementById("ageInYears").innerHTML = ageInYears + " years";
document.getElementById("ageInMonths").innerHTML = ageInMonths + " months";
document.getElementById("ageInDays").innerHTML = ageInDays + " days";

// Reset input fields
document.getElementById("year").value = "";
document.getElementById("month").value = "";
document.getElementById("day").value = "";


}


