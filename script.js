document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("form-msg");

    if (name === "" || email === "" || message === "") {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
    } else {
        msg.textContent = "Form submitted successfully!";
        msg.style.color = "green";
        this.reset();
    }
});

const buttons = document.querySelectorAll(".details-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("This is a high-quality product with a great deal!");
    });
});