/*==========================================================
  DEVAMRITHAM.IN
  Professional Website Script
  Version : 1.0
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Mobile Menu Toggle
    // ===============================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (menuToggle.innerHTML === "☰")
                menuToggle.innerHTML = "✖";
            else
                menuToggle.innerHTML = "☰";

        });

    }

    // ===============================
    // Smooth Scroll
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

            if (navMenu)
                navMenu.classList.remove("active");

            if (menuToggle)
                menuToggle.innerHTML = "☰";

        });

    });

    // ===============================
    // Fade-in Animation
    // ===============================

    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.20
    });

    fadeElements.forEach(function (element) {

        observer.observe(element);

    });

});


// ======================================
// Back To Top Button
// ======================================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (!topButton)
        return;

    if (window.scrollY > 300)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";

});

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ======================================
// Video Auto Pause
// ======================================

const videos = document.querySelectorAll("video");

videos.forEach(function (video) {

    video.addEventListener("play", function () {

        videos.forEach(function (otherVideo) {

            if (otherVideo !== video)
                otherVideo.pause();

        });

    });

});


// ======================================
// Navbar Background Change
// ======================================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (!nav)
        return;

    if (window.scrollY > 50)
        nav.classList.add("nav-scrolled");
    else
        nav.classList.remove("nav-scrolled");

});


// ======================================
// Counter Animation
// ======================================

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    const speed = 60;

    let current = 0;

    const increment = Math.ceil(target / speed);

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.innerText = target;

            return;

        }

        counter.innerText = current;

        requestAnimationFrame(update);

    };

    update();

}

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(function (counter) {

    counterObserver.observe(counter);

});


// ======================================
// Lazy Loading Images
// ======================================

const lazyImages = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver(function (entries, observer) {

    entries.forEach(function (entry) {

        if (!entry.isIntersecting)
            return;

        const image = entry.target;

        image.src = image.dataset.src;

        image.removeAttribute("data-src");

        observer.unobserve(image);

    });

});

lazyImages.forEach(function (image) {

    imageObserver.observe(image);

});


// ======================================
// Footer Copyright Year
// ======================================

const year = document.getElementById("currentYear");

if (year)
    year.textContent = new Date().getFullYear();
