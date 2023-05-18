function calculateAge() {
    // Present date
    const currentDate = new Date();
    const [currentDay, currentMonth, currentYear] = [
      currentDate.getDate(),
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    ];
  
    // Input date
    const [inputDay, inputMonth, inputYear] = [
      Number(document.getElementById('day').value),
      Number(document.getElementById('month').value),
      Number(document.getElementById('year').value)
    ];
  
    // Months and days counts
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Alert messages
    const alerts = {
      month: document.getElementById('alert-month'),
      day: document.getElementById('alert-day'),
      year: document.getElementById('alert-year')
    };
  
    // Input validation
    if (inputMonth < 1 || inputMonth > 12) {
      alerts.month.innerHTML = 'Must be a valid month';
      return;
    }
    if (inputDay < 1 || inputDay > monthDays[inputMonth - 1]) {
      alerts.day.innerHTML = 'Must be a valid day';
      return;
    }
    if (inputYear < 1900 || inputYear > currentYear) {
      alerts.year.innerHTML = 'Must be a valid year';
      return;
    }
    if (
      inputMonth === 2 &&
      inputDay > 28 &&
      (inputYear % 4 !== 0 || (inputYear % 100 === 0 && inputYear % 400 !== 0))
    ) {
      alerts.day.innerHTML = 'Must be a valid day';
      return;
    }
  
    // Calculate age in years, months, and days
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
  
    // Update HTML with calculated age
    document.getElementById('ageInYears').innerHTML = ageInYears + ' years';
    document.getElementById('ageInMonths').innerHTML = ageInMonths + ' months';
    document.getElementById('ageInDays').innerHTML = ageInDays + ' days';
  
    // Reset input fields
    [day, month, year].forEach(() => {
      document.getElementById().value = '';
;
    });
  }
  

