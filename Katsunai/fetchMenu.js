const url = 'https://chinese-food-db.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '6400b7ff2fmshfb2e55e3a15d938p109b0cjsneb776cb896e8',
    'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
  }
};

let menuItems = []; 

async function fetchMenu() {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); 

    console.log(result);

    menuItems = result; 

    renderMenu(menuItems);

    // Search bar functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function() {
      const query = searchBar.value.toLowerCase();
      const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(query));
      renderMenu(filteredItems);
    });

    // Category button functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category').toLowerCase();
        const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(category));
        
        renderMenu(filteredItems);
        
        // Also update search bar value visually (optional)
        searchBar.value = category.charAt(0).toUpperCase() + category.slice(1);
      });
    });

  } catch (error) {
    console.error('Failed to load menu:', error);
    const container = document.getElementById('menu-items');
    container.innerHTML = '<p>Failed to load menu. Please try again later.</p>';
  }
}

// Function to render the menu items
function renderMenu(items) {
  const container = document.getElementById('menu-items');
  container.innerHTML = ''; 

  items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.innerHTML = `
      <div class="image-container">
        <img src="${item.image}" alt="${item.title}">
        <div class="overlay">
          <h3>${item.title}</h3>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// Load menu
fetchMenu();
