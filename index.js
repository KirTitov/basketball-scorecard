let homeCaunt = 0;
let guestCaunt = 0;
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

// plus 1
function plusOneHome() {
    homeCaunt += 1;
    homeScore.innerText = homeCaunt;
}

function plusOneGuest() {
    guestCaunt += 1;
    guestScore.innerText = guestCaunt;
}

// plus 2
function plusTwoHome() {
    homeCaunt += 2;
    homeScore.innerText = homeCaunt;
}

function plusTwoGuest() {
    guestCaunt += 2;
    guestScore.innerText = guestCaunt;
}

// plus 3
function plusThreeHome() {
    homeCaunt += 3;
    homeScore.innerText = homeCaunt;
}

function plusThreeGuest() {
    guestCaunt += 3;
    guestScore.innerText = guestCaunt;
}

//Reset
function reset1() {
    homeCaunt = 0;
    homeScore.innerText = homeCaunt;
}

function reset2() {
    guestCaunt = 0;
    guestScore.innerText = homeCaunt;
}

// Timer

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 12,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


// Animation

function applyFlipEffect(boxId) {
    let box = document.getElementById(boxId);

    // Remove the class to reset animation
    box.classList.remove("flip-horizontal-bottom");

    // Force reflow to restart animation
    void box.offsetWidth;

    // Re-add the class to trigger animation
    box.classList.add("flip-horizontal-bottom");
}

// Event listeners for both buttons
document.getElementById("flipBtn1").addEventListener("click", function() {
    applyFlipEffect("box1");
});

document.getElementById("flipBtn2").addEventListener("click", function() {
    applyFlipEffect("box2");
});
