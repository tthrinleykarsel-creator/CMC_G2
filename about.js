document.addEventListener("DOMContentLoaded", function () {
    
    // Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // Touch Support for Flip Cards on Mobile Devices
    const flipCards = document.querySelectorAll(".flip-card");
    
    flipCards.forEach(card => {
        card.addEventListener("click", function () {
            const innerCard = this.querySelector(".flip-card-inner");
            if (innerCard.style.transform === "rotateY(180deg)") {
                innerCard.style.transform = "rotateY(0deg)";
            } else {
                innerCard.style.transform = "rotateY(180deg)";
            }
        });
    });

    // Touch support configuration to toggle Tooltip details on Mobile tap
    const tooltipBtn = document.querySelector(".tooltip");
    if (tooltipBtn) {
        tooltipBtn.addEventListener("click", function (e) {
            // Prevent navigating instantly if it's a dead link anchor '#'
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            this.classList.toggle("active-touch");
        });
    }
});


const data = [
  {
    title: "Earlier Than",
    desc: "Commissioned under His Majesty's grand vision, our establishment became a critical foundation for Bhutan's economic sovereignty. We secured the essential pillars of mindful progress, ensuring our nation's heritage would anchor future commercial innovation."
  },
  {
    title: "Ongoing",
    desc: "Today, we turn values into action by nurturing enterprises that prioritize sustainability over short-term gain. Our ecosystem empowers founders to build businesses that generate genuine social impact alongside robust, ethical economic growth."
  },
  {
    title: "Futurity",
    desc: "Tomorrow, we will show the world that compassion and commerce are not mutually exclusive. Our ultimate legacy will be a global marketplace driven by purpose, positioning Bhutan as the pioneer of mindful capitalism."
  }
];

let index = 0;

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const images = document.querySelectorAll(".thumb");

function update(i) {
  title.innerText = data[i].title;
  desc.innerText = data[i].desc;

  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

function autoSlide() {
  index = (index + 1) % data.length;
  update(index);
}

setInterval(autoSlide, 13000);

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