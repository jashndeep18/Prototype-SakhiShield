// ================= TAB NAVIGATION =================

// Select all nav buttons (desktop + mobile)
const navButtons = document.querySelectorAll(".nav-btn");

// Select all tab sections
const tabContents = document.querySelectorAll(".tab-content");

// Function to switch tabs
function switchTab(tabName) {
    // Remove active from all buttons
    navButtons.forEach(btn => btn.classList.remove("active"));

    // Hide all tabs
    tabContents.forEach(tab => tab.classList.remove("active"));

    // Activate selected tab
    document.getElementById(tabName + "Tab").classList.add("active");

    // Activate clicked buttons (desktop + mobile)
    navButtons.forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.classList.add("active");
        }
    });

    // Close mobile menu after click
    mobileNav.classList.remove("show");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add click listeners
navButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tabName = button.dataset.tab;
        switchTab(tabName);
    });
});


// ================= MOBILE MENU =================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
});
