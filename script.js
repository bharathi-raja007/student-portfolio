console.log("Welcome to my portfolio!");

// View My Work button
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact form
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted. 😊");

    contactForm.reset();
});
// Back to top button
const topButton = document.querySelector("#top-button");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});