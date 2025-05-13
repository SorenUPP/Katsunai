document.addEventListener('DOMContentLoaded', function() {
    // Randomize stars for existing reviews
    const reviewCards = document.querySelectorAll('.review-card .stars');
    reviewCards.forEach(starsDiv => {
        const randomStars = Math.floor(Math.random() * 3) + 3; // Randomize between 3 to 5 stars

        const stars = Array.from({ length: 5 }, (_, i) => {
            return `<span class="star ${i < randomStars ? 'filled' : ''}">★</span>`; // Add "filled" class dynamically
        }).join('');
        
        starsDiv.innerHTML = stars;  // Set the stars
    });

    // Form submission for adding reviews
    const reviewForm = document.querySelector('.review-form');
    const reviewText = document.getElementById('review-text');
    const reviewRating = document.getElementById('review-rating');
    const reviewsContainer = document.querySelector('.reviews');

    // Function to generate stars based on rating
    function generateRandomStars(rating) {
        return Array.from({ length: 5 }, (_, i) => {
            return `<span class="star ${i < rating ? 'filled' : ''}">★</span>`;
        }).join('');
    }
    

    // Handle form submission
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        const review = reviewText.value.trim();
        const rating = parseInt(reviewRating.value);

        if (review) {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');

            const stars = generateRandomStars(rating); 

            reviewCard.innerHTML = `
                <div class="stars">${stars}</div>
                <p>"${review}"</p>
                <h4>– Anonymous</h4>
            `;

            // Append the new review to the reviews container
            reviewsContainer.insertBefore(reviewCard, reviewsContainer.firstChild);
            reviewText.value = '';
            reviewRating.value = '5'; 
        }
    });
});
