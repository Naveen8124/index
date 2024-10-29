// Sample product data for demonstration
const products = [
    {
        name: "RX100",
        description: "1995 Production.",
        price: 85000,
        image: "image.jpg",
        likes: 0,
        dislikes: 0,
        comments: []
    },
    {
        name: "iPhone 12",
        description: "64GB, Great condition.",
        price: 50000,
        image: "image2.jpg",
        likes: 0,
        dislikes: 0,
        comments: []
    },
    {
        name: "Dell Laptop",
        description: "15-inch, 8GB RAM.",
        price: 40000,
        image: "image3.jpg",
        likes: 0,
        dislikes: 0,
        comments: []
    }
];

let cartCount = 0;

function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        if (product.name.toLowerCase().includes(searchInput)) {
            productList.appendChild(createProductElement(product));
        }
    });
}

function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: <span class="price">₹${product.price}</span></p>
        <img src="${product.image}" alt="Product Image" class="product-image" />
        <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        <button class="like" onclick="likeProduct('${product.name}')"><i class="fas fa-thumbs-up"></i> Like</button> 
        <span class="like-count">${product.likes}</span>
        <button class="dislike" onclick="dislikeProduct('${product.name}')"><i class="fas fa-thumbs-down"></i> Dislike</button> 
        <span class="dislike-count">${product.dislikes}</span>
        <div class="comment-section">
            <input type="text" placeholder="Add a comment..." onkeypress="handleComment(event, '${product.name}')">
            <button class="add-comment" onclick="handleCommentSubmit('${product.name}')">Comment</button>
        </div>
        <div class="comments">${product.comments.join('<br>')}</div>
    `;

    return productDiv;
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

function likeProduct(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        product.likes++;
        filterProducts(); // Re-render the products to update likes
    }
}

function dislikeProduct(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        product.dislikes++;
        filterProducts(); // Re-render the products to update dislikes
    }
}

function handleComment(event, productName) {
    if (event.key === 'Enter') {
        handleCommentSubmit(productName);
    }
}

function handleCommentSubmit(productName) {
    const commentInput = event.target.previousElementSibling; // Get the input field
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const product = products.find(p => p.name === productName);
        if (product) {
            product.comments.push(commentText);
            commentInput.value = ''; // Clear the input
            filterProducts(); // Re-render products to show new comment
        }
    }
}

// Initial render
filterProducts();
