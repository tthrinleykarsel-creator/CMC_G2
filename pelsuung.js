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
