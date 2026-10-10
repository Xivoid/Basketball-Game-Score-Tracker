let homePoints = 0;
let guestPoints = 0;

function homeScore(points) {
    homePoints += points;
    document.getElementById("home-score").textContent = homePoints;
}

function guestScore(points) {
    guestPoints += points;
    document.getElementById("guest-score").textContent = guestPoints;
}

// Function to reset scores for a Rematch
function resetGame() {
    homePoints = 0;
    guestPoints = 0;
    document.getElementById("home-score").textContent = homePoints;
    document.getElementById("guest-score").textContent = guestPoints;
}