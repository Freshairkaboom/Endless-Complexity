function theMerchant() {
    menu.status = theMerchantQuest.intro[0];

    button.firstaction = `<button class="actionButton" onclick="theMerchantChapter1()">Start quest</button>`;

    button.secondaction = `<button class="actionButton" onclick="ignoreQuest()">Ignore quest</button>`;

    button.thirdaction = `<button class="actionButton" onclick=""></button>`;

    button.fourthaction = `<button class="actionButton" onclick=""></button>`;

    view();
}

function theMerchantChapter1() {
    menu.status = theMerchantQuest.chapter1[0];

    button.firstaction = `<button class="actionButton" onclick="pushStory(0)">${theMerchantQuest.responses.button1[0]}</button>`;

    button.secondaction = `<button class="actionButton" onclick="pushStory(1)">${theMerchantQuest.responses.button1[0]}</button>`;

    button.thirdaction = `<button class="actionButton" onclick=pushStory(2)">${theMerchantQuest.responses.button1[0]}</button>`;

    button.fourthaction = `<button class="actionButton" onclick="pushStory(3)">${theMerchantQuest.responses.button1[0]}</button>`;

    view();


}

function ignoreQuest() {
    menu.status = "The figure is not interesting enough to pique your curiosity, so you head back to the road.";

    button.firstaction = `<button class="actionButton" onclick=""></button>`;

    button.secondaction = `<button class="actionButton" onclick="sectorForest1(direction.west)">Go west</button>`;

    button.thirdaction = `<button class="actionButton" onclick="sectorForest3(direction.east)">Go east</button>`;

    button.fourthaction = `<button class="actionButton" onclick="sectorForest5(direction.south)">Go south</button>`;

    view();
}

function pushStory(choice) {

    for (i=0; i<100; i++) {

        if (menu.status == theMerchantQuest.chapter1[i]) {
            let chapterPush = true;

            if (chapterPush == true && theMerchantQuest.chapter1[i+1][0]) {
                menu.status = theMerchantQuest.chapter1[i+1][choice];

                button.firstaction = `<button class="actionButton" onclick="pushStory(0)">${theMerchantQuest.responses.button1[i+1]}</button>`;

                button.secondaction = `<button class="actionButton" onclick="pushStory(1)">${theMerchantQuest.responses.button2[i+1]}</button>`;

                button.thirdaction = `<button class="actionButton" onclick=pushStory(2)">${theMerchantQuest.responses.button3[i+1]}</button>`;

                button.fourthaction = `<button class="actionButton" onclick="pushStory(3)">${theMerchantQuest.responses.button4[i+1]}</button>`;

                view();
                return;
            }

            else if (chapterPush == true) {
                menu.status = theMerchantQuest.chapter1[i+1];

                button.firstaction = `<button class="actionButton" onclick="pushStory(0)">I'm looking for a quest</button>`;

                button.secondaction = `<button class="actionButton" onclick="pushStory(1)">Is everything okay?</button>`;

                button.thirdaction = `<button class="actionButton" onclick=pushStory(2)">Awfully clean hands you got</button>`;

                button.fourthaction = `<button class="actionButton" onclick="pushStory(3)">*Leave*</button>`;

                view();
                return;
            }
        }

    }

}
