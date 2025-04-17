// Get the current date and time.
const now = new Date();

// Get the latest visit date from localStorage.
const lastVisited = localStorage.getItem("lastVisited");

// If this is the user's first visit, display a welcome message.
if (!lastVisited) {
  document.querySelector("#LastVisited").textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate the number of days between visits.
  const difference = now - new Date(lastVisited);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Display the appropriate message.
  if (days < 1) {
    document.querySelector("#LastVisited").textContent = "Back so soon! Awesome!";
  } else {
    document.querySelector("#LastVisited").textContent = `You last visited ${days} day ago.`;
  }
}

// Store the current date and time in localStorage.
localStorage.setItem("lastVisited", now.toUTCString());