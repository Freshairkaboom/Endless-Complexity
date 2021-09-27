function readIntro() {
    menu.bookclose="open";
    view();
    writeIntro();
}

function studySequence() {

    view();

    menu.status = "You enter your home's library. It is a quaint room with a few bookshelves and one cozy chair in the corner. Here you can read tomes picked up in your adventures.";

    button.firstaction = `<button class="actionButton" onclick="">Quest log</button>`;

    button.secondaction = `<button class="actionButton" onclick="">Book of farming</button>`;

    button.thirdaction = `<button class="actionButton" onclick="readIntro()">Intro</button>`;

    button.fourthaction = `<button class="actionButton" onclick="leaveLibrary()">Leave</button>`;

    view();
}

function leaveLibrary() {
    if (menu.bookclose == "open") return;

    else reset();
}
