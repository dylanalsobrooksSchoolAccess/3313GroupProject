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
    </nav>`;

function loadNavBar() {
    let navBox = document.getElementById('nav-container');
    if (navBox !== null) {
        navBox.innerHTML = navBarHTML;
    }
}

window.addEventListener('DOMContentLoaded', loadNavBar);