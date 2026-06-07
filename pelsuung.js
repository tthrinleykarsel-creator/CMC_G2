function openForm() {

    document.getElementById("formPopup").style.display = "flex";

    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}

// Close Form
function closeForm() {

    document.getElementById("formPopup").style.display = "none";

    // Enable background scrolling again
    document.body.style.overflow = "auto";
}

// Submit Form
document.getElementById("registerForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Successfully Registered for Pelsung Program!");

    document.getElementById("registerForm").reset();

    document.getElementById("formPopup").style.display = "none";

    document.body.style.overflow = "auto";
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
