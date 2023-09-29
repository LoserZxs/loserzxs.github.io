function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const optionsDate = { month: 'long' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    const formattedDate = formatWithOrdinal(currentDateTime, optionsDate);
    const formattedYear = currentDateTime.getFullYear();
    const formattedTime = currentDateTime.toLocaleTimeString('en-US', optionsTime);

    const dateTimeElement = document.getElementById('currentDateTime');
    dateTimeElement.textContent = `${formattedDate}, ${formattedYear} 
    ${formattedTime}`;
}

function formatWithOrdinal(date, options) {
    const day = date.getDate();
    const ordinal = getOrdinal(day);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return `${formattedDate.replace(/\d+/, '')} ${ordinal}`;
}

function getOrdinal(n) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}


// Display the current date and time with ordinal numbers when the page loads
displayCurrentDateTime();

// Update the current date and time with ordinal numbers every second (1000 milliseconds)
setInterval(displayCurrentDateTime, 1000);

