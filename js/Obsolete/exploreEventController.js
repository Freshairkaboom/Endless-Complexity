function exploreSequence() {

    time.explore = true;

    menu.status = "You leave your home to explore the surrounding area.";

    button.firstaction = `<button class="actionButton exploreSequence" onclick="goForest()">Go to forest</button>`;

    button.secondaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

    button.thirdaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

    button.fourthaction = `<button class="actionButton exploreSequence" onclick="returnHome()">Return home</button>`;

    view();
}

function returnHome() {
    reset();
}
