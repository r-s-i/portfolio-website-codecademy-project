// Displays different greetings based on the time of day:
function greetVisiter() {
  const theCurrentHour = new Date().getHours();

  if (theCurrentHour < 6) {
    return "Hello, you're up early...or late";
  } else if (theCurrentHour < 12) {
    return "Good morning";
  } else {
    return "Good afternoon";
  }
}

document.getElementById("greeting").innerHTML = greetVisiter();

