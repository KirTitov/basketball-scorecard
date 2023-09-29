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

function reset1() {
    homeCaunt = 0
    homeScore.innerText = homeCaunt
}

function reset2() {
    guestCaunt = 0
    guestScore.innerText = homeCaunt
}

