// Food data with Traditional Khmer dishes
const foodItems = [
    { 
        name: "Amok Trey", 
        khName: "អាម៉ុកត្រី", 
        description: "Steamed fish curry with coconut milk and herbs",
        originalPrice: 3.50,
        discount: 20,
        rating: 4.8, 
        img: "https://asianinspirations.com.au/wp-content/uploads/2023/07/TA-26.jpg", 
        special: true,
        category: "curry"
    },
    { 
        name: "Bai Sach Chrouk", 
        khName: "បាយសាច់ជ្រូក", 
        description: "Grilled pork with rice and pickled vegetables",
        originalPrice: 3.50,
        discount: 15,
        rating: 4.6, 
        img: "https://i.pinimg.com/1200x/53/96/6f/53966f25b8fcb091420507cac455b589.jpg", 
        special: false,
        category: "rice"
    },
    { 
        name: "Nom Banh Chok", 
        khName: "នំបញ្ចុក", 
        description: "Rice noodles with fish-based green curry",
        originalPrice: 3.50,
        discount: 10,
        rating: 4.7, 
        img: "https://i.pinimg.com/1200x/d3/b1/30/d3b130cac83df1091ccec611e3c03fef.jpg", 
        special: false,
        category: "noodles"
    },
    { 
        name: "Samlor Machu Trey", 
        khName: "សម្លម្ជូរត្រី", 
        description: "Sour fish soup with vegetables and tamarind",
        originalPrice: 3.50,
        discount: 25,
        rating: 4.5, 
        img: "https://i.pinimg.com/1200x/2a/0d/d5/2a0dd503699fb7d2d1bc036f8dcd3740.jpg", 
        special: true,
        category: "soup"
    },
    { 
        name: "Lok Lak", 
        khName: "ឡុកឡាក់", 
        description: "Stir-fried beef with lime pepper sauce",
        originalPrice: 3.50,
        discount: 18,
        rating: 4.9, 
        img: "https://i.pinimg.com/1200x/da/71/53/da71533386a64ddd152e1a29db447485.jpg", 
        special: false,
        category: "beef"
    },
    { 
        name: "Kuy Teav", 
        khName: "គុយទាវ", 
        description: "Pork broth rice noodle soup with herbs",
        originalPrice: 3.50,
        discount: 5,
        rating: 4.4, 
        img: "https://i.pinimg.com/1200x/d9/56/64/d95664a559ef1ef0611c9623f05a55f8.jpg", 
        special: false,
        category: "noodles"
    },
    { 
        name: "Prahok Ktis", 
        khName: "ប្រហុកក្តិត", 
        description: "Prahok dip with pork and coconut milk",
        originalPrice: 3.50,
        discount: 12,
        rating: 4.3, 
        img: "https://i.pinimg.com/1200x/48/61/22/486122197e69c453cbfdabe9f5d72096.jpg", 
        special: false,
        category: "dip"
    },
    { 
        name: "Cha Knhey", 
        khName: "ឆាខ្ញី", 
        description: "Stir-fried ginger with chicken or beef",
        originalPrice: 3.50,
        discount: 20,
        rating: 4.4, 
        img: "https://i.pinimg.com/736x/de/14/67/de1467716d1c81d6004de3504b646985.jpg", 
        special: false,
        category: "stirfry"
    },

    // Additional Khmer dishes for full menu
   
    { 
        name: "Plea Sach Ko", 
        khName: "ភ្លាសាច់គោ", 
        description: "Beef salad with lime, herbs and vegetables",
        originalPrice: 3.50,
        discount: 20,
        rating: 4.4, 
        img: "https://i.pinimg.com/1200x/ef/82/fe/ef82fe3b829fe2474feff42cee3a6f4a.jpg", 
        special: false,
        category: "salad"
    },
    { 
        name: "Nom Pang Pate", 
        khName: "នំប៉័ងប៉ាតេ", 
        description: "Khmer-style baguette with pate and pickled vegetables",
        originalPrice: 3.50,
        discount: 5,
        rating: 4.2, 
        img: "https://images.deliveryhero.io/image/fd-kh/LH/rtuz-listing.jpg", 
        special: false,
        category: "bread"
    }

   
    
];

// Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discount) {
    return (originalPrice * (100 - discount) / 100).toFixed(2);
}

// Function to create star rating HTML
function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Function to create food card HTML
function createFoodCard(food, index) {
    const discountedPrice = calculateDiscountedPrice(food.originalPrice, food.discount);
    const discountAmount = (food.originalPrice - discountedPrice).toFixed(2);
    
    const specialBadge = food.special ? 
        `<span class="special-badge">
            <span class="kh lang-kh">ពិសេស</span>
            <span class="en lang-en">Special</span>
        </span>` : '';
    
    const discountBadge = food.discount > 0 ? 
        `<span class="discount-badge">${food.discount}% OFF</span>` : '';
    
    return `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="food-card position-relative">
                ${specialBadge}
                <img src="${food.img}" alt="${food.name}" class="food-img">
                <div class="food-info">
                    <h3>${food.name}</h3>
                    <div class="kh-name lang-kh">${food.khName}</div>
                    <p class="food-description text-muted mb-2">${food.description}</p>
                    <div class="food-rating mb-2">
                        ${getRatingStars(food.rating)} <span class="text-muted">(${food.rating})</span>
                    </div>
                    <div class="price-section">
                        ${food.discount > 0 ? `
                            <span class="original-price">$${food.originalPrice.toFixed(2)}</span>
                            <span class="discounted-price">$${discountedPrice}</span>
                            ${discountBadge}
                            <div class="save-text lang-kh">សន្សំ $${discountAmount}</div>
                            <div class="save-text lang-en">Save $${discountAmount}</div>
                        ` : `
                            <span class="discounted-price">$${food.originalPrice.toFixed(2)}</span>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render food items with search filter
function renderFoodItems(searchTerm = '') {
    const homeFoodsContainer = document.getElementById('home-foods');
    const menuFoodsContainer = document.getElementById('menu-foods');
    const homeNoResults = document.getElementById('home-no-results');
    const menuNoResults = document.getElementById('menu-no-results');
    
    // Filter food items based on search term
    const filteredFoods = searchTerm ? 
        foodItems.filter(food => 
            food.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            food.khName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            food.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            food.category.toLowerCase().includes(searchTerm.toLowerCase())
        ) : 
        foodItems;
    
    // Clear existing content
    homeFoodsContainer.innerHTML = '';
    menuFoodsContainer.innerHTML = '';
    
    // Check if we have results
    const hasHomeResults = filteredFoods.length > 0;
    const first10Items = filteredFoods.slice(0, 10);
    const hasMenuResults = filteredFoods.length > 0;
    
    // Show/hide no results message for home page
    if (searchTerm && first10Items.length === 0) {
        homeNoResults.style.display = 'block';
    } else {
        homeNoResults.style.display = 'none';
    }
    
    // Show/hide no results message for menu page
    if (searchTerm && filteredFoods.length === 0) {
        menuNoResults.style.display = 'block';
    } else {
        menuNoResults.style.display = 'none';
    }
    
    // Render first 10 items for home page
    for (let i = 0; i < first10Items.length && i < 10; i++) {
        homeFoodsContainer.innerHTML += createFoodCard(first10Items[i], i);
    }
    
    // Render all filtered items for menu page
    for (let i = 0; i < filteredFoods.length; i++) {
        menuFoodsContainer.innerHTML += createFoodCard(filteredFoods[i], i);
    }
}

// Function to handle search
function setupSearch() {
    const homeSearchInput = document.querySelector('.home-search');
    const menuSearchInput = document.querySelector('.menu-search');
    
    // Search for home page
    if (homeSearchInput) {
        homeSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            // Only render home foods (first 10 items)
            const homeFoodsContainer = document.getElementById('home-foods');
            const homeNoResults = document.getElementById('home-no-results');
            
            const filteredFoods = searchTerm ? 
                foodItems.filter(food => 
                    food.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    food.khName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    food.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    food.category.toLowerCase().includes(searchTerm.toLowerCase())
                ) : 
                foodItems;
            
            const first10Items = filteredFoods.slice(0, 10);
            
            homeFoodsContainer.innerHTML = '';
            
            if (searchTerm && first10Items.length === 0) {
                homeNoResults.style.display = 'block';
            } else {
                homeNoResults.style.display = 'none';
                for (let i = 0; i < first10Items.length; i++) {
                    homeFoodsContainer.innerHTML += createFoodCard(first10Items[i], i);
                }
            }
        });
    }
    
    // Search for menu page
    if (menuSearchInput) {
        menuSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            // Render all menu items
            const menuFoodsContainer = document.getElementById('menu-foods');
            const menuNoResults = document.getElementById('menu-no-results');
            
            const filteredFoods = searchTerm ? 
                foodItems.filter(food => 
                    food.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    food.khName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    food.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    food.category.toLowerCase().includes(searchTerm.toLowerCase())
                ) : 
                foodItems;
            
            menuFoodsContainer.innerHTML = '';
            
            if (searchTerm && filteredFoods.length === 0) {
                menuNoResults.style.display = 'block';
            } else {
                menuNoResults.style.display = 'none';
                for (let i = 0; i < filteredFoods.length; i++) {
                    menuFoodsContainer.innerHTML += createFoodCard(filteredFoods[i], i);
                }
            }
        });
    }
    
    // Add search button functionality
    document.querySelectorAll('.search-box .btn').forEach(button => {
        button.addEventListener('click', function() {
            const searchBox = this.closest('.search-box');
            const input = searchBox.querySelector('input');
            input.focus();
        });
    });
}

// Function to handle page navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageContents = document.querySelectorAll('.page-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the page to show
            const pageToShow = this.getAttribute('data-page');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Show the selected page
            pageContents.forEach(page => {
                page.classList.remove('active');
                if (page.id === pageToShow) {
                    page.classList.add('active');
                }
            });
            
            // Scroll to top of page
            window.scrollTo(0, 0);
        });
    });
    
    // Handle "View Our Menu" button
    const viewMenuBtn = document.querySelector('.btn[data-page="menu"]');
    if (viewMenuBtn) {
        viewMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            document.querySelector('.nav-link[data-page="menu"]').classList.add('active');
            
            // Show the menu page
            pageContents.forEach(page => {
                page.classList.remove('active');
                if (page.id === 'menu') {
                    page.classList.add('active');
                }
            });
            
            // Scroll to top of page
            window.scrollTo(0, 0);
        });
    }
}

// Function to handle language switching
function setupLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const khElements = document.querySelectorAll('.lang-kh');
    const enElements = document.querySelectorAll('.lang-en');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const selectedLang = this.getAttribute('data-lang');
            
            // Show/hide language elements
            if (selectedLang === 'kh') {
                khElements.forEach(el => el.style.display = 'inline');
                enElements.forEach(el => el.style.display = 'none');
                // Update search placeholders
                document.querySelectorAll('.search-box input').forEach(input => {
                    input.placeholder = 'ស្វែងរកម្ហូប...';
                });
            } else {
                khElements.forEach(el => el.style.display = 'none');
                enElements.forEach(el => el.style.display = 'inline');
                // Update search placeholders
                document.querySelectorAll('.search-box input').forEach(input => {
                    input.placeholder = 'Search dishes...';
                });
            }
        });
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderFoodItems();
    setupNavigation();
    setupLanguageToggle();
    setupSearch();
    
    // Initialize Bootstrap carousel with autoplay
    const carousel = new bootstrap.Carousel(document.getElementById('specialsCarousel'), {
        interval: 5000,
        wrap: true
    });
    
    // Set initial language to English
    document.querySelector('.lang-btn[data-lang="en"]').click();
});

// Update the carousel images to feature Khmer food
document.addEventListener('DOMContentLoaded', function() {
    // Update carousel images
    const carouselItems = document.querySelectorAll('.carousel-item img');
    if (carouselItems.length >= 2) {
        // First carousel item - Amok Trey
        carouselItems[0].src = 'images/amok_image.jpg';
        const caption1 = carouselItems[0].parentElement.querySelector('.carousel-caption');
        if (caption1) {
            caption1.querySelector('h3').innerHTML = '<span class="lang-kh">អាម៉ុកត្រី</span><span class="lang-en">Amok Trey</span>';
            caption1.querySelectorAll('p')[0].textContent = 'Steamed fish curry with coconut milk and herbs';
            caption1.querySelectorAll('p')[1].textContent = 'Traditional Khmer fish curry steamed in banana leaves';
            caption1.querySelector('.h4').innerHTML = '$3.50 <small class="text-decoration-line-through text-muted">$8.99</small>';
        }
        
        // Second carousel item - Lok Lak
        carouselItems[1].src = 'images/loklak_image.jpg';
        const caption2 = carouselItems[1].parentElement.querySelector('.carousel-caption');
        if (caption2) {
            caption2.querySelector('h3').innerHTML = '<span class="lang-kh">ឡុកឡាក់</span><span class="lang-en">Lok Lak</span>';
            caption2.querySelectorAll('p')[0].textContent = 'Stir-fried beef with lime pepper sauce';
            caption2.querySelectorAll('p')[1].textContent = 'Cambodian-style beef stir-fry with Kampot pepper';
            caption2.querySelector('.h4').innerHTML = '$3.50 <small class="text-decoration-line-through text-muted">$12.99</small>';
        }
    }
});