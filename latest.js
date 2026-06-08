

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