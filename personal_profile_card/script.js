// ===============================
// SELECT ELEMENTS
// ===============================

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// ===============================
// LOAD SAVED THEME
// ===============================

// Check if a theme was previously saved

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark");
    themeToggle.checked = true;

}

// ===============================
// THEME TOGGLE
// ===============================

themeToggle.addEventListener("change", () => {

    // Toggle dark mode

    body.classList.toggle("dark");

    // Save user's preference

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    }

    else {

        localStorage.setItem("theme", "light");

    }

});