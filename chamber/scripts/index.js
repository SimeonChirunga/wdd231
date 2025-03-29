

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


document.addEventListener("DOMContentLoaded", () => {
    const spotlightContainer = document.querySelector(".spotlight");
    if (spotlightContainer) {
        fetch("./data/members.json")
            .then((response) => response.json())
            .then((data) => {
                // Filter members with gold or silver membership levels
                const eligibleMembers = data.data.filter(
                    (member) =>
                        member.membershipLevel.includes("gold") ||
                        member.membershipLevel.includes("silver")
                );

                // Randomly select 2-3 members
                const selectedMembers = [];
                const numberOfMembers = Math.min(
                    eligibleMembers.length,
                    Math.floor(Math.random() * 2) + 2
                );
                while (selectedMembers.length < numberOfMembers) {
                    const randomIndex = Math.floor(
                        Math.random() * eligibleMembers.length
                    );
                    selectedMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
                }

                // Render the members
                selectedMembers.forEach((member) => {
                    const memberDiv = document.createElement("div");
                    memberDiv.classList.add("member-card");
                    memberDiv.innerHTML = `
                    <p>${member.name}</p>
                    <img src="${member.image}" alt="${member.name} logo" width=50% >`;
                    spotlightContainer.appendChild(memberDiv);
                });
            })
            .catch((error) => console.error("Error loading members:", error));
    }


});



// // Initialize switches
window.addEventListener("load", function () {
    // Initialize the Switch component on all matching DOM nodes
    Array.from(document.querySelectorAll("[role^=switch]")).forEach((element) => {
        new Switch(element);
    });
    displayChamberMembers();
});

// Displaying Chamber members and there membership status
function displayChamberMembers() {
    const memberCardBox = document.querySelector(".member-card-section");
    const gridBtn = document.getElementById("grid-view");
    const listBtn = document.getElementById("list-view");

    const renderMembers = function (members) {
        members.forEach((member) => {
            const html = `
        <div class="member-card">
            <figure>
                <figcaption>${member.name}</figcaption>
                <div>
                    <img src="${member.image}" alt="${member.name} logo" width="1000" height="623" loading="lazy">
                </div>
              
            </figure>
            <div class="member-info-box">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">${member.website.slice(8)}</a>
                <img src="${member.membershipLevel
                }" alt="" >
            </div>
        </div>
      `;
            memberCardBox.insertAdjacentHTML("afterbegin", html);
        });
    };

    const getMembersData = async function () {
        const membersUrl = "./data/members.json";
        const response = await fetch(membersUrl);
        const data = await response.json();
        renderMembers(data.data);
    };
    getMembersData();

    // ///////////////////////////////////////////////////////
    const saveView = function (view) {
        localStorage.setItem("localView", JSON.stringify(view));
    };

    const changeView = function () {
        const btn = this;

        if (memberCardBox.classList.contains("list")) {
            memberCardBox.classList.remove("list");
        } else {
            memberCardBox.classList.remove("grid");
        }
        memberCardBox.classList.add(btn.id.slice(0, 4));
        saveView(btn.id.slice(0, 4));
    };

    const theView = function () {
        const isView = JSON.parse(localStorage.getItem("localView"));
        if (isView && isView != 0) {
            memberCardBox.classList.add(isView);
        }
    };
    theView();

    gridBtn.addEventListener("click", changeView.bind(gridBtn));
    listBtn.addEventListener("click", changeView.bind(listBtn));

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
}
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



// //////////////////////////////////////////////











