// Image Gallery Code
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Reset slide index if out of bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display current slide and update dot status
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Search Filter Code
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.querySelector('.search-container');
    const cards = document.querySelectorAll('.cards');
    const nothingfound = document.getElementById("nothing-alert");

    // Function to filter icons based on search query
    function filterIcons(searchQuery) {
        let number = 0;

        cards.forEach(function (card) {
            const name = card.querySelector("h2").textContent.toLowerCase();

            if (name.includes(searchQuery.toLowerCase())) {
                card.style.display = "flex";
                number++;
            } else {
                card.style.display = "none";
            }
        });

        // Show/hide "nothing found" message
        if (number === 0) {
            nothingfound.style.display = "block";
        } else {
            nothingfound.style.display = "none";
        }
    }

    // Event listener for search input
    searchInput.addEventListener("input", function () {
        const searchQuery = searchInput.value.trim();
        filterIcons(searchQuery);
    });

    // Event listeners for search input focus and blur
    searchInput.addEventListener('focus', function () {
        searchContainer.classList.add('active');
    });

    searchInput.addEventListener('blur', function () {
        searchContainer.classList.remove('active');
    });
});
