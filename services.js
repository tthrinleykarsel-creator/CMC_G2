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