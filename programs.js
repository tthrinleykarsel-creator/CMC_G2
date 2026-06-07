









const openReview = document.getElementById("openReview");
const reviewPage = document.getElementById("reviewPage");
const closeReview = document.getElementById("closeReview");

const submitReview = document.getElementById("submitReview");
const reviewContainer = document.querySelector(".review-container");

// Open Review Page
openReview.addEventListener("click", () => {
    reviewPage.classList.add("active");
});

// Close Review Page
closeReview.addEventListener("click", () => {
    reviewPage.classList.remove("active");
});


// Add Review
submitReview.addEventListener("click", () => {

    const name = document.getElementById("userName").value;
    const rating = document.getElementById("userRating").value;
    const comment = document.getElementById("userComment").value;

    if(name === "" || rating === "" || comment === ""){
        alert("Please fill all fields");
        return;
    }

    // Create Review Card
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <h3>${name}</h3>
        <div class="rating">${rating}</div>
        <p class="review-text">${comment}</p>
    `;

    // Insert New Review Before Form
    const addReviewSection = document.querySelector(".add-review");
    reviewContainer.insertBefore(reviewCard, addReviewSection);

    // Clear Form
    document.getElementById("userName").value = "";
    document.getElementById("userRating").value = "";
    document.getElementById("userComment").value = "";

    alert("Review Submitted Successfully!");

});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-list li');
    const programItems = document.querySelectorAll('.program-list li');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetGroup = button.getAttribute('data-group');

            programItems.forEach(item => {
                const itemGroup = item.getAttribute('data-group');
                if (targetGroup === '0' || targetGroup === itemGroup) {
                    item.style.display = 'block'; // Explicitly set to block for reliability
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

//  Initialize AOS
AOS.init({
    duration: 1200,   // Animation speed
    once: true,       // Animate only once
   
});

document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        const trigger = dropdown.querySelector("a");

        trigger.addEventListener("click", (e) => {

            if (window.innerWidth <= 768) {

                e.preventDefault();

                dropdowns.forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove("active");
                    }
                });

                dropdown.classList.toggle("active");
            }
        });

    });

});

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("active");
});

document.querySelectorAll(".dropdown-menu a").forEach(item => {
    item.addEventListener("click", () => {
        item.closest(".dropdown").classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    }
});

dropdown.classList.remove("active");