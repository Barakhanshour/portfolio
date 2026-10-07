// ========================================
// CURRENT YEAR
// ========================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ========================================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});

