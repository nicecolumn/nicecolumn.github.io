// --- Contact Form Script ---

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // check math answer
        const mathAnswer = document.getElementById("math_answer").value;
        if (parseInt(mathAnswer) === 7) {
            alert("thank you for your message.");
            form.reset();
        } else {
            alert("You did not pass the math question.");
        }
    });
});
