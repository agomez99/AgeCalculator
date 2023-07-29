function calculateAge() {

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const inputDayElement = document.getElementById('day');
  const inputMonthElement = document.getElementById('month');
  const inputYearElement = document.getElementById('year');

  const errorTitleDay = document.getElementById('title-error');
  const errorTitleMonth = document.getElementById('month-error');
  const errorTitleYear = document.getElementById('year-error');

  const inputDay = Number(inputDayElement.value);
  const inputMonth = Number(inputMonthElement.value);
  const inputYear = Number(inputYearElement.value);

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const errorMessages = {
    month: document.getElementById('alert-month'),
    day: document.getElementById('alert-day'),
    year: document.getElementById('alert-year'),
  };

  const clearErrorMessage = (element) => {
    element.innerHTML = '';
  };

  // Event listeners to clear error messages
  inputDayElement.addEventListener('input', () => {
    clearErrorMessage(errorMessages.day);
    errorTitleDay.style = '';
  });

  inputMonthElement.addEventListener('input', () => {
    clearErrorMessage(errorMessages.month);
    errorTitleMonth.style = '';
  });

  inputYearElement.addEventListener('input', () => {
    clearErrorMessage(errorMessages.year);
    errorTitleYear.style = '';
  });

  // Clear error messages
  for (const key in errorMessages) {
    clearErrorMessage(errorMessages[key]);
  }

  let hasError = false;

  // Validate input day
  if (inputDay === 0 || inputDay > monthDays[inputMonth - 1]) {
    errorMessages.day.innerHTML = inputDay === 0 ? 'This field is required' : 'Must be a valid day';
    errorTitleDay.style = 'color:red';
    hasError = true;
  }

  // Validate input month
  if (inputMonth < 1 || inputMonth > 12) {
    errorMessages.month.innerHTML = inputMonth === 0 ? 'This field is required' : 'Must be a valid month';
    errorTitleMonth.style = 'color:red';
    hasError = true;
  }

  // Validate input year
  if (inputYear < 1900 || inputYear > currentYear) {
    errorMessages.year.innerHTML = inputYear === 0 ? 'This field is required' : 'Must be a valid year';
    errorTitleYear.style = 'color:hsl(0, 100%, 67%)';
    hasError = true;
  }

  // Validate input day for February in leap years
  if (inputMonth === 2 && inputDay > 29 && (inputYear % 4 !== 0 || (inputYear % 100 === 0 && inputYear % 400 !== 0))) {
    errorMessages.day.innerHTML = 'Must be a valid day';
    hasError = true;
  }

  // Return if there are any errors
  if (hasError) {
        // Restore the input values in case of errors
        inputDayElement.value = storedInputDay;
        inputMonthElement.value = storedInputMonth;
        inputYearElement.value = storedInputYear;
    return;
  }

  // Calculate age
  let ageInDays = currentDay - inputDay;
  let ageInMonths = currentMonth - inputMonth;
  let ageInYears = currentYear - inputYear;

  // Adjust months and years if necessary
  if (ageInMonths < 0) {
    ageInMonths += 12;
    ageInYears--;
  }

  if (ageInDays < 0) {
    ageInDays += monthDays[currentMonth - 1];
    ageInMonths--;
  }

  // Display age
  document.getElementById('ageInYears').innerHTML = `<span class='color-purp'>${ageInYears}</span> years`;
  document.getElementById('ageInMonths').innerHTML = `<span class='color-purp'>${ageInMonths}</span> months`;
  document.getElementById('ageInDays').innerHTML = `<span class='color-purp'>${ageInDays}</span> days`;

  // Clear input fields
  //inputDayElement.value = '';
  //inputMonthElement.value = '';
  //inputYearElement.value = '';

  // Clear error messages
  for (const key in errorMessages) {
    clearErrorMessage(errorMessages[key]);
  }
}
