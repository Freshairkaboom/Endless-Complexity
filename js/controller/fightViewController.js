/*------------------------------------------*
*                  Duties                   *
/*------------------------------------------*/

function checkDuties() {

        model.fightview.menu.status = `You gaze into the duty ledger. At sergeant's order, you are allowed to request permission to handle any high-priority assignment in any order you wish. Your finger stops at the list of high priority assignments for today.`;

        model.fightview.button.firstaction = `<button class="actionButton" onclick="model.fightview.assignments.firstassignment.event">${model.fightview.assignments.firstassignment.name}</button>`;
        model.fightview.button.secondaction = `<button class="actionButton" onclick="model.fightview.assignments.secondassignment.event">${model.fightview.assignments.secondassignment.name}</button>`;
        model.fightview.button.thirdaction = `<button class="actionButton" onclick="model.fightview.assignments.thridassignment.event">${model.fightview.assignments.thirdassignment.name}</button>`;
        model.fightview.button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

        view();

}


function updateDutyRoster() {

    let list = [];

    while (list.length < Math.min(3,model.fightview.assignments.assignmentlist.length)) {
        random = Math.floor(Math.random()*model.fightview.assignments.assignmentlist.length)
        let newAssignment = model.fightview.assignments.assignmentlist[random];

        if (!list.includes(newAssignment)) list.push(newAssignment);
    }

    model.fightview.assignments.firstassignment = list[0];
    model.fightview.assignments.secondassignment = list[1];
    model.fightview.assignments.thirdassignment = list[2];

    view();
}

/*------------------------------------------*
*               Honing skills               *
/*------------------------------------------*/

function lightWeights() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.strength++;
    model.fightview.skills.exercisepoints--;

    model.fightview.menu.status = `You do one set of repitions with light weights. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function heavyWeights() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.strength += 3;
    model.fightview.skills.exercisepoints -= 3;

    model.fightview.menu.status = `You do one set of repitions with heavy weights. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function maxStrength() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.strength += model.fightview.skills.exercisepoints;
    model.fightview.skills.exercisepoints -= model.fightview.skills.exercisepoints;

    model.fightview.menu.status = `You expend your remaining effort on strength training. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}

function strengthTraining() {
    model.fightview.menu.status = `You decide to do some strength training. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="lightWeights()">Light weights</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="heavyWeights()">Heavy weights</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="maxStrength()">Max strength</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="honeSkills()">Other training</button>`;

    view();
}
function shortCourse() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.agility++;
    model.fightview.skills.exercisepoints--;

    model.fightview.menu.status = `You expertly navigate yourself through the short agility course. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function longCourse() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.agility += 3;
    model.fightview.skills.exercisepoints -= 3;

    model.fightview.menu.status = `You exert yourself expertly, dodging swinging logs, climbing over walls and under barbed wire, and complete the long agility course. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function maxAgility() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.agility += model.fightview.skills.exercisepoints;
    model.fightview.skills.exercisepoints -= model.fightview.skills.exercisepoints;

    model.fightview.menu.status = `You put all of your remaining effort into agility training. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}

function agilityTraining() {
    model.fightview.menu.status = `You decide to do some agility training. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="shortCourse()">Short course</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="longCourse()">Long course</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="maxAgility()">Max agility</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="honeSkills()">Other training</button>`;

    view();
}
function blockHit() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.defence++;
    model.fightview.skills.exercisepoints--;

    model.fightview.menu.status = `You raise your shield and block a hit from your sparring partner. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function blockLog() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.defence += 3;
    model.fightview.skills.exercisepoints -= 3;

    model.fightview.menu.status = `The giant log hanging from a chain in the ceiling comes crashing towards you, and you brace your shield for impact. You manage to only fly a few meters back when it hits you, impressing your peers. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}
function maxDefence() {
    if (model.fightview.skills.exercisepoints <= 0) {
        reportToSergeant();
        return;
    }

    model.fightview.skills.defence += model.fightview.skills.exercisepoints;
    model.fightview.skills.exercisepoints -= model.fightview.skills.exercisepoints;

    model.fightview.menu.status = `You put all of your remaining effort into defence training. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    view();
}

function defenceTraining() {
    model.fightview.menu.status = `You decide to do some agility training. You have ` + model.fightview.skills.exercisepoints + ` exercise points left to spend today.`;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="blockHit()">Block hit</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="blockLog()">Block log</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="maxDefence()">Max Defence</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="honeSkills()">Other training</button>`;

    view();
}

function honeSkills() {
    model.fightview.menu.status = `The sergeant nods approvingly as you head for the exercise arena. Daily training is vital to stay in shape.`;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="strengthTraining()">Strength training</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="agilityTraining()">Agility training</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="defenceTraining()">Defence training</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

    view();
}

/*------------------------------------------*
*                    Chat                   *
/*------------------------------------------*/

function sergeantChatMenu() {
    model.fightview.menu.status = model.fightview.status.sergeant.chat;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="checkDuties()">Check duties</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="honeSkills()">Hone your skills</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="">Chat</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

    view();
}

/*------------------------------------------*
*           Sergeant interact menu          *
/*------------------------------------------*/

function reportToSergeant() {
    model.fightview.menu.status = `Welcome back, ` + model.fightview.player.name + `. We have plenty of assignments for you to dig into.`

    model.fightview.button.firstaction = `<button class="actionButton" onclick="checkDuties()">Check duties</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="honeSkills()">Hone your skills</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="sergeantChatMenu()">Chat</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="fightMenu()">At ease</button>`;

    view();
}

function requestLeave() {
    model.app.currentView = `mainView`;
    model.mainview.menu.bookclose = `closed`;

    model.fightview.skills.strength = 0;
    model.fightview.skills.agility = 0;
    model.fightview.skills.defence = 0;

    view();
}

/*------------------------------------------*
*                 Bag menu                  *
/*------------------------------------------*/

function drinkHealthPotion() {
    if(model.fightview.player.bag.inventory == 10) {
        model.fightview.menu.status = `Your backpack is empty.`;
    }

    else if (model.fightview.player.bag.healthpotions > 0) {
        model.fightview.player.bag.inventory += 1;
        model.fightview.player.bag.healthpotions -= 1;
        isBackpackFull();

    }

    else {
        model.fightview.menu.status = `There are no healthpotions in your backpack.`;
    }

    view();
}

function isBackpackFull() {

    if (!model.fightview.player.bag.inventory == 10) return 'You open your rucksack. There are some items in here. Which section would you like to check?';
    else return 'You open your rucksack. It is empty.';
}

function bagMenu() {
    model.fightview.menu.status = model.fightview.status.bag.full;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="drinkHealthPotion()">Drink healthpotion</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick=""></button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick=""></button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="fightMenu()">Close bag</button>`;

    view();
}


/*------------------------------------------*
*           Explore barracks menu           *
/*------------------------------------------*/

function canteenMenu() {
    model.fightview.menu.status = 'You enter the canteen. Several forest guardians are sitting together in small groups. What would you like to do?';

    model.fightview.button.firstaction = `<button class="actionButton" onclick="">Order food</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="">Socialize</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick=""></button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Go back</button>`;

    view();
}
function armouryMenu() {
    model.fightview.menu.status = 'You enter the armoury. Rows upon rows of weapons are hanging in cases across the wall. There are a few cases of gunpowder in the corner of the room, and the armoury officer is sitting behind his dimly lit desk writing something. What would you like to do?';

    model.fightview.button.firstaction = `<button class="actionButton" onclick="">Equip sword</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="">Equip battleaxe</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="">Equip spear</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Go back</button>`;

    view();
}
function infirmaryMenu() {
    model.fightview.menu.status = 'You enter the infirmary, the one place in the barracks not smelling like sweaty people. A man of slender build sits behind a desk, and smiles at you as you enter. What would you like to do?';

    model.fightview.button.firstaction = `<button class="actionButton" onclick="">Restore health</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="">Buy health potions</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="">Chat</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Go back</button>`;

    view();
}
function exploreBarracksMenu() {
    model.fightview.menu.status = 'Where would you like to go?';

    model.fightview.button.firstaction = `<button class="actionButton" onclick="canteenMenu()">Canteen</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="armouryMenu()">Armoury</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="infirmaryMenu()">Infirmary</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="fightMenu()">Go back</button>`;

    view();
}


/*------------------------------------------*
*          Start menu for fight view        *
/*------------------------------------------*/


function fightMenu() {
    model.fightview.menu.status = `You report to the forest barracks for active duty.`;

    model.fightview.button.firstaction = `<button class="actionButton" onclick="reportToSergeant()">Report to Sergeant</button>`;
    model.fightview.button.secondaction = `<button class="actionButton" onclick="bagMenu()">Open bag</button>`;
    model.fightview.button.thirdaction = `<button class="actionButton" onclick="exploreBarracksMenu()">Explore barracks</button>`;
    model.fightview.button.fourthaction = `<button class="actionButton" onclick="requestLeave()">Request leave</button>`;

    view();
}
