document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("postForm");
    const messageInput = document.getElementById("message");
    const postsContainer = document.getElementById("posts");

    postForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        const message = messageInput.value.trim();
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = handleFileUpload;

        if (message || fileInput.files.length) {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <p>${message}</p>
                <img class="uploaded-image" style="display:none" />
                <div class="actions">
                    <button class="like">Like</button>
                    <button class="dislike">Dislike</button>
                </div>
                <div class="comment-section">
                    <input type="text" placeholder="Add a comment...">
                    <button class="add-comment">Comment</button>
                </div>
                <div class="comments"></div>
            `;

            postsContainer.prepend(postElement);
            messageInput.value = ""; // Clear the message input

            const likeButton = postElement.querySelector(".like");
            const dislikeButton = postElement.querySelector(".dislike");
            const commentInput = postElement.querySelector("input[type='text']");
            const commentButton = postElement.querySelector(".add-comment");
            const commentsContainer = postElement.querySelector(".comments");
            const imgElement = postElement.querySelector(".uploaded-image");

            likeButton.addEventListener("click", function() {
                alert("Liked!");
            });

            dislikeButton.addEventListener("click", function() {
                alert("Disliked!");
            });

            commentButton.addEventListener("click", function() {
                const comment = commentInput.value.trim();
                if (comment) {
                    const commentElement = document.createElement("p");
                    commentElement.innerText = comment;
                    commentsContainer.appendChild(commentElement);
                    commentInput.value = ""; // Clear the comment input
                }
            });

            // Handle image upload
            function handleFileUpload(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        imgElement.src = e.target.result;
                        imgElement.style.display = "block"; // Show the image
                    };
                    reader.readAsDataURL(file);
                }
            }

            fileInput.click(); // Trigger the file input
        }
    });
});
