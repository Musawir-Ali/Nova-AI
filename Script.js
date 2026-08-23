const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {

    if (window.scrollY > 30) {

        nav.classList.add('scrolled');

    } else {
        nav.classList.remove('scrolled');
    }

});

//sign In Modal Form 

const signInBtn = document.getElementById("sign-in");
const loginOverlay = document.getElementById("loginOverlay");
const closeLogin = document.getElementById("closeLogin");
const demoBtn = document.getElementById("hero-demo");


signInBtn.addEventListener("click", function () {
    loginOverlay.classList.add("active");

});

demoBtn.addEventListener("click", function () {
    loginOverlay.classList.add("active");
});

closeLogin.addEventListener("click", function () {
    loginOverlay.classList.remove("active");
});

loginOverlay.addEventListener("click", function (event) {
    if (event.target === loginOverlay) {
        loginOverlay.classList.remove("active");
    }

});;

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        loginOverlay.classList.remove("active");
        forgotOverlay.classList.remove("active");
    }
});

// Forgot Modal 

const forgotPassword = document.getElementById("forgotPassword");
const forgotOverlay = document.getElementById("forgotOverlay");
const backToLogin = document.getElementById("backToLogin");
const closeForgot = document.getElementById("closeForgot");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    loginOverlay.classList.remove("active");

    forgotOverlay.classList.add("active");
});

backToLogin.addEventListener("click", function () {
    forgotOverlay.classList.remove("active");
    loginOverlay.classList.add("active");
});

closeForgot.addEventListener("click", function () {
    forgotOverlay.classList.remove("active");
});

forgotOverlay.addEventListener("click", function (event) {
    if (event.target === forgotOverlay) {
        forgotOverlay.classList.remove("active");
    }
});

const forgotForm = document.getElementById("forgotForm");
const successMessage = document.getElementById("successMessage");
const successText = document.getElementById("successText");

forgotForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("reset-email").value;

    successText.textContent =
        `If an account exists for ${email}, a reset link has been sent.`;

    console.log("Form Submitted");
    console.log(successMessage);

    forgotForm.style.display = "";
    successMessage.classList.add("active");

    function resetForgotModal() {

        successMessage.classList.remove("active");

        forgotForm.style.display = "block";

        forgotForm.reset();

    }

    closeForgot.addEventListener("click", function () {

        forgotOverlay.classList.remove("active");

        resetForgotModal();

    });

});


//Sign Up Login Form 

const getStartedBtns = document.querySelectorAll(".btn-primary, #button");
const SignupOverlay = document.querySelector(".signup-overlay");
const signupCloseBtn = document.querySelector(".signup-close-btn");
const signinLink = document.querySelector(".signin-link");
const signupLink = document.querySelector(".signup-link");

getStartedBtns.forEach(function (button) {

    button.addEventListener("click", function () {
        SignupOverlay.classList.add("active");

    });

});

signupCloseBtn.addEventListener("click", function () {
    SignupOverlay.classList.remove("active");
});

SignupOverlay.addEventListener("click", function (event) {
    if (event.target === SignupOverlay) {
        SignupOverlay.classList.remove("active");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" &&
        SignupOverlay.classList.contains("active")
    ) {
        SignupOverlay.classList.remove("active");
    }
});

signinLink.addEventListener("click", function (event) {
    event.preventDefault();

    SignupOverlay.classList.remove("active");
    loginOverlay.classList.add("active");
})
signupLink.addEventListener("click", function (event) {
    event.preventDefault();

    loginOverlay.classList.remove("active");
    SignupOverlay.classList.add("active");
})

// Signup Form
const signupForm = document.getElementById("signup-form");


const togglePassword = document.querySelector(".toggle-password");
const passwordEye = document.getElementById("passwordEye");
const toggleConfirmPassword = document.querySelector(".toggle-confirm-password");


const fullName = document.getElementById("fullname");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const confirmPassword = document.getElementById("confirm-password");

const fullNameError = document.querySelector(".fullname-error");
const emailError = document.querySelector(".email-error");
const signupPasswordError = document.querySelector(".signup-password-error");
const passwordError = document.querySelector(".password-error");


togglePassword.addEventListener("click", function () {

    if (signupPassword.type === "password") {
        signupPassword.type = "text";
    } else {

        signupPassword.type = "password";
    }
});
toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }
});

// submit button
signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    fullNameError.classList.remove("show");
    emailError.classList.remove("show");
    signupPasswordError.classList.remove("show");
    passwordError.classList.remove("show");

    // Remove old red borders
    fullName.parentElement.classList.remove("input-error");
    signupEmail.parentElement.classList.remove("input-error");
    signupPassword.parentElement.classList.remove("input-error");
    confirmPassword.parentElement.classList.remove("input-error");

    fullNameError.textContent = "";
    emailError.textContent = "";
    signupPasswordError.textContent = "";
    passwordError.textContent = "";

    const fullNameValue = fullName.value.trim();
    const emailValue = signupEmail.value.trim();
    const passwordValue = signupPassword.value;
    const confirmPasswordValue = confirmPassword.value;

    // NEW CODE GOES HERE

    let hasError = false;

    if (fullNameValue === "") {
        fullNameError.textContent = "Full name is required.";
        fullNameError.classList.add("show");
        fullName.parentElement.classList.add("input-error");

        hasError = true;
    }

    // Email 

    if (emailValue === "") {

        emailError.textContent = "Email is required.";
        emailError.classList.add("show");
        signupEmail.parentElement.classList.add("input-error");

        hasError = true;

    } else if (!signupEmail.checkValidity()) {

        emailError.textContent = "Enter a valid email address.";
        hasError = true;

    }

    // Password

    if (passwordValue === "") {

        signupPasswordError.textContent = "Password is required.";
        signupPassword.parentElement.classList.add("input-error");
        signupPasswordError.classList.add("show")
        hasError = true;

    } else if (passwordValue.length < 8) {

        signupPasswordError.textContent = "Password must be at least 8 characters.";
        signupPassword.parentElement.classList.add("input-error");
        signupPasswordError.classList.add("show")
        hasError = true;

    }

    // Confirm Password
    if (confirmPasswordValue === "") {

        passwordError.textContent = "Please confirm your password.";
        confirmPassword.parentElement.classList.add("input-error");
        passwordError.classList.add("show");
        hasError = true;

    } else if (passwordValue !== confirmPasswordValue) {

        passwordError.textContent = "Passwords do not match.";
        passwordError.classList.add("show");
        confirmPassword.parentElement.classList.add("input-error");
        hasError = true;

    }

    if (hasError) {
        return;
    }

    alert("Account Created Successfully.");
    signupForm.reset();
});

fullName.addEventListener("input", function () {

    fullNameError.textContent = "";
    fullNameError.classList.remove("show");

    fullName.parentElement.classList.remove("input-error");

});

signupEmail.addEventListener("input", function () {

    emailError.textContent = "";
    emailError.classList.remove("show");

    signupEmail.parentElement.classList.remove("input-error");

});

signupPassword.addEventListener("input", function () {

    signupPasswordError.textContent = "";
    signupPasswordError.classList.remove("show");

    signupPassword.parentElement.classList.remove("input-error");

});

confirmPassword.addEventListener("input", function () {

    passwordError.textContent = "";
    passwordError.classList.remove("show");

    confirmPassword.parentElement.classList.remove("input-error");

});


// ===============================
// Trusted at Scale - Number Counter
// ===============================

const userNumber = document.querySelector(".user");
const uptimeNumber = document.querySelector(".uptime");
const countriesNumber = document.querySelector(".Countries");
const ratingNumber = document.querySelector(".star");

function animateCounter(element, target, duration, suffix = "", decimals = 0) {
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const currentValue = progress * target;

        if (decimals > 0) {
            element.textContent =
                currentValue.toFixed(decimals) + suffix;
        } else {
            element.textContent =
                Math.floor(currentValue).toLocaleString() + suffix;
        }

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

const pricingSection = document.querySelector(".pricing");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            animateCounter(userNumber, 50000, 1800, "+");
            animateCounter(uptimeNumber, 99.9, 1800, "%", 1);
            animateCounter(countriesNumber, 120, 1800, "+");
            animateCounter(ratingNumber, 4.9, 1800, "★", 1);

            observer.unobserve(pricingSection);
        }

    });

}, {
    threshold: 0.3
});

observer.observe(pricingSection);