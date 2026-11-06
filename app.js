// Select elements
const thumbnails = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const productDesc = document.getElementById('productDesc');
const productSku = document.getElementById('productSku');

// Add click event listeners to thumbnails
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');

        // Update main image and product details using data attributes
        mainImage.src = this.getAttribute('data-img');
        productTitle.textContent = this.getAttribute('data-title');
        productPrice.textContent = this.getAttribute('data-price');
        productDesc.textContent = this.getAttribute('data-desc');
        productSku.textContent = this.getAttribute('data-sku');
    });
});

// Quantity Counter Logic
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const quantitySpan = document.getElementById('quantity');

let count = 1;

incrementBtn.addEventListener('click', () => {
    count++;
    quantitySpan.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    if (count > 1) {
        count--;
        quantitySpan.textContent = count;
    }
});