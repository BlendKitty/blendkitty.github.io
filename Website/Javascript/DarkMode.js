const darkmodeBtn = document.getElementById("darkmode-btn");

// Apply the saved mode when the page loads
if (localStorage.getItem("darkmode") === "true") {
    document.documentElement.classList.add("darkmode");
}

// Toggle dark mode
darkmodeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkmode");

    // Save the current state
    const darkmodeEnabled = document.documentElement.classList.contains("darkmode");
    localStorage.setItem("darkmode", darkmodeEnabled);
});