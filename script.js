document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. LIVE SEARCH FILTER FOR CORE PROGRAMS
    // ==========================================
    const searchInput = document.getElementById("search-input");
    const programCards = document.querySelectorAll(".program-card");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            programCards.forEach((card) => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const description = card.querySelector("p").textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = "flex"; 
                    card.style.opacity = "1";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // ==========================================
    // 2. SMOOTH SCROLL REVEAL ANIMATION
    // ==========================================
    const revealSections = document.querySelectorAll(
        ".program-card, .benefit-box, .philosophy-content, .philosophy-image-placeholder, .timeline-step"
    );

    revealSections.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.5;

        revealSections.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 

    // ==========================================
    // 3. NAVIGATION ACTIVE HIGHLIGHT
    // ==========================================
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((nav) => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ==========================================
    // 4. PORTAL MODAL INTERACTIVITY CONTROLS
    // ==========================================
    const portalModal = document.getElementById("portal-modal");
    const openModalBtn = document.getElementById("open-portal-btn");
    const closeModalBtn = document.getElementById("close-portal-btn");
    const footerPortalTrigger = document.querySelector(".footer-portal-trigger");
    const registrationForm = document.getElementById("registration-form");

    const openModal = (e) => {
        e.preventDefault();
        portalModal.classList.add("active");
    };

    const closeModal = () => {
        portalModal.classList.remove("active");
        registrationForm.reset();
    };

    if(openModalBtn) openModalBtn.addEventListener("click", openModal);
    if(footerPortalTrigger) footerPortalTrigger.addEventListener("click", openModal);
    if(closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", (e) => {
        if (e.target === portalModal) closeModal();
    });

    if (registrationForm) {
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Framework Proposal Submitted Successfully!");
            closeModal();
        });
    }

    // ==========================================
    // 5. CORE PROGRAMS EXPAND/COLLAPSE FUNCTION
    // ==========================================
    const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

    learnMoreButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const currentCard = this.closest(".program-card");
            
            currentCard.classList.toggle("expanded");

            if (currentCard.classList.contains("expanded")) {
                this.innerHTML = "SHOW LESS &uarr;";
            } else {
                this.innerHTML = "LEARN MORE &rarr;";
            }
        });
    });
});

// Initialize AOS
AOS.init({
    duration: 1200,   // Animation speed
    once: true,       // Animate only once
   
});


