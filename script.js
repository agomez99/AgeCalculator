function calculateAge() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const inputDayElement = document.getElementById('day');
  const inputMonthElement = document.getElementById('month');
  const inputYearElement = document.getElementById('year');

  const titleDay = document.getElementsByClassName('title-day');
  const titleMonth = document.getElementsByClassName('title-month');
  const titleYear = document.getElementsByClassName('title-year');

  const inputDay = Number(inputDayElement.value);
  const inputMonth = Number(inputMonthElement.value);
  const inputYear = Number(inputYearElement.value);

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const alerts = {
    month: document.getElementById('alert-month'),
    day: document.getElementById('alert-day'),
    year: document.getElementById('alert-year'),
     //titleMonth:document.getElementById('title-month'),
    // titleDay:document.getElementById('title-day'),
    // titleYear:document.getElementById('title-year')
  };

  const clearErrorMessage = (element) => {
    element.innerHTML = '';
  };

  inputDayElement.addEventListener('input', () => {

    clearErrorMessage(alerts.day);
    //clearErrorMessage(alerts.titleDay);
  });

  inputMonthElement.addEventListener('input', () => {
    clearErrorMessage(alerts.month);
  });

  inputYearElement.addEventListener('input', () => {
    clearErrorMessage(alerts.year);
  });

  for (const key in alerts) {
    clearErrorMessage(alerts[key]);
  }

  let hasError = false;

  if (inputDay === 0 || inputDay > monthDays[inputMonth - 1]) {
    alerts.day.innerHTML = inputDay === 0 ? 'This field is required' : 'Must be a valid day';
    //document.getElementById('title-day').classList.add('error-label');

    hasError = true;

  }



  if (inputMonth < 1 || inputMonth > 12) {
    alerts.month.innerHTML = inputMonth === 0 ? 'This field is required' :'Must be a valid month';
    hasError = true;

  }

  if (inputYear < 1900 || inputYear > currentYear) {
    alerts.year.innerHTML = inputYear === 0 ? 'This field is required' :'Must be a valid year';
    hasError = true;
  }

  if (inputMonth === 2 && inputDay > 31 && (inputYear % 4 !== 0 || (inputYear % 100 === 0 && inputYear % 400 !== 0))) {
    alerts.day.innerHTML = 'Must be a valid day';
    hasError = true;
  }

  if (hasError) {
    return;
  }

  let ageInDays = currentDay - inputDay;
  let ageInMonths = currentMonth - inputMonth;
  let ageInYears = currentYear - inputYear;

  if (ageInMonths < 0) {
    ageInMonths += 12;
    ageInYears--;
  }

  if (ageInDays < 0) {
    ageInDays += monthDays[currentMonth - 1];
    ageInMonths--;
  }

  document.getElementById('ageInYears').innerHTML = `<span class='color-purp'>${ageInYears}</span> years`;
  document.getElementById('ageInMonths').innerHTML = `<span class='color-purp'>${ageInMonths}</span> months`;
  document.getElementById('ageInDays').innerHTML = `<span class='color-purp'>${ageInDays}</span> days`;

  inputDayElement.value = '';
  inputMonthElement.value = '';
  inputYearElement.value = '';
  for (const key in alerts) {
    clearErrorMessage(alerts[key]);
  }



  for (const key in alerts) {
    alerts[key].innerHTML = '';
    document.getElementById(key).classList.remove('error-label');
  }
}
