const months=[31,28,31,30,31,30,31,31,30,31,30,31]

function ageCalculate(){
let birthInputDate = new Date(
document.getElementById("birth-date-input").value
);
let CurrentInputDate = new Date(
    document.getElementById("current-date-input").value
    );
    let calculated_month, calculated_date, calculated_year;

    let birthDetails = {
        birthDate: birthInputDate.getDate(),
        birthMonth: birthInputDate.getMonth() + 1,
        birthYear: birthInputDate.getFullYear(),
};
let currentdetails = {
    currentDate: CurrentInputDate.getDate(),
    currentMonth: CurrentInputDate.getMonth() + 1,
    currentYear: CurrentInputDate.getFullYear(),
};

leapChecker(currentdetails.currentYear);

if (
    birthDetails.birthYear > currentdetails.currentYear ||
    (birthDetails.birthMonth > currentdetails.currentMonth &&
        birthDetails.birthYear == currentdetails.currentYear) ||
        (birthDetails.birthDate > currentdetails.currentDate &&
            birthDetails.birthMonth == currentdetails.currentMonth &&
            birthDetails.birthYear == currentdetails.currentYear)
            ) {
                alert("NOT BORN YET");
                return;
}

calculated_year = currentdetails.currentYear - birthDetails.birthYear;

if (currentdetails.currentMonth >= birthDetails.birthMonth){
    calculated_month = currentdetails.currentMonth - birthDetails.birthMonth;
} else {
    calculated_year--;
    calculated_month =
    12 + currentdetails.currentMonth - birthDetails.birthMonth;
}

if (currentdetails.currentDate >= birthDetails.birthDate){
    calculated_date = currentdetails.currentDate - birthDetails.birthDate;
} else {
    calculated_month--;
    let days = months[currentdetails.currentMonth - 2];
    calculated_date =
    days + currentdetails.currentDate - birthDetails.birthDate;
    if (calculated_month < 0){
        calculated_month = 11;
        calculated_year--;
    }
}
displayResult(calculated_date,calculated_month,calculated_year);
}
function displayResult(bDate, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}
function leapChecker(year) {
if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
  months[1] = 29;
} else {
    months[1] = 28;
 }
}




