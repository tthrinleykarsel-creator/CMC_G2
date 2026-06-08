

const jobs = [

{
    title:"Software Developer",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 75,000/month",
    desc:"Develop startup platforms, business systems, AI integrations, and online services for GMC Startup Business Hub. They need to use programming language and develop User needs tools.",
    requirements:[
        "HTML, CSS, JavaScript",
        "Backend Development",
        "Database Management",
        "Problem Solving Skills"
    ]
},

{
    title:"Startup Program Coordinator",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 45,000/month",
    desc:"Manage incubation programs, startup operations, entrepreneur support activities, and events. Monitor program progress and prepare reports",
    requirements:[
        "Business Management Degree",
        "Leadership Skills",
        "Communication Skills",
        "Project Management"
    ]
},

{
    title:"Investment Relations Manager",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 70,000/month",
    desc:"Manage investor communications, startup funding opportunities, and partnership development for GMC Startup Business Hub.",
    requirements:[
        "Finance or Economics Background",
        "Presentation Skills",
        "Investment Knowledge",
        "Professional Communication"
    ]
},

{
    title:"Startup Mentor",
    location:"Gelephu, Bhutan",
    type:"Contract",
    salary:"Nu. 65,000/month",
    desc:"Guide startup founders in business growth, scaling, innovation, and market expansion strategies. Monitor progress and provide constructive feedback.",
    requirements:[
        "Entrepreneurship Experience",
        "Leadership Skills",
        "Startup Knowledge",
        "Mentoring Ability"
    ]
},

{
    title:"Green Technology Research Assistant",
    location:"Gelephu, Bhutan",
    type:"Internship",
    salary:"Nu. 25,000/month",
    desc:"Assist sustainability and renewable energy projects focused on green innovation in Bhutan. Collect research on green and sustainable technologies.",
    requirements:[
        "Environmental Science Background",
        "Research Skills",
        "Interest in Sustainability",
        "Basic Reporting Skills"
    ]
},

{
    title:"Community & Ecosystem Builder",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 50,000/month",
    desc:"Nurture the local startup community, organize networking mixers, manage founder relationships, and drive hub engagement.",
    requirements:[
        "Community Management Experience",
        "Public Relations Skills",
        "Event Planning & Execution",
        "Strong Interpersonal Skills"
    ]
},

{
    title:"Growth Marketing Specialist",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 55,000/month",
    desc:"Design and execute data-driven marketing campaigns to boost the global visibility of GMC hub startups and attract international talent.",
    requirements:[
        "Digital Marketing & SEO",
        "Content Creation & Copywriting",
        "Data Analytics & Tracking",
        "Social Media Strategy"
    ]
},

{
    title:"Cybersecurity Analyst",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 72,000/month",
    desc:"Protect GMC digital systems, startup data, and business platforms from cyber threats. Analyze malware, phishing attacks, and suspicious activities.",
    requirements:[
        "Cybersecurity Knowledge",
        "Network Security Skills",
        "Risk Analysis",
        "IT Background"
    ]
},

{
    title:"Business Branding specialist",
    location:"Gelephu, Bhutan",
    type:"Full-Time",
    salary:"Nu. 60,000/month",
    desc:"A Branding Specialist develops and manages a company's brand identity to ensure a strong, consistent, and positive image across all platforms.",
    requirements:[
        "Ceative thinking",
        "Graphic Design Awareness",
        "Project Management",
        "IT Background"
    ]
}

];

const jobsContainer = document.getElementById("jobsContainer");

jobs.forEach(job => {

    const card = document.createElement("div");

    card.classList.add("job-card");

    card.innerHTML = `
        <div class="job-top">

            <h2 class="job-title">${job.title}</h2>

            <div class="job-info">
                📍 ${job.location}<br>
                💼 ${job.type}<br>
                💰 ${job.salary}
            </div>

            <div class="job-desc">
                ${job.desc}
            </div>

            <div class="requirements">
                <h3>Requirements</h3>

                <ul>
                    ${job.requirements.map(req => `<li>${req}</li>`).join("")}
                </ul>
            </div>

        </div>

        <button class="apply-btn">
            Apply Now
        </button>

        <div class="form-box">

            <form class="job-form">

                <div class="close-btn">
                    ❌
                </div>


                <input type="hidden" class="job-position" value="${job.title}">

                <div class="input-group">
                    <input type="text" placeholder="Full Name" required>
                </div>

                <div class="input-group">
                    <input type="email" placeholder="Email Address" required>
                </div>

                <div class="input-group">
                    <input type="tel" placeholder="Phone Number" required>
                </div>

                <div class="input-group">
                    <textarea rows="5" placeholder="Why should we hire you?" required></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    Submit Application
                </button>

            </form>

        </div>
    `;

    jobsContainer.appendChild(card);
});


// OPEN POPUP

document.querySelectorAll(".apply-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const formBox = btn.nextElementSibling.classList.add("active");

        formBox.classList.add("active");

    });

});


// CLOSE WITH ❌ BUTTON

document.querySelectorAll(".close-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.closest(".form-box").classList.remove("active");

    });

});


// CLOSE WHEN CLICKING OUTSIDE FORM

document.querySelectorAll(".form-box").forEach(box => {

    box.addEventListener("click", (e) => {

        if (e.target === box) {

            box.classList.remove("active");

        }

    });

});


// FORM SUBMISSION

document.querySelectorAll(".job-form").forEach(form => {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const application = {

            job: form.querySelector(".job-position").value,

            name: form.querySelector('input[type="text"]').value,

            email: form.querySelector('input[type="email"]').value,

            phone: form.querySelector('input[type="tel"]').value,

            message: form.querySelector("textarea").value

        };

        console.log("Application Submitted:", application);

        alert(`Application for ${application.job} submitted successfully!`);

        form.reset();

        form.closest(".form-box").classList.remove("active");

    });

});

document.querySelectorAll(".close-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.closest(".form-box").classList.remove("active");

    });

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