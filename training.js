// Slider Elements
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// Show Current Slide
function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Next Button
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showSlide();
    });
}

// Previous Button
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showSlide();
    });
}

// Auto Slide
if (images.length > 0) {
    setInterval(() => {
        index = (index + 1) % images.length;
        showSlide();
    }, 5000);
}

// Popup Form
const popup = document.getElementById("popup");
const courseName = document.getElementById("courseName");

function openForm(course) {
    if (popup) {
        popup.style.display = "flex";
    }

    if (courseName) {
        courseName.value = course;
    }
}

function closeForm() {
    if (popup) {
        popup.style.display = "none";
    }
}

// Form Submit
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Successfully Applied!");

        closeForm();
        this.reset();
    });
}

// Close popup when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        closeForm();
    }
});

// Initialize AOS
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