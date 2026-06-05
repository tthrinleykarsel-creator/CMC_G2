const sections = document.querySelectorAll(".section");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(sec => {

        const secTop = sec.getBoundingClientRect().top;

        if (secTop < triggerBottom) {
            sec.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();



// INVEST FORM TOGGLE

const investBtn = document.getElementById("investBtn");
const investSection = document.getElementById("invest");
const closeBtn = document.getElementById("closeBtn");


// OPEN FORM

if (investBtn && investSection) {

    investBtn.addEventListener("click", function(e) {

        e.preventDefault();

        investSection.style.display = "block";

        investSection.scrollIntoView({
            behavior: "smooth"
        });

        investBtn.style.display = "none";

    });

}



// CLOSE FORM

if (closeBtn) {

    closeBtn.addEventListener("click", function() {

        investSection.style.display = "none";

        investBtn.style.display = "inline-block";

    });

}



// CARD HOVER EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 0 20px rgba(0, 229, 255, 0.4)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 4px 10px rgba(0,0,0,0.4)";

    });

});



// FORM SUBMIT

const investorForm = document.getElementById("investorForm");
const msg = document.getElementById("msg");

if (investorForm) {

    investorForm.addEventListener("submit", function(e) {

        e.preventDefault();

        msg.innerText =
            "✅ Your investor application has been submitted successfully. GMC team will contact you soon.";

        investorForm.reset();

    });

}

// Initialize AOS
AOS.init({
    duration: 1200,   // Animation speed
    once: true,       // Animate only once
   
});