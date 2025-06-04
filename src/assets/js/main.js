// This script executes once the entire page, including all resources (images, stylesheets), has finished loading.
window.onload = function() {
    // Log to console to confirm script execution, useful for debugging.
    console.log("JavaScript Loaded After Eleventy Build");

    // --- Sticky Header Functionality ---
    // Modifies the header's appearance based on scroll position.
    const header = document.querySelector(".sticky-header");
    if (header) {
        window.addEventListener("scroll", () => {
            // Adds a 'scrolled' class to the header when the page is scrolled down more than 50 pixels.
            // This class can be used in CSS to apply different styles (e.g., background, shadow).
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    } else {
        // Warn if the header element isn't found, which might indicate an issue in the HTML structure.
        console.warn("Sticky header not found. Ensure Eleventy is generating it.");
    }

    // --- Mobile Navigation Toggle --- 
    // Manages the display and behavior of the mobile navigation menu.
    const navToggle = document.getElementById("nav-toggle"); // The hamburger button
    const nav = document.querySelector(".nav"); // The navigation menu itself

    if (navToggle && nav) {
        // Event listener for the navigation toggle button (hamburger).
        navToggle.addEventListener("click", () => {
            // Toggles the 'nav-open' class on the navigation menu to show/hide it.
            nav.classList.toggle("nav-open");
            // Toggles an 'active' class on the button itself, e.g., to change hamburger to a close icon.
            navToggle.classList.toggle("active");
        });

        // Improves UX by closing the mobile menu if a click occurs outside of it.
        document.addEventListener("click", (event) => {
            // Checks if the click target is outside the navigation menu and also not the toggle button.
            if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
                nav.classList.remove("nav-open");
                navToggle.classList.remove("active");
            }
        });

        // Closes the mobile menu when a navigation link is clicked.
        // This is standard behavior for single-page applications or smooth-scrolling sites.
        document.querySelectorAll(".nav__list a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("nav-open");
                navToggle.classList.remove("active");
            });
        });
    } else {
        // Warn if navigation elements are missing.
        console.warn("Navigation elements not found. Ensure Eleventy is generating them.");
    }

    // --- "Go to Top" Button Functionality ---
    // Manages the visibility and action of the "Go to Top" button.
    const goToTopButton = document.getElementById('go-to-top');

    if (goToTopButton) {
        // Shows the button when the user scrolls down a certain amount (300 pixels).
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                goToTopButton.classList.add("show");
            } else {
                goToTopButton.classList.remove("show");
            }
        });

        // Smoothly scrolls the page to the top when the button is clicked.
        goToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Confirmation log for the button's script.
        console.log("Go to Top button script loaded.");
    } else {
        // Warn if the button element is not found.
        console.warn("Go to Top button not found. Ensure Eleventy is generating it.");
    }
};
