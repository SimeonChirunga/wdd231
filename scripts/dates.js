// let currentYear = new Date().getFullYear();
// document.getElementById("year").innerHTML = currentYear;
// document.write(new Date(document.lastModified).toLocaleString());
// Get the current year
document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the year element
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Update the last modified date element
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleString()}`;
    }
});




