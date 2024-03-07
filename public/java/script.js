// Select the gallery container and gallery controls container
const galleryContainer = document.querySelector('.gallery-container');

// Define gallery controls (previous and next)
const galleryControls = ['previous', 'next'];

// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Define a class for the carousel functionality
class Carousel {
    constructor(container, items, controls) {
        // Initialize carousel properties
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.intervalId = null;
        this.rotationInterval = 2500; // Adjust this value to change the rotation interval in milliseconds
    }

    // Start automatic rotation of the gallery
    startRotation() {
        this.intervalId = setInterval(() => {
            this.rotateGallery();
        }, this.rotationInterval);
    }

    // Stop automatic rotation of the gallery
    stopRotation() {
        clearInterval(this.intervalId);
    }

    // Rotate the gallery items
    rotateGallery() {
        const lastItem = this.carouselArray.pop();
        this.carouselArray.unshift(lastItem);
        this.updateGallery();
    }

    // Update the gallery items with appropriate classes
    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove(...Array.from({ length: 12 }, (_, i) => `gallery-item-${i + 1}`));
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    // Add hover listeners to stop and start rotation on mouse enter and leave
    addHoverListeners() {
        this.carouselContainer.addEventListener('mouseenter', () => {
            this.stopRotation();
        });

        this.carouselContainer.addEventListener('mouseleave', () => {
            this.startRotation();
        });
    }
}

// Initialize carousel with gallery container, gallery items, and gallery controls
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// Start automatic rotation
exampleCarousel.startRotation();

// Add hover listeners to stop and start rotation
exampleCarousel.addHoverListeners();

// Function to toggle responsive navigation
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navigointi") {
        x.className += " responsive";
    } else {
        x.className = "navigointi";
    }
}

// Fetch the API key from the server
fetch('/api-key')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const apiKey = data.apiKey;
        // Call the function to fetch data from Google Sheets using the API key
        getSheetData(apiKey);
    })
    .catch(error => console.error('Error fetching API key:', error.message));

// Function to fetch data from Google Sheets using the API key
function getSheetData(apiKey) {
    const documentId = '1XgKMmJLKHzUeC-vpI__poWJLlg8dmJGr4kt6ws5TbcY';
    const range = 'Kokonaisaika!A2';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${documentId}/values/${range}?key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the retrieved data here
            console.log('Retrieved data:', data); // Log the retrieved data
            updatePageWithData(data); // Call a function to update the page with the fetched data
        })
        .catch(error => console.error('Error fetching data:', error.message));
}

// Function to update the page with fetched data
function updatePageWithData(data) {
    const asideContainer = document.getElementById('virkkaus');
    console.log('Aside container:', asideContainer); // Log the aside container element

    // Assuming your data contains only one row
    const rowData = data.values[0];
    console.log('Row data:', rowData); // Log the row data

    // Format the data for display
    const timeString = rowData[0];
    console.log('Time string:', timeString); // Log the formatted time string

    // Create HTML elements to display the data
    const dataDiv = document.createElement('div');
    const titleParagraph = document.createElement('h2');
    const timeParagraph = document.createElement('p');

    // Set content for title and time paragraphs
    titleParagraph.textContent = 'Virkkausaika';
    timeParagraph.textContent = timeString;

    // Append paragraphs to the data div
    dataDiv.appendChild(titleParagraph);
    dataDiv.appendChild(timeParagraph);

    // Clear previous content of aside container
    asideContainer.innerHTML = '';

    // Append data div to aside container
    asideContainer.appendChild(dataDiv);
}
