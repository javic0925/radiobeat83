// Function to get the current date and time with just the hour and minute
function getCurrentDateAndTime() {
  const dateTime = new Date();
  const options = { hour12: true, hour: '2-digit', minute: '2-digit', second: undefined };
  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const timeString = dateTime.toLocaleTimeString("en-US", { timeZone: "America/New_York" }, options);
  const dateString = dateTime.toLocaleDateString("en-US", dateOptions);
  return `${dateString} ${timeString}`;
}

// Target an HTML element to display the current date and time
const dateDisplay = document.getElementById("date-container");

const dateModal = document.getElementById("date");

dateModal.setAttribute('value', getCurrentDateAndTime());

// Set the innerHTML of the element to the current date and time returned by the function
dateDisplay.innerHTML = getCurrentDateAndTime();

// Update the time every minute
setInterval(() => {
  dateDisplay.innerHTML = getCurrentDateAndTime();
}, 1000);