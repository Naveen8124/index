document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const messageInput = document.getElementById("message");
    const imageUpload = document.getElementById("imageUpload");
    const postsContainer = document.getElementById("posts");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const message = messageInput.value.trim();
        const file = imageUpload.files[0];

        if (message || file) {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <p>${message}</p>
                <img class="uploaded-image" style="display:none" />
                <div class="actions">
                    <button class="like">Like</button> <span class="like-count">0</span>
                    <button class="dislike">Dislike</button> <span class="dislike-count">0</span>
                </div>
                <div class="comment-section">
                    <input type="text" placeholder="Add a comment...">
                    <button class="add-comment">Comment</button>
                </div>
                <div class="comments"></div>
            `;

            postsContainer.prepend(postElement);
            messageInput.value = ""; // Clear the message input
            imageUpload.value = ""; // Clear the file input

            const likeButton = postElement.querySelector(".like");
            const dislikeButton = postElement.querySelector(".dislike");
            const likeCount = postElement.querySelector(".like-count");
            const dislikeCount = postElement.querySelector(".dislike-count");
            const commentInput = postElement.querySelector("input[type='text']");
            const commentButton = postElement.querySelector(".add-comment");
            const commentsContainer = postElement.querySelector(".comments");
            const imgElement = postElement.querySelector(".uploaded-image");

            // Handle image upload
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imgElement.src = e.target.result;
                    imgElement.style.display = "block"; // Show the image
                    imgElement.classList.add("fade-in"); // Add animation class
                };
                reader.readAsDataURL(file);
            }

            let likes = 0;
            let dislikes = 0;

            likeButton.addEventListener("click", function () {
                likes++;
                likeCount.innerText = likes; // Update like count
                likeButton.classList.add("liked"); // Add liked class for animation
                alert("You liked this post!");
            });

            dislikeButton.addEventListener("click", function () {
                dislikes++;
                dislikeCount.innerText = dislikes; // Update dislike count
                dislikeButton.classList.add("disliked"); // Add disliked class for animation
                alert("You disliked this post!");
            });

            commentButton.addEventListener("click", function () {
                const comment = commentInput.value.trim();
                if (comment) {
                    const commentElement = document.createElement("p");
                    commentElement.innerText = comment;
                    commentsContainer.appendChild(commentElement);
                    commentInput.value = ""; // Clear the comment input
                }
            });
        }
    });

    // Login functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Simple login check
            if (username === "user" && password === "password") {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to the main page
            } else {
                alert("Invalid username or password.");
            }
        });
    }
});
