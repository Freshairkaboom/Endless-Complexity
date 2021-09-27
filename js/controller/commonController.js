// For functions used by several views.

// Functions used to level up player and keep variables from resetting//
function levelUp () {
    pmvariables.level ++;
    pmvariables.experiencepoints = 0;
    levelfactor.experience += 1.8;

    levelfactor.health += 0.25;
    levelfactor.ad += 0.25;
    levelfactor.speed += 0.25;

    view();
}

function getExpReq() {
    if (pmvariables.level == 1) return 30;
    else return Math.floor(30 * levelfactor.experience);
}

function applyLevel() {
    player.health = 100;
    player.ad = 7;
    player.speed = 5;

    player.health += Math.floor(player.health * levelfactor.health);
    player.ad += Math.floor(player.ad * levelfactor.ad);
    player.speed += Math.floor(player.speed * levelfactor.speed);
}

// Functions used to set the player's name //
function setName() {

    player.name = '<input onchange="changeName(this.value)"/>'
    view();
}

function changeName(name) {
    pmvariables.truename = name;

    player.name = '<span onclick="setName()">' + name + '</span>';
    view();
}

// Function used to prevent multiple events from firing at the same time. Locks time.event at the beginning of an event and time.event has to be manually reset at the end of events it is called from //
function eventLock() {
    if (time.event == false) return "locked";
    time.event = false;
}

// Function used to update quest text and buttons //
function updateQuest(status, button1, button2, button3, button4) {
    model.exploreview.menu.status = status;

    model.exploreview.button.firstaction = button1;

    model.exploreview.button.secondaction = button2;

    model.exploreview.button.thirdaction = button3;

    model.exploreview.button.fourthaction = button4;
}

// Function used when player health reaches zero - resets game completely //
function death() {
    menu.winorlose = 'Oh dear, you have met your demise. Try again from the start.'
    alert('You are dead. Load previous save file or try again from the beginning.');
    view();
    player = {
        name: 'Bob',
        health: 0,
        ad: 7, // Attack damage
        speed: 5,
        weapon: polearm,
        //Inventory:
        bag: {
            inventory: 10,
            gold: 10,
            healthpotions: 0,
            strengthpotions: 0,
        },
        armory: {
            slot1: noweapon,
            slot2: noweapon,
            slot3: noweapon,
        }
    }
    view();
    setTimeout(()=> {
        pmvariables.level = 1;
        pmvariables.experiencepoints = 0;
        levelfactor.health = 0;
        levelfactor.ad = 0;
        levelfactor.speed = 0;
        menu.round = 0;

        enemygrowth.health = 0;
        enemygrowth.ad = 0;
        enemygrowth.speed = 0;
        reset();
        },6000)
}

// Function used to add a stagger effect to menu.status text //
function staggeredText(text) {

    let str = text;
    let strArray = str.split("");

    if (strArray[loop.i-1] == "." || strArray[loop.i-1] == "!" || strArray[loop.i-1] == "?") {
        setTimeout(()=>{
            if (loop.i < strArray.length && time.selectevent == false) {
                model.mainview.menu.booktext += strArray[loop.i];
                view();
                loop.i++;
                staggeredText(text);
            }

            else {
                loop.i = 0;
                setTimeout(()=>{
                    model.mainview.menu.booktext = '';
                    model.mainview.menu.bookclose = "closed";
                    model.mainview.time.selectevent = true;
                    view();
                },3000);
            }

        },1500);
    }

    else {
        setTimeout(()=>{
            if (loop.i < strArray.length && time.selectevent == false) {
                model.mainview.menu.booktext += strArray[loop.i];
                view();
                loop.i++;
                staggeredText(text);
            }

            else {
                loop.i = 0;
                setTimeout(()=>{
                    model.mainview.menu.booktext = '';
                    model.mainview.menu.bookclose = "closed";
                    time.selectevent = true;
                    view();
                },3000);
            }

        },40);
    }


    return "";

}

function writeIntro() {
    time.selectevent = false;
    model.mainview.menu.booktext = staggeredText(model.mainview.menu.intro);
    view();

}

function saveGame() {
    if (menu.status != 'You are home.') {
        alert('You can only save when you are home.');
        return;
    }

    storeData('player.name', player.name);
    storeData('player.health', player.health);
    storeData('player.ad', player.ad);
    storeData('player.speed', player.speed);

    storeData('player.weapon.name', player.weapon.name);
    storeData('player.weapon.ad', player.weapon.ad);
    storeData('player.weapon.speed', player.weapon.speed);

    storeData('player.bag.inventory', player.bag.inventory);
    storeData('player.bag.gold', player.bag.gold);
    storeData('player.bag.healthpotions', player.bag.healthpotions);
    storeData('player.bag.strengthpotions', player.bag.strengthpotions);

    storeData('player.bag.seedbag.wheatgrain', player.bag.seedbag.wheatgrain);
    storeData('player.bag.seedbag.barley', player.bag.seedbag.barley);
    storeData('player.bag.seedbag.potato', player.bag.seedbag.potato);
    storeData('player.bag.seedbag.herb', player.bag.seedbag.herb);
    storeData('player.bag.seedbag.poisonivy', player.bag.seedbag.poisonivy);
    storeData('player.bag.seedbag.magicseed', player.bag.seedbag.magicseed);

    storeData('menu.round', menu.round);
    storeData('pmvariables.level', pmvariables.level);
    storeData('pmvariables.experiencepoints', pmvariables.experiencepoints);

    storeData('levelfactor.health', levelfactor.health);
    storeData('levelfactor.ad', levelfactor.ad);
    storeData('levelfactor.speed', levelfactor.speed);
    storeData('levelfactor.experience', levelfactor.experience);

    storeData('enemygrowth.health', enemygrowth.health);
    storeData('enemygrowth.ad', enemygrowth.ad);
    storeData('enemygrowth.speed', enemygrowth.speed);
    storeData('enemybuff.interval', enemybuff.interval);

    storeData('firsttime.sector1', firsttime.sector1);
    storeData('firsttime.sector2', firsttime.sector2);
    storeData('firsttime.sector3', firsttime.sector3);
    storeData('firsttime.sector4', firsttime.sector4);
    storeData('firsttime.sector5', firsttime.sector5);
    storeData('firsttime.sector6', firsttime.sector6);
    storeData('firsttime.sector7', firsttime.sector7);
    storeData('firsttime.sector8', firsttime.sector8);
    storeData('firsttime.sector9', firsttime.sector9);

    storeData('theMerchantQuest.completion', theMerchantQuest.completion);

}
function loadGame() {

    if (model.mainview.menu.booktext != '') {
        model.mainview.menu.booktext = '';
        menu.bookclose = "closed";
        time.selectevent = true;
        view();
    }

    if (menu.status != 'You are home.') {
        alert('You can only load game data when you are home.');
        return;
    }

    if (localStorage.length == 0) {
        alert('There is no saved data in storage.');
        return;
    }
    player.name = localStorage.getItem('player.name');
    player.health = parseInt(localStorage.getItem('player.health'));
    player.ad = parseInt(localStorage.getItem('player.ad'));
    player.speed = parseInt(localStorage.getItem('player.speed'));

    player.weapon.name = localStorage.getItem('player.weapon.name');
    player.weapon.ad = parseInt(localStorage.getItem('player.weapon.ad'));
    player.weapon.speed = parseInt(localStorage.getItem('player.weapon.speed'));

    player.bag.inventory = parseInt(localStorage.getItem('player.bag.inventory'));
    player.bag.gold = parseInt(localStorage.getItem('player.bag.gold'));
    player.bag.healthpotions = parseInt(localStorage.getItem('player.bag.healthpotions'));
    player.bag.strengthpotions = parseInt(localStorage.getItem('player.bag.strengthpotions'));

    player.bag.seedbag.wheatgrain = parseInt(localStorage.getItem('player.bag.seedbag.wheatgrain'));
    player.bag.seedbag.barley = parseInt(localStorage.getItem('player.bag.seedbag.barley'));
    player.bag.seedbag.potato = parseInt(localStorage.getItem('player.bag.seedbag.potato'));
    player.bag.seedbag.herb = parseInt(localStorage.getItem('player.bag.seedbag.herb'));
    player.bag.seedbag.poisonivy = parseInt(localStorage.getItem('player.bag.seedbag.poisonivy'));
    player.bag.seedbag.magicseed = parseInt(localStorage.getItem('player.bag.seedbag.magicseed'));

    menu.round = parseInt(localStorage.getItem('menu.round'));
    pmvariables.level = parseInt(localStorage.getItem('pmvariables.level'));
    pmvariables.experiencepoints = parseInt(localStorage.getItem('pmvariables.experiencepoints'));

    levelfactor.health = parseFloat(localStorage.getItem('levelfactor.health'));
    levelfactor.ad = parseFloat(localStorage.getItem('levelfactor.ad'));
    levelfactor.speed = parseFloat(localStorage.getItem('levelfactor.speed'));
    levelfactor.experience = parseFloat(localStorage.getItem('levelfactor.experience'));

    enemygrowth.health = parseFloat(localStorage.getItem('enemygrowth.health'));
    enemygrowth.ad = parseFloat(localStorage.getItem('enemygrowth.ad'));
    enemygrowth.speed = parseFloat(localStorage.getItem('enemygrowth.speed'));
    enemybuff.interval = parseFloat(localStorage.getItem('enemybuff.interval'));

    firsttime.sector1 = localStorage.getItem('firsttime.sector1');
    firsttime.sector2 = localStorage.getItem('firsttime.sector2');
    firsttime.sector3 = localStorage.getItem('firsttime.sector3');
    firsttime.sector4 = localStorage.getItem('firsttime.sector4');
    firsttime.sector5 = localStorage.getItem('firsttime.sector5');
    firsttime.sector6 = localStorage.getItem('firsttime.sector6');
    firsttime.sector7 = localStorage.getItem('firsttime.sector7');
    firsttime.sector8 = localStorage.getItem('firsttime.sector8');
    firsttime.sector9 = localStorage.getItem('firsttime.sector9');

    theMerchantQuest.completion = localStorage.getItem('theMerchantQuest.completion');

    view();
}

function storeData(nameOfData, valueOfData) {
    localStorage.setItem(nameOfData, valueOfData)
}

function randomQuip() {
    random = Math.floor(Math.random()*4);

    if (random == 0) return "They seem to be hostile, so you seem to have no choice but to fight.";
    if (random == 1) return "You can see that they are not in the mood for talking. Draw your weapon!";
    if (random == 2) return "You can sense their bloodlust from a mile away. Seems like they're in a mood to fight!";
    if (random == 3) return "The enemy has the stench of blood on their coat. You see no reason to believe it was self defence, so you ready your weapon.";
}

function closeBook() {
    menu.bookclose = "closed";
}
