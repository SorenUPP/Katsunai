let container = document.querySelector('.card-container');
let cards = document.querySelectorAll('.card');
let currentIndex = 0; 

// Function to set the "active", "next", and "prev" classes
function updateCards() {
  
    cards.forEach(card => {
        card.classList.remove('active', 'next', 'prev');
    });

    // Set the "active" card to the center
    cards[currentIndex].classList.add('active');

    // Set the "next" card to the right
    let nextIndex = (currentIndex + 1) % cards.length;
    cards[nextIndex].classList.add('next');

    // Set the "prev" card to the left
    let prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[prevIndex].classList.add('prev');
}

// Set up the interval to automatically change the images
setInterval(() => {
   
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}, 3000); 


updateCards();
