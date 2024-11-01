// Function to display the Christmas countdown
function displayChristmasCountdown() {
    const today = new Date();
    let christmasDate = new Date(today.getFullYear(), 11, 25); // Dec 25 of the current year

    // If Christmas has already passed, set it to next year
    if (today > christmasDate) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    }

    // Calculate the days difference and display it
    const daysUntilChristmas = Math.ceil((christmasDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `${daysUntilChristmas} days left!!`;
}

// Function to create a snowflake element
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerText = "❄️";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.fontSize = `${Math.random() * 2 + 0.5}em`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.body.appendChild(snowflake);

    // Remove snowflake after animation ends
    setTimeout(() => snowflake.remove(), 8000);
}

// Function to start snowfall for a limited time (7 seconds)
function startSnowfall() {
    const snowInterval = setInterval(createSnowflake, 100); // Adjust the interval for density

    // Stop creating snowflakes after 3 seconds
    setTimeout(() => {
        clearInterval(snowInterval);
    }, 3000);
}

// Initialize functions on page load
document.addEventListener("DOMContentLoaded", () => {
    displayChristmasCountdown();
    startSnowfall();
});