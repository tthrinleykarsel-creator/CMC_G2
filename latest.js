const newsContainer = document.getElementById("newsContainer");

newsData.forEach(news => {

    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
    
        <img src="${news.image}" alt="${news.title}" class="news-image">

        <div class="news-content-area">

            <div class="news-date">${news.date}</div>

            <h3 class="news-title">${news.title}</h3>

            <p class="news-content">${news.content}</p>

            <span class="news-status">${news.status}</span>

        </div>

    `;

    newsContainer.appendChild(card);

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

        trigger.addEventListener("click", function(e) {

            if (window.innerWidth <= 768) {

                // First click: open dropdown
                if (!dropdown.classList.contains("active")) {

                    e.preventDefault();

                    // Close other dropdowns
                    dropdowns.forEach(item => {
                        if (item !== dropdown) {
                            item.classList.remove("active");
                        }
                    });

                    dropdown.classList.add("active");

                }

                // Second click:
                // Don't prevent default.
                // Browser follows href normally.
            }

        });

    });

});