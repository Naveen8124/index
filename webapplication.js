document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        let likes = 0;
        let dislikes = 0;

        const likeButton = product.querySelector(".like");
        const dislikeButton = product.querySelector(".dislike");
        const likeCount = product.querySelector(".like-count");
        const dislikeCount = product.querySelector(".dislike-count");
        const commentInput = product.querySelector("input[type='text']");
        const commentButton = product.querySelector(".add-comment");
        const commentsContainer = product.querySelector(".comments");
        const addToCartButton = product.querySelector(".add-to-cart");

        likeButton.addEventListener("click", function () {
            likes++;
            likeCount.innerText = likes;
            alert("Liked!");
        });

        dislikeButton.addEventListener("click", function () {
            dislikes++;
            dislikeCount.innerText = dislikes;
            alert("Disliked!");
        });

        commentButton.addEventListener("click", function () {
            const comment = commentInput.value.trim();
            if (comment) {
                const commentElement = document.createElement("p");
                commentElement.innerText = comment;
                commentsContainer.appendChild(commentElement);
                commentInput.value = ""; // Clear the input
            }
        });

        addToCartButton.addEventListener("click", function () {
            alert("Added to cart!");
            // Here you can implement cart logic
        });
    });
});
