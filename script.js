const createSnowflake = () => {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerText = "❄️";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.fontSize = `${Math.random() * 2 + 0.5}em`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.body.appendChild(snowflake);

    // Remove snowflake after animation ends
    setTimeout(() => snowflake.remove(), 8000);
};

// Create snowflakes at intervals
setInterval(createSnowflake, 100); // Adjust the interval for density