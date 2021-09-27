/*------------------------------------------*
*                  Duties                   *
/*------------------------------------------*/

function checkDuties() {

        menu.status = `You gaze into the duty ledger. At sergeant's order, you are allowed to request permission to handle any high-priority assignment in any order you wish. Your finger stops at the list of high priority assignments for today.`;

        button.firstaction = `<button class="actionButton" onclick="assignments.firstassignment.event">${assignments.firstassignment.name}</button>`;
        button.secondaction = `<button class="actionButton" onclick="assignments.secondassignment.event">${assignments.secondassignment.name}</button>`;
        button.thirdaction = `<button class="actionButton" onclick="assignments.thridassignment.event">${assignments.thirdassignment.name}</button>`;
        button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

        view();

}


function updateDutyRoster() {

    let list = [];

    while (list.length < Math.min(3,assignments.assignmentlist.length)) {
        random = Math.floor(Math.random()*assignments.assignmentlist.length)
        let newAssignment = assignments.assignmentlist[random];

        if (!list.includes(newAssignment)) list.push(newAssignment);
    }

    assignments.firstassignment = list[0];
    assignments.secondassignment = list[1];
    assignments.thirdassignment = list[2];

    view();
}

/*------------------------------------------*
*               Honing skills               *
/*------------------------------------------*/

function lightWeights() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.strength++;
    skills.exercisepoints--;

    menu.status = `You do one set of repitions with light weights. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function heavyWeights() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.strength += 3;
    skills.exercisepoints -= 3;

    menu.status = `You do one set of repitions with heavy weights. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function maxStrength() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.strength += skills.exercisepoints;
    skills.exercisepoints -= skills.exercisepoints;

    menu.status = `You expend your remaining effort on strength training. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}

function strengthTraining() {
    menu.status = `You decide to do some strength training. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    button.firstaction = `<button class="actionButton" onclick="lightWeights()">Light weights</button>`;
    button.secondaction = `<button class="actionButton" onclick="heavyWeights()">Heavy weights</button>`;
    button.thirdaction = `<button class="actionButton" onclick="maxStrength()">Max strength</button>`;
    button.fourthaction = `<button class="actionButton" onclick="honeSkills()">Other training</button>`;

    view();
}
function shortCourse() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.agility++;
    skills.exercisepoints--;

    menu.status = `You expertly navigate yourself through the short agility course. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function longCourse() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.agility += 3;
    skills.exercisepoints -= 3;

    menu.status = `You exert yourself expertly, dodging swinging logs, climbing over walls and under barbed wire, and complete the long agility course. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function maxAgility() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.agility += skills.exercisepoints;
    skills.exercisepoints -= skills.exercisepoints;

    menu.status = `You put all of your remaining effort into agility training. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}

function agilityTraining() {
    menu.status = `You decide to do some agility training. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    button.firstaction = `<button class="actionButton" onclick="shortCourse()">Short course</button>`;
    button.secondaction = `<button class="actionButton" onclick="longCourse()">Long course</button>`;
    button.thirdaction = `<button class="actionButton" onclick="maxAgility()">Max agility</button>`;
    button.fourthaction = `<button class="actionButton" onclick="honeSkills()">Other training</button>`;

    view();
}
function blockHit() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.defence++;
    skills.exercisepoints--;

    menu.status = `You raise your shield and block a hit from your sparring partner. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function blockLog() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.defence += 3;
    skills.exercisepoints -= 3;

    menu.status = `The giant log hanging from a chain in the ceiling comes crashing towards you, and you brace your shield for impact. You manage to only fly a few meters back when it hits you, impressing your peers. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function maxDefence() {
    if (skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    skills.defence += skills.exercisepoints;
    skills.exercisepoints -= skills.exercisepoints;

    menu.status = `You put all of your remaining effort into defence training. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}

function defenceTraining() {
    menu.status = `You decide to do some agility training. You have ` + skills.exercisepoints + ` exercise points left to spend today.`;

    button.firstaction = `<button class="actionButton" onclick="blockHit()">Block hit</button>`;
    button.secondaction = `<button class="actionButton" onclick="blockLog()">Block log</button>`;
    button.thirdaction = `<button class="actionButton" onclick="maxDefence()">Max Defence</button>`;
    button.fourthaction = `<button class="actionButton" onclick="honeSkills()">Other training</button>`;

    view();
}

function honeSkills() {
    menu.status = `The sergeant nods approvingly as you head for the exercise arena. Daily training is vital to stay in shape.`;

    button.firstaction = `<button class="actionButton" onclick="strengthTraining()">Strength training</button>`;
    button.secondaction = `<button class="actionButton" onclick="agilityTraining()">Agility training</button>`;
    button.thirdaction = `<button class="actionButton" onclick="defenceTraining()">Defence training</button>`;
    button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

    view();
}

/*------------------------------------------*
*                    Chat                   *
/*------------------------------------------*/

function sergeantChatMenu() {
    menu.status = status.sergeant.chat;

    button.firstaction = `<button class="actionButton" onclick="checkDuties()">Check duties</button>`;
    button.secondaction = `<button class="actionButton" onclick="honeSkills()">Hone your skills</button>`;
    button.thirdaction = `<button class="actionButton" onclick="">Chat</button>`;
    button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

    view();
}

/*------------------------------------------*
*           Sergeant interact menu          *
/*------------------------------------------*/

function reportToSergeant() {
    menu.status = `Welcome back, ` + player.name + `. We have plenty of assignments for you to dig into.`

    button.firstaction = `<button class="actionButton" onclick="checkDuties()">Check duties</button>`;
    button.secondaction = `<button class="actionButton" onclick="honeSkills()">Hone your skills</button>`;
    button.thirdaction = `<button class="actionButton" onclick="sergeantChatMenu()">Chat</button>`;
    button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

    view();
}

function requestLeave() {
    model.app.currentView = `mainView`;
    menu.bookclose = `closed`;

    skills.strength = 0;
    skills.agility = 0;
    skills.defence = 0;

    view();
}

/*------------------------------------------*
*                 Bag menu                  *
/*------------------------------------------*/

function drinkHealthPotion() {
    if(player.bag.inventory == 10) {
        menu.status = `Your backpack is empty.`;
    }

    else if (player.bag.healthpotions > 0) {
        player.bag.inventory += 1;
        player.bag.healthpotions -= 1;
        isBackpackFull();

    }

    else {
        menu.status = `There are no healthpotions in your backpack.`;
    }

    view();
}

function isBackpackFull() {

    if (!player.bag.inventory == 10) return 'You open your rucksack. There are some items in here. Which section would you like to check?';
    else return 'You open your rucksack. It is empty.';
}

function bagMenu() {
    menu.status = status.bag.full;

    button.firstaction = `<button class="actionButton" onclick="drinkHealthPotion()">Drink healthpotion</button>`;
    button.secondaction = `<button class="actionButton" onclick=""></button>`;
    button.thirdaction = `<button class="actionButton" onclick=""></button>`;
    button.fourthaction = `<button class="actionButton" onclick="fightMenu()">Close bag</button>`;

    view();
}


/*------------------------------------------*
*           Explore barracks menu           *
/*------------------------------------------*/

function canteenMenu() {
    menu.status = 'You enter the canteen. Several forest guardians are sitting together in small groups. What would you like to do?';

    button.firstaction = `<button class="actionButton" onclick="">Order food</button>`;
    button.secondaction = `<button class="actionButton" onclick="">Socialize</button>`;
    button.thirdaction = `<button class="actionButton" onclick=""></button>`;
    button.fourthaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Go back</button>`;

    view();
}
function armouryMenu() {
    menu.status = 'You enter the armoury. Rows upon rows of weapons are hanging in cases across the wall. There are a few cases of gunpowder in the corner of the room, and the armoury officer is sitting behind his dimly lit desk writing something. What would you like to do?';

    button.firstaction = `<button class="actionButton" onclick="">Equip sword</button>`;
    button.secondaction = `<button class="actionButton" onclick="">Equip battleaxe</button>`;
    button.thirdaction = `<button class="actionButton" onclick="">Equip spear</button>`;
    button.fourthaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Go back</button>`;

    view();
}
function infirmaryMenu() {
    menu.status = 'You enter the infirmary, the one place in the barracks not smelling like sweaty people. A man of slender build sits behind a desk, and smiles at you as you enter. What would you like to do?';

    button.firstaction = `<button class="actionButton" onclick="">Restore health</button>`;
    button.secondaction = `<button class="actionButton" onclick="">Buy health potions</button>`;
    button.thirdaction = `<button class="actionButton" onclick="">Chat</button>`;
    button.fourthaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Go back</button>`;

    view();
}
function exploreBarracksMenu() {
    menu.status = 'Where would you like to go?';

    button.firstaction = `<button class="actionButton" onclick="canteenMenu()">Canteen</button>`;
    button.secondaction = `<button class="actionButton" onclick="armouryMenu()">Armoury</button>`;
    button.thirdaction = `<button class="actionButton" onclick="infirmaryMenu()">Infirmary</button>`;
    button.fourthaction = `<button class="actionButton" onclick="fightMenu()">Go back</button>`;

    view();
}


/*------------------------------------------*
*          Start menu for fight view        *
/*------------------------------------------*/


function fightMenu() {
    menu.status = `You report to the forest barracks for active duty.`;

    button.firstaction = `<button class="actionButton" onclick="reportToSergeant()">Report to Sergeant</button>`;
    button.secondaction = `<button class="actionButton" onclick="bagMenu()">Open bag</button>`;
    button.thirdaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Explore barracks</button>`;
    button.fourthaction = `<button class="actionButton" onclick="requestLeave()">Request leave</button>`;

    view();
}
