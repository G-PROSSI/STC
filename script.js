document.addEventListener("DOMContentLoaded", function() {
    // Get the container for the photo gallery
    const photoGallery = document.getElementById("photoGallery");

    // Replace "images/" with the correct path to your images folder
    const imagePath = "images/";

    // Fetch image files from the "images" folder
    fetch(imagePath)
        .then(response => response.text())
        .then(html => {
            // Create a temporary element to parse the HTML
            const tempElement = document.createElement("div");
            tempElement.innerHTML = html;

            // Extract image filenames
            const imageFilenames = Array.from(tempElement.querySelectorAll("a"))
                .map(link => link.href.split('/').pop());

            // Append images to the photo gallery
            imageFilenames.forEach(filename => {
                const imgElement = document.createElement("img");
                imgElement.src = imagePath + filename;
                imgElement.alt = filename; // Use the filename as alt text (you can customize this)
                photoGallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching images:", error));
});
