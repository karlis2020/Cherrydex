
// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Add any future JS interactivity here
});

// script.js

function searchCards() {
    // Get the value of the search bar and convert it to lowercase for case-insensitive search
    let searchQuery = document.getElementById('search-bar').value.toLowerCase();

    // Get all the cards
    let cards = document.querySelectorAll('.card');

    // Loop through each card and check if the card name matches the search query
    cards.forEach(card => {
        let cardName = card.querySelector('.card-name').textContent.toLowerCase();

        // If the card name includes the search query, display the card; otherwise, hide it
        if (cardName.includes(searchQuery)) {
            card.style.display = 'block'; // Show card
        } else {
            card.style.display = 'none'; // Hide card
        }
    });
}
