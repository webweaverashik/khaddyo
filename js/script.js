// ---- Scroll to top button settings ----
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// ---- Scroll to Menu Buttons ----
const scrollToMenuButtons = document.querySelectorAll('.scrollToMenuButton');
scrollToMenuButtons.forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('menu').scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ---- JS Food API Calling ----// Function to create a card for each meal with a 20-word excerpt of the instructions
// Function to create a card for each meal with a 20-word excerpt of the instructions
function createMealCard(meal) {
  // Limit strInstructions to the first 20 words
  const instructionsExcerpt = meal.strInstructions.split(' ').slice(0, 20).join(' ') + '...';

  return `
    <div class="card glass">
      <figure class="relative overflow-hidden">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-auto object-cover" />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-[philosopher]">${meal.strMeal}</h2>
        <p>${instructionsExcerpt}</p>
        <div class="card-actions justify-end">
          <button onclick="window.open('${meal.strYoutube}', '_blank')"
            class="py-2 px-5 bg-violet-700 text-white font-semibold rounded-full shadow-md hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
            Watch on YT
          </button>
        </div>
      </div>
    </div>
  `;
}

// Function to fetch the meals and display the cards
function fetchMeals(category) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const mealContainer = document.getElementById('meal-cards');
      mealContainer.innerHTML = '';  // Clear previous cards

      if (data.meals) {
        data.meals.forEach(meal => {
          // Insert the card for each meal
          mealContainer.innerHTML += createMealCard(meal);
        });
      } else {
        mealContainer.innerHTML = '<p>No meals found.</p>';
      }
    })
    .catch(error => console.error('Error fetching meals:', error));
}

// Function to handle clicks on the dropdown menu
document.querySelectorAll('.menu li a').forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
    
    // Get the category from the text content of the anchor tag
    const category = this.textContent.trim();
    
    // Fetch and display meals for the selected category
    fetchMeals(category);

    // Remove the active class from all links
    document.querySelectorAll('.menu li a').forEach(link => {
      link.classList.remove('text-violet-700', 'border-b-2', 'border-violet-700', 'dark:bg-white');
    });

    // Add the active class to the clicked link
    this.classList.add('text-violet-700', 'border-b-2', 'border-violet-700', 'dark:bg-white');

    // Go to the menu section when clicking on the category
    document.getElementById('menu').scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Fetch meals for the default category (e.g., 'Potato') when the page loads
window.onload = () => {
  fetchMeals('Beef');
};




