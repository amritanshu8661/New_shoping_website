// Application data from provided JSON
const data = {
  "company": {
    "name": "The Spice Theory",
    "tagline": "Physician-Crafted, Vegan-Friendly Caribbean Seasonings",
    "founder": "Dr. Corrie Amos",
    "founderTitle": "Board-Certified Anesthesiologist & Culinary Enthusiast",
    "mission": "Combining medical knowledge with authentic Caribbean flavors to create healthier, low-sodium spice blends",
    "heritage": "Jamaican-American",
    "socialMedia": "@shopspicetheory",
    "benefits": [
      "Up to 88% less sodium than competing brands",
      "Vegan-friendly and gluten-free",
      "No additives, preservatives, or MSG",
      "Physician-crafted for heart health",
      "Ethically sourced from small-holder farms"
    ]
  },
  "products": [
    {
      "id": 1,
      "name": "Old Fashioned Citrus Smoked Bourbon Barrel Sea Salt",
      "nickname": "Old Fashioned",
      "price": 24.99,
      "size": "4 oz",
      "description": "Applewood smoked sea salt aged in bourbon barrels with citrus notes",
      "uses": ["Cocktail rims", "Grilled meats", "Seafood", "Finishing salt"],
      "sodiumReduction": "75%",
      "image": "old-fashioned-salt.jpg"
    },
    {
      "id": 2,
      "name": "Scotch on the Rocks Smoked Scotch Bonnet Pepper Sea Salt",
      "nickname": "Scotch on the Rocks", 
      "price": 23.47,
      "size": "4 oz",
      "description": "Heat-forward blend with sweet floral notes and applewood smoked sea salt",
      "uses": ["Margarita rims", "Dry rub for ribs", "Potato dishes", "Stuffing"],
      "heatLevel": "Medium-Hot",
      "image": "scotch-rocks-salt.jpg"
    },
    {
      "id": 3,
      "name": "Fern Gully Garlic Herb Pepper Blend",
      "nickname": "Fern Gully",
      "price": 22.99,
      "size": "4.7 oz",
      "description": "Bold Caribbean garlic herb blend with Aleppo pepper",
      "ingredients": ["Roasted garlic", "Onion", "Aleppo pepper", "Parsley", "Basil", "Thyme", "Oregano"],
      "sodiumReduction": "59%",
      "image": "fern-gully-blend.jpg"
    },
    {
      "id": 4,
      "name": "Natural Mystic Adobo Blend",
      "nickname": "Natural Mystic",
      "price": 20.47,
      "size": "5.4 oz", 
      "description": "Fusion of authentic Caribbean and Latin flavors",
      "ingredients": ["Mexican oregano", "Smoked Spanish paprika", "Sea salt", "Pasilla chili", "Ancho chili"],
      "sodiumReduction": "75%",
      "image": "natural-mystic-adobo.jpg"
    }
  ],
  "recipes": [
    {
      "id": 1,
      "name": "Jerk Chicken Quinoa Bowl",
      "cookTime": "30 min",
      "difficulty": "Medium",
      "servings": 4,
      "spiceUsed": "Fern Gully",
      "description": "Healthy Caribbean-inspired bowl with jerk-seasoned chicken and quinoa",
      "ingredients": ["Chicken thighs", "Quinoa", "Bell peppers", "Onions", "Fern Gully blend"],
      "image": "jerk-chicken-bowl.jpg"
    },
    {
      "id": 2,
      "name": "Easy Adobo Chicken", 
      "cookTime": "45 min",
      "difficulty": "Easy",
      "servings": 6,
      "spiceUsed": "Natural Mystic",
      "description": "Tender chicken in authentic Caribbean-Latin adobo sauce",
      "ingredients": ["Chicken pieces", "Natural Mystic Adobo", "Onions", "Garlic", "Bay leaves"],
      "image": "adobo-chicken.jpg"
    },
    {
      "id": 3,
      "name": "La Paloma Cocktail",
      "cookTime": "5 min", 
      "difficulty": "Easy",
      "servings": 1,
      "spiceUsed": "Scotch on the Rocks",
      "description": "Refreshing grapefruit tequila cocktail with spiced salt rim",
      "ingredients": ["Tequila", "Grapefruit juice", "Lime juice", "Scotch on the Rocks salt"],
      "image": "la-paloma-cocktail.jpg"
    },
    {
      "id": 4,
      "name": "Smoked Sea Salt Mango Margarita",
      "cookTime": "10 min",
      "difficulty": "Easy", 
      "servings": 1,
      "spiceUsed": "Old Fashioned",
      "description": "Tropical twist on classic margarita with bourbon barrel salt",
      "ingredients": ["Tequila", "Mango puree", "Lime juice", "Old Fashioned salt"],
      "image": "mango-margarita.jpg"
    },
    {
      "id": 5,
      "name": "Salt & Pepper Prawns",
      "cookTime": "20 min",
      "difficulty": "Medium",
      "servings": 4,
      "spiceUsed": "Scotch on the Rocks",
      "description": "Crispy prawns with Caribbean heat and smoky flavors",
      "ingredients": ["Large prawns", "Scotch on the Rocks salt", "Bell peppers", "Chili peppers"],
      "image": "salt-pepper-prawns.jpg"
    },
    {
      "id": 6,
      "name": "Broiled Salmon with Caribbean Spices",
      "cookTime": "25 min",
      "difficulty": "Easy",
      "servings": 4,
      "spiceUsed": "Fern Gully", 
      "description": "Heart-healthy salmon with aromatic Caribbean herb coating",
      "ingredients": ["Salmon fillets", "Fern Gully blend", "Olive oil", "Lemon"],
      "image": "caribbean-salmon.jpg"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah M.",
      "review": "The Adobo blend is a staple in my kitchen - adds amazing flavor with way less salt!",
      "rating": 5,
      "product": "Natural Mystic"
    },
    {
      "name": "Michael K.", 
      "review": "Love the smoky flavor of the bourbon barrel salt. Perfect for cocktails!",
      "rating": 5,
      "product": "Old Fashioned"
    },
    {
      "name": "Lisa R.",
      "review": "Finally found spices that taste amazing and are actually good for you. Dr. Corrie knows what she's doing!",
      "rating": 5,
      "product": "Fern Gully"
    }
  ]
};

// Shopping cart state
let cart = [];

// Theme management
class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    this.init();
  }

  getStoredTheme() {
    try {
      return localStorage.getItem('spice-theory-theme');
    } catch (e) {
      return null;
    }
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    
    try {
      localStorage.setItem('spice-theory-theme', theme);
    } catch (e) {
      console.warn('Could not save theme preference');
    }

    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  toggle() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  init() {
    this.setTheme(this.currentTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// DOM elements
const elements = {
  productsGrid: null,
  recipesGrid: null,
  cartBtn: null,
  cartCount: null,
  cartModal: null,
  closeCart: null,
  cartItems: null,
  cartTotal: null,
  clearCart: null,
  themeToggle: null,
  contactForm: null,
  newsletterForm: null
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeTheme();
  loadProducts();
  loadRecipes();
  setupEventListeners();
  updateCartDisplay();
  setupAnimations();
});

// Initialize DOM elements
function initializeElements() {
  elements.productsGrid = document.getElementById('productsGrid');
  elements.recipesGrid = document.getElementById('recipesGrid');
  elements.cartBtn = document.getElementById('cartBtn');
  elements.cartCount = document.getElementById('cartCount');
  elements.cartModal = document.getElementById('cartModal');
  elements.closeCart = document.getElementById('closeCart');
  elements.cartItems = document.getElementById('cartItems');
  elements.cartTotal = document.getElementById('cartTotal');
  elements.clearCart = document.getElementById('clearCart');
  elements.themeToggle = document.getElementById('themeToggle');
  elements.contactForm = document.querySelector('.contact-form');
  elements.newsletterForm = document.querySelector('.newsletter-form');
}

// Initialize theme manager
function initializeTheme() {
  window.themeManager = new ThemeManager();
}

// Load products into the grid
function loadProducts() {
  if (!elements.productsGrid) return;
  
  elements.productsGrid.innerHTML = '';
  
  data.products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const features = [];
    if (product.sodiumReduction) features.push(`${product.sodiumReduction} Less Sodium`);
    if (product.heatLevel) features.push(product.heatLevel);
    features.push('Vegan-Friendly');
    features.push('No MSG');
    
    productCard.innerHTML = `
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-features">
        ${features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
      </div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-16);">
        ${product.size} | ${product.uses ? product.uses.join(', ') : 'Perfect for all your cooking needs'}
      </p>
      <button class="btn btn--primary btn--full-width add-to-cart" onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;
    
    elements.productsGrid.appendChild(productCard);
  });
}

// Load recipes into the grid
function loadRecipes() {
  if (!elements.recipesGrid) return;
  
  elements.recipesGrid.innerHTML = '';
  
  data.recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    
    const difficultyClass = recipe.difficulty.toLowerCase();
    
    recipeCard.innerHTML = `
      <div class="recipe-header">
        <h3 class="recipe-name">${recipe.name}</h3>
        <div class="recipe-meta">
          <span class="recipe-time">⏱️ ${recipe.cookTime}</span>
          <span class="recipe-difficulty ${difficultyClass}">${recipe.difficulty}</span>
        </div>
        <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-8);">
          Serves ${recipe.servings} | Features ${recipe.spiceUsed}
        </p>
      </div>
      <div class="recipe-content">
        <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16); line-height: 1.6;">
          ${recipe.description}
        </p>
        <div class="recipe-ingredients">
          <h4>Ingredients:</h4>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    
    elements.recipesGrid.appendChild(recipeCard);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = data.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  showAddToCartFeedback(event.target);
}

// Show visual feedback when adding to cart
function showAddToCartFeedback(button) {
  if (!button) return;
  
  const originalText = button.textContent;
  button.textContent = 'Added! ✓';
  button.style.background = 'var(--color-accent)';
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
    button.disabled = false;
  }, 1500);
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
  renderCartItems();
}

// Update cart display
function updateCartDisplay() {
  if (!elements.cartCount || !elements.cartTotal) return;
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  elements.cartCount.textContent = totalItems;
  elements.cartTotal.textContent = totalPrice.toFixed(2);
}

// Render cart items in modal
function renderCartItems() {
  if (!elements.cartItems) return;
  
  elements.cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    elements.cartItems.innerHTML = `
      <div style="text-align: center; padding: var(--space-32); color: var(--color-text-secondary);">
        <p>Your cart is empty</p>
        <p style="font-size: var(--font-size-sm);">Add some delicious Caribbean spices to get started!</p>
      </div>
    `;
    return;
  }
  
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove from cart">
        Remove
      </button>
    `;
    elements.cartItems.appendChild(cartItem);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Theme toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', () => {
      window.themeManager.toggle();
    });
  }

  // Cart modal
  if (elements.cartBtn) {
    elements.cartBtn.addEventListener('click', () => {
      elements.cartModal?.classList.remove('hidden');
      renderCartItems();
    });
  }
  
  if (elements.closeCart) {
    elements.closeCart.addEventListener('click', () => {
      elements.cartModal?.classList.add('hidden');
    });
  }
  
  // Close modal when clicking outside
  if (elements.cartModal) {
    elements.cartModal.addEventListener('click', (e) => {
      if (e.target === elements.cartModal) {
        elements.cartModal.classList.add('hidden');
      }
    });
  }
  
  // Clear cart
  if (elements.clearCart) {
    elements.clearCart.addEventListener('click', () => {
      cart = [];
      updateCartDisplay();
      renderCartItems();
    });
  }
  
  // Contact form
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleContactForm);
  }
  
  // Newsletter form
  if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', handleNewsletterForm);
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.cartModal && !elements.cartModal.classList.contains('hidden')) {
      elements.cartModal.classList.add('hidden');
    }
  });
}

// Handle contact form submission
function handleContactForm(e) {
  e.preventDefault();
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (!nameInput?.value || !emailInput?.value || !messageInput?.value) {
    showFormMessage('Please fill in all fields', 'error');
    return;
  }
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (!submitBtn) return;
  
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.style.background = 'var(--color-accent)';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      e.target.reset();
      showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
    }, 2000);
  }, 1000);
}

// Handle newsletter form submission
function handleNewsletterForm(e) {
  e.preventDefault();
  
  const emailInput = e.target.querySelector('input[type="email"]');
  if (!emailInput?.value) {
    showFormMessage('Please enter a valid email address', 'error');
    return;
  }
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (!submitBtn) return;
  
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Subscribing...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.textContent = 'Subscribed! ✓';
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      e.target.reset();
      showFormMessage('Welcome to the Spice Theory family!', 'success');
    }, 2000);
  }, 1000);
}

// Show form messages
function showFormMessage(message, type) {
  // Create or update message element
  let messageEl = document.querySelector('.form-message');
  if (!messageEl) {
    messageEl = document.createElement('div');
    messageEl.className = 'form-message';
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: var(--space-16);
      border-radius: var(--radius-base);
      color: white;
      font-weight: var(--font-weight-medium);
      z-index: 1001;
      transition: all var(--duration-normal) var(--ease-standard);
    `;
    document.body.appendChild(messageEl);
  }
  
  messageEl.textContent = message;
  messageEl.style.background = type === 'error' ? '#dc3545' : 'var(--color-accent)';
  messageEl.style.transform = 'translateX(0)';
  messageEl.style.opacity = '1';
  
  setTimeout(() => {
    messageEl.style.transform = 'translateX(100%)';
    messageEl.style.opacity = '0';
  }, 4000);
}

// Setup animations and scroll effects
function setupAnimations() {
  // Add scroll-based header effects
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector('.main-nav');
    
    if (nav) {
      if (scrollTop > 100) {
        nav.style.boxShadow = 'var(--shadow-md)';
        nav.style.backgroundColor = 'var(--color-surface)';
      } else {
        nav.style.boxShadow = 'none';
        nav.style.backgroundColor = 'var(--color-surface)';
      }
    }
    
    lastScrollTop = scrollTop;
  });

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards for animation
  document.querySelectorAll('.product-card, .recipe-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Utility functions
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add some Caribbean flair with random spice facts
const spiceFacts = [
  "🌶️ Scotch bonnet peppers are 100x hotter than jalapeños!",
  "🧄 Garlic has been used medicinally for over 5,000 years",
  "🌿 Fresh herbs contain more antioxidants than dried ones",
  "🧂 Sea salt contains trace minerals that table salt lacks",
  "🔥 Capsaicin in peppers can boost metabolism by up to 8%"
];

function showRandomSpiceFact() {
  const fact = spiceFacts[Math.floor(Math.random() * spiceFacts.length)];
  showFormMessage(fact, 'success');
}

// Show a random spice fact every 30 seconds (optional feature)
if (Math.random() > 0.7) {
  setTimeout(showRandomSpiceFact, 30000);
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ThemeManager, addToCart, removeFromCart };
}