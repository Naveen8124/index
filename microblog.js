document.addEventListener("DOMContentLoaded", function() {
    const postForm = document.getElementById("postForm");
    const messageInput = document.getElementById("message");
    const postsContainer = document.getElementById("posts");

    postForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        const message = messageInput.value.trim();

        if (message) {
            // Create a new post element
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `<p>${message}</p>`;

            // Append the new post to the posts container
            postsContainer.prepend(postElement);

            // Clear the textarea
            messageInput.value = "";
        }
    });
});
