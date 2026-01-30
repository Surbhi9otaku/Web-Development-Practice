console.log("Theme-based Dynamic Text Changer Application loaded successfully");

const themeSelector = document.getElementById("themeSelector");
const dynamicText = document.getElementById("dynamicText");
const body = document.body;

themeSelector.addEventListener("change", () => {
    const selectedTheme = themeSelector.value;

    body.className = "";

    body.classList.add(selectedTheme);

    if (selectedTheme === "light") {
        dynamicText.innerText = "🌞 Light theme is calm and clean!";
    }
    else if (selectedTheme === "dark") {
        dynamicText.innerText = "🌙 Dark theme is easy on eyes!";
    }
    else if (selectedTheme === "colorful") {
        dynamicText.innerText = "🎨 Colorful theme is fun and energetic!";
    }
});