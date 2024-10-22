document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', handleLike);
});

document.querySelectorAll('.dislike').forEach(button => {
    button.addEventListener('click', handleDislike);
});

document.querySelectorAll('.add-comment').forEach(button => {
    button.addEventListener('click', addComment);
});

let cartCount = 0;

function addToCart(event) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Product added to cart!');
}

function handleLike(event) {
    const likeCountSpan = event.target.nextElementSibling;
    let likeCount = parseInt(likeCountSpan.innerText);
    likeCountSpan.innerText = ++likeCount;
}

function handleDislike(event) {
    const dislikeCountSpan = event.target.nextElementSibling;
    let dislikeCount = parseInt(dislikeCountSpan.innerText);
    dislikeCountSpan.innerText = ++dislikeCount;
}

function addComment(event) {
    const commentInput = event.target.previousElementSibling;
    const commentText = commentInput.value;
    if (commentText) {
        const commentsDiv = event.target.closest('.product').querySelector('.comments');
        const newComment = document.createElement('p');
        newComment.innerText = commentText;
        commentsDiv.appendChild(newComment);
        commentInput.value = ''; // Clear input after adding
    } else {
        alert('Please enter a comment.');
    }
}

function filterProducts() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const products = document.querySelectorAll(".product");
    
    products.forEach(product => {
        const productName = product.querySelector("h3").innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
