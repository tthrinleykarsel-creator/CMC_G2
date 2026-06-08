    const popup = document.getElementById("popup");

    function openForm(){
      popup.style.display = "flex";
    }

    function closeForm(){
      popup.style.display = "none";
    }

    document.getElementById("serviceForm").addEventListener("submit", function(e){
      e.preventDefault();

      alert("Successfully Applied!");

      popup.style.display = "none";

      this.reset();
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