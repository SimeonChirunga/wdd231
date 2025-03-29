document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the year element
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Get the current date and time
    const currentDate = new Date();

    // Format the date as needed
    const formattedDate = currentDate.toLocaleString();

    // Update the last modified date element
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
    }
});

const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelector("nav ul");

menubutton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    menubutton.classList.toggle("open");
    menuitems.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!menubutton.contains(e.target) && !menuitems.contains(e.target)) {
        menubutton.classList.remove("open");
        menuitems.classList.remove("open");
    }
});










