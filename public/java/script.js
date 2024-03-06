const galleryContainer = document.querySelector('.gallery-container');
const gallerControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.intervalId = null;
        this.rotationInterval = 3000; // Adjust this value to change the rotation interval in milliseconds
    }

    startRotation() {
        this.intervalId = setInterval(() => {
            this.rotateGallery();
        }, this.rotationInterval);
    }

    stopRotation() {
        clearInterval(this.intervalId);
    }

    rotateGallery() {
        const lastItem = this.carouselArray.pop();
        this.carouselArray.unshift(lastItem);
        this.updateGallery();
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
            el.classList.remove('gallery-item-7');
            el.classList.remove('gallery-item-8');
            el.classList.remove('gallery-item-9');
            el.classList.remove('gallery-item-10');
            el.classList.remove('gallery-item-11');
            el.classList.remove('gallery-item-12');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }


    useControls() {
        const triggers = [...gallerControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

    addHoverListeners() {
        this.carouselContainer.addEventListener('mouseenter', () => {
            this.stopRotation();
        });

        this.carouselContainer.addEventListener('mouseleave', () => {
            this.startRotation();
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.startRotation(); // Start automatic rotation
exampleCarousel.addHoverListeners(); // Add hover listeners to stop and start rotation


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
