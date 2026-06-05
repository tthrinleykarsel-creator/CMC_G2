// function sendMessage() {
//     const text = userInput.value.trim();

//     if (!text) {
//         alert("Please fill out all fields before submitting!");
//         return;
//     }

//     addMessage(text, "user");
//     userInput.value = "";

//     setTimeout(() => {
//         const reply = getGMCResponse(text);
//         addMessage(reply, "bot");
//     }, 500);
// }

// function addMessage(text, sender) {
//     const msg = document.createElement("div");
//     msg.className = `message ${sender}`;
//     msg.innerText = text;

//     chatBox.appendChild(msg);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Example: alert after all forms are filled
// function validateForm() {
//     const inputs = document.querySelectorAll("input, textarea, select");
//     let allFilled = true;

//     inputs.forEach(input => {
//         if (!input.value.trim()) {
//             allFilled = false;
//         }
//     });

//     if (allFilled) {
//         alert("Form submitted successfully!");
//     } else {
//         alert("Please complete all fields before submitting.");
//     }
// }

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const text = userInput.value.trim();

    if (text === "") {
        alert("Please enter a message!");
        return;
    }

    addMessage(text, "user");
    userInput.value = "";

    setTimeout(() => {
        const reply = getGMCResponse(text); // Your chatbot response function
        addMessage(reply, "bot");
    }, 500);
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent page reload

    const inputs = document.querySelectorAll(
        "form input[required], form textarea[required], form select[required]"
    );

    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    });

    if (allFilled) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    } else {
        alert("Please complete all required fields.");
    }
}
