
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

const typingText = document.getElementById("typingText");

const phrases = [
    "An IT student 💻",
    "A working scholar 🎓",
    "A proud dog lover 🐾",
    "A dreamer in progress ✨"
];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingText.textContent = currentPhrase.substring(0, letterIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && letterIndex === currentPhrase.length) {
        deleting = true;
        delay = 1300;
    } else if (deleting && letterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 350;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

const hobbyCards = document.querySelectorAll(".hobby-card");

function toggleHobby(card) {
    card.classList.toggle("active");
}

hobbyCards.forEach(function (card) {
    card.addEventListener("click", function () {
        toggleHobby(card);
    });

    card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleHobby(card);
        }
    });
});

const dogBtn = document.getElementById("dogBtn");
const dogMessage = document.getElementById("dogMessage");

const dogMessages = [
    "Dogs make ordinary days feel special. 🐾",
    "You deserve the same kindness you give others. ♡",
    "Three dogs means three little reasons to smile! 🐶",
    "Today's mood: cuddles, wagging tails, and happiness. ✨",
    "A little reminder to pause, breathe, and enjoy the small things. 💜"
];

dogBtn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * dogMessages.length);
    dogMessage.textContent = dogMessages[random];
});

const quotes = [
    '"You don\'t have to have everything figured out to keep moving forward."',
    '"Small progress is still progress."',
    '"Be proud of how far you have come, even if you are not there yet."',
    '"Your journey does not have to look like anyone else\'s."',
    '"With faith, patience, and effort, one step at a time is enough."'
];

const quoteText = document.getElementById("quoteText");
const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    while (quotes[random] === quoteText.textContent) {
        random = Math.floor(Math.random() * quotes.length);
    }

    quoteText.textContent = quotes[random];
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTop.classList.toggle("visible", window.scrollY > 300);
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const revealElements = document.querySelectorAll(
    ".section-heading, .info-card, .skill-card, .hobby-card, .dream-item, .quote-section, .dog-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("show");
    });
}
