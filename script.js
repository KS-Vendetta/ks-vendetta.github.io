// ==========================
// VEN Alliance Hub v3
// ==========================

console.log("VEN Alliance Hub Loaded");

// --------------------------
// Smooth Scroll
// --------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// --------------------------
// Mobile Dropdown
// --------------------------

if (window.innerWidth <= 768) {

    document.querySelectorAll(".dropdown > a").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const menu = this.nextElementSibling;

            document.querySelectorAll(".dropdown-content").forEach(drop => {

                if (drop !== menu) {

                    drop.style.display = "none";

                }

            });

            menu.style.display =
                menu.style.display === "block"
                    ? "none"
                    : "block";

        });

    });

}

// --------------------------
// Card Hover Animation
// --------------------------

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// --------------------------
// Sticky Header Shadow
// --------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "0 6px 18px rgba(0,0,0,.25)";

    }

});

console.log("Welcome Commander!");
