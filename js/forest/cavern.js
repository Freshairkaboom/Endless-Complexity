function enterCavern() {
    if (pmvariables.level < 5 && theMerchantQuest.completion == false && 1>2) {
        menu.status = "You try to enter the cavern, but the terrifying screeches coupled with the intense heat makes you feel overwhelmed. "+
        "You should probably come back when you're a bit stronger."
        updateView();
    }

    else {
        menu.status = "You enter the cavern, and immediately the intense heat hits your face, but you brave through it, confident in your own abilities. You should probably avoid using flammable equipment. The narrow paths lead to multiple different parts of the cave. Which way do you want to go?";

        button.firstaction = `<button class="actionButton exploreSequence" onclick="">Go left</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="">Go middle</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="">Go right</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="">Go back</button>`;

        updateView();
    }
}
