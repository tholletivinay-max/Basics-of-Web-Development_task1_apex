```javascript
// 1. Select the navigation button and menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// 2. Open or close the mobile navigation menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

    menuToggle.textContent = isExpanded ? "✕" : "☰";

});

// 3. Close the mobile menu after clicking a navigation link

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// 4. Display the current year in the footer

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
```