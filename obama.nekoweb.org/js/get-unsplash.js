async function fetchCuratedPatrioticImage() {
    const apiKey = "eW5NCptHvTKbDCAohBqSd-yevSyGLG4v2xArlXkPEvI";
    const keywords = ["american-flag", "usa military", "usa veterans", "usa-salute", "patriotism america", "united states of america", "usa heros", "obama", "usa presidents"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    const url = `https://api.unsplash.com/photos/random?query=${randomKeyword}&client_id=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data.urls.regular;

        document.getElementById("patriotic-img").src = imageUrl;
        document.getElementById("patriotic-img").alt = data.alt_description || "america images";
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}

fetchCuratedPatrioticImage();