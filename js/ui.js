const navBarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">Dylan's Bartending School</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="recipe.html">Recipes</a></li>
                    <li class="nav-item"><a class="nav-link" href="booking.html">Book a Bartender</a></li>
                    <li class="nav-item"><a class="nav-link" href="submitRecipe.html">Submit a Recipe</a></li>
                </ul>
            </div>
        </div>
    </nav>`
;

function loadNavBar() {
    let navBox = document.getElementById('nav-container');
    if (navBox !== null) {
        navBox.innerHTML = navBarHTML;
    }
}
window.addEventListener('DOMContentLoaded', loadNavBar);





const sidebarHTML = `            
    <!-- Sidebar Navigation (visible on large screens) -->
    <div>
        <div class="px-3 mb-4 text-center">
            <img src="../src/logo_02.jpg" alt="Bartending School Logo" class="img-fluid rounded"
                style="max-height: 200px;">
        </div>
        <h5 class="px-3 mb-3">Categories</h5>
        <ul class="list-unstyled px-3">
            <li><a href="#" class="text-decoration-none text-dark">Classics</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Modern Cocktails</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Mocktails</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Seasonal Drinks</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Whiskey Cocktails</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Vodka Cocktails</a></li>
        </ul>

        <h5 class="px-3 mt-5 mb-3">Popular This Week!</h5>
        <ul class="list-unstyled px-3">
            <li class="mb-2">Espresso Martini</li>
            <li class="mb-2">Smoked Old Fashioned</li>
        </ul>
    </div>`
;
function loadSidebar() {
    let sidebarBox = document.getElementById('sidebar-container');
    if (sidebarBox !== null) {
        sidebarBox.innerHTML = sidebarHTML;
    }
}
window.addEventListener('DOMContentLoaded', loadSidebar);





const footerHTML = `
    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
        <div class="container text-center">
            <p>&copy; 2026 Dylan's Bartending School • All Rights Reserved</p>
        </div>
    </footer>`
;
function loadFooter() {
    let footerBox = document.getElementById('footer-container');
    if (footerBox !== null) {
        footerBox.innerHTML = footerHTML;
    }
}
window.addEventListener('DOMContentLoaded', loadFooter);





// store the HTML for injection
const ageVerificationHTML = `
    <!-- inject the modal dialogue -->
    <div id="age-verification-modal" class="modal-overlay">
        <div class="modal-content">
            <h2>Age Verification</h2>
            <p>Please confirm your age to proceed.</p>
            <button id="btn-yes">Yes, I am over 21</button>
            <button id="btn-no">No, I am not over 21</button>
        </div>
    </div>`
;
function loadAgeVerification() {
    // check if user has verified age yet
    let ageVerified = sessionStorage.getItem("ageVerified");
        
    // if null, user has not verified age yet, so show modal
    if (ageVerified === null) {

        // find empty modal
        let modalBox = document.getElementById('age-gate-container');

        // inject modal HTML
        if (modalBox !== null) {
            modalBox.innerHTML = ageVerificationHTML;
            
            // add event listeners to buttons
            let yesButton = document.getElementById("btn-yes");
            let noButton = document.getElementById("btn-no");

            yesButton.addEventListener('click', function() {
                // indicate user verified age
                sessionStorage.setItem("ageVerified", "true");

                // hide modal
                modalBox.innerHTML = "";
            });
            
            noButton.addEventListener('click', function() {
                window.location.href = "about:blank";
            });
        }
    }
}
window.addEventListener('DOMContentLoaded', loadAgeVerification);