
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function getRandomFlightInfo() {
    const times = ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    const prices = ["$100", "$150", "$200", "$250"];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    return { time: randomTime, price: randomPrice };
}

function generateCalendar(month, year) {
    const calendarElement = document.getElementById('calendar');
    const monthYearElement = document.getElementById('month-year');

   
    calendarElement.innerHTML = '';
    monthYearElement.innerText = `${monthNames[month]} ${year}`;

   
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

   
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
        const dayNameElement = document.createElement('div');
        dayNameElement.className = 'day day-name';
        dayNameElement.innerText = day;
        calendarElement.appendChild(dayNameElement);
    });

   
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        calendarElement.appendChild(emptyDay);
    }

   
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = day;

        const flightInfo = getRandomFlightInfo();
        const flightInfoElement = document.createElement('div');
        flightInfoElement.className = 'flight-info';
        flightInfoElement.innerText = `Time: ${flightInfo.time}, Price: ${flightInfo.price}`;
        
        dayElement.appendChild(flightInfoElement);
        calendarElement.appendChild(dayElement);
    }
}


document.getElementById('prev').onclick = () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
};

document.getElementById('next').onclick = () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
};


generateCalendar(currentMonth, currentYear);
