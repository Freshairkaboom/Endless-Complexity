function goForest() {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head deeper into the forest.";

        button.firstaction = `<button class="actionButton exploreSequence" onclick="sectorForest2(direction.north)">Go north</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="sectorForest4(direction.west)">Go west</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="sectorForest6(direction.east)">Go east</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="sectorForest8(direction.south)">Go south</button>`;

        time.event = true;

        updateView();

    },500);

    updateView();
}

function sectorForest1(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

        setTimeout(()=>{
            menu.status = "You head "+ direction +" towards the foot of a great mountain. There is a warning sign to the north that reads: "  +
            "None may enter the northern woods until the threat of bandits have been sorted out. Do not go in alone.";

            if (firsttime.sector1 == false) menu.status = "You head "+ direction +" and end up back at the entrance to the Deep Woods."

            button.firstaction = `<button class="actionButton exploreSequence" onclick="enterDeepWoods()">Enter Deep Woods</button>`;

            button.secondaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

            button.thirdaction = `<button class="actionButton exploreSequence" onclick="sectorForest2(direction.east)">Go east</button>`;

            button.fourthaction = `<button class="actionButton exploreSequence" onclick="sectorForest4(direction.south)">Go south</button>`;

            firsttime.sector1 = false;

            time.event = true;

            updateView();

        },500);

        updateView();
    }

function sectorForest2(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " to a clearing. There are several roaming merchants passing through. Some of the carts are riddled with arrows. Have they been attacked recently?";

        if (firsttime.sector2 == false) {
            menu.status = "You head "+ direction +" to the northern clearing. Several worn-out merchants are passing through. They all seem to be in a hurry.";

            if (theMerchantQuest.completion == false) {
                theMerchant();
                time.event = true;
                return;
            }
        }

        button.firstaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="sectorForest1(direction.west)">Go west</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="sectorForest3(direction.east)">Go east</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="sectorForest5(direction.south)">Go south</button>`;

        firsttime.sector2 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest3(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and find a spring with colorful mushrooms strewn about." +
        " Somehow you can sense that picking them would lead to very bad fortune.";

        if (firsttime.sector3 == false) menu.status = "You head "+ direction +" and end up at the spring with the colorful mushrooms. You spot several shadows dancing in the water, but they disappear as you get closer.";

        button.firstaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="sectorForest2(direction.west)">Go west</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="sectorForest6(direction.south)">Go south</button>`;

        firsttime.sector3 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest4(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and come to a cave opening in the mountain wall with an orange hue. A terrible stench permeates the surrounding area, and the grass is scorched in several places. A warning sign reads: Lair of fire-breathing creatures.";

        if (firsttime.sector4 == false) menu.status = "You head "+ direction +" and end up back at the entrance to the Caverns. It smells like sulphur and burnt flesh.";

        button.firstaction = `<button class="actionButton exploreSequence" onclick="sectorForest1(direction.north)">Go north</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="enterCavern()">Enter Cavern</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="sectorForest5(direction.east)">Go east</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="sectorForest7(direction.south)">Go south</button>`;

        firsttime.sector4 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest5(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and find yourself back at your home. Maybe you would like to go home and rest?";

        button.firstaction = `<button class="actionButton exploreSequence" onclick="returnHome()">Return home</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="exploreSequence()">Keep adventuring</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        firsttime.sector5 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest6(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and find sets of winding paths stretching into a dense part of the forest. You get a feeling that if you entered it without a map or guide, you would never find your way back.";

        if (firsttime.sector6 == false) menu.status = "You head "+ direction +" and end up back at the entrance to the Winding Paths. A gust of wind escapes from behind the trees, hitting you in the face. Clearly, something is reacting to your presence."

        button.firstaction = `<button class="actionButton exploreSequence" onclick="sectorForest3(direction.north)">Go north</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="sectorForest5(direction.west)">Go west</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="enterWindingPaths()">Enter winding paths</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="sectorForest9(direction.south)">Go south</button>`;

        firsttime.sector6 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest7(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and find a lone campfire that seems to have been abandoned recently. The smell of potato stew eminates from the campsite, but you can't see any food.";

        if (firsttime.sector7 == false) menu.status = "You head "+ direction +" and find yourself back at the abandoned campfire. There's an eerie silence here, almost like the forest is holding its breath.";

        button.firstaction = `<button class="actionButton exploreSequence" onclick="sectorForest4(direction.north)">Go north</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="sectorForest8(direction.east)">Go east</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        firsttime.sector7 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest8(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and smell the fresh air of the ocean coming from the path to the south. A solid wooden bridge leads over a deep moat onto the beach. You can see several beach goers in the distance, sitting in the sand or swimming in the ocean.";

        if (firsttime.sector8 == false) menu.status = "You head "+ direction +" and smell the ocean breeze beckoning you. Maybe you should spend a few hours here...";

        button.firstaction = `<button class="actionButton exploreSequence" onclick="sectorForest5(direction.north)">Go north</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="sectorForest7(direction.west)">Go west</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick="sectorForest9(direction.east)">Go east</button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick="enterBeach()">Go to beach</button>`;

        firsttime.sector8 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
function sectorForest9(direction) {
    if(eventLock() == "locked") return;

    menu.status = "You start walking...";

    setTimeout(()=>{
        menu.status = "You head " + direction + " and encounter a part of the forest so dense that you cannot see a way through. A collection of large stones in the middle of the zone makes for great cover, almost like a tiny fortress. You scout around them, but can't find anything interesting.";

        if (firsttime.sector9 == false) menu.status = "You head "+ direction +" and come upon the large collection of stones from before. You don't see anything interesting in the area."

        button.firstaction = `<button class="actionButton exploreSequence" onclick="sectorForest6(direction.north)">Go north</button>`;

        button.secondaction = `<button class="actionButton exploreSequence" onclick="sectorForest8(direction.west)">Go west</button>`;

        button.thirdaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        button.fourthaction = `<button class="actionButton exploreSequence" onclick=""></button>`;

        firsttime.sector9 = false;

        time.event = true;

        updateView();

    },500);

    updateView();
}
