// Script to handle cart functionality
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    // Function to add item to cart
    function addToCart(event) {
        const itemElement = event.target.closest('.item');
        const itemName = itemElement.querySelector('h2').innerText;
        const itemPrice = parseFloat(itemElement.querySelector('.price').innerText.replace('₹', '₹'));

        // Create a new list item for the cart
        const listItem = document.createElement('li');
        listItem.innerText = `₹{itemName} - ₹{itemPrice}`;
        cartItems.appendChild(listItem);

        // Update total
        total += itemPrice;
        cartTotal.innerText = total.toFixed(2);
    }

    // Attach event listeners to all "Add To Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
