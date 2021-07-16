// For functions used by several menus and views.

// Functions used to level up player and keep variables from resetting//
function levelUp () {
    pmvariables.level ++;
    pmvariables.experiencepoints = 0;
    levelfactor.experience += 1.8;

    levelfactor.health += 0.25;
    levelfactor.ad += 0.25;
    levelfactor.speed += 0.25;

    updateView();
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
    updateView();
}

function changeName(name) {
    pmvariables.truename = name;

    player.name = '<span onclick="setName()">' + name + '</span>';
    updateView();
}

// Function used to prevent multiple events from firing at the same time. Locks time.event at the beginning of an event and time.event has to be manually reset at the end of events it is called from //
function eventLock() {
    if (time.event == false) return "locked";
    time.event = false;
}

// Function used to update quest text and buttons //
function updateQuest(status, button1, button2, button3, button4) {
    menu.status = status;

    button.firstaction = button1;

    button.secondaction = button2;

    button.thirdaction = button3;

    button.fourthaction = button4;
}

// Function used to add a stagger effect to menu.status text //
function staggeredText(text) {

    let str = text;
    let strArray = str.split("");

    if (strArray[loop.i-1] == "." || strArray[loop.i-1] == "!" || strArray[loop.i-1] == "?") {
        setTimeout(()=>{
            if (loop.i < strArray.length) {
                menu.booktext += strArray[loop.i];
                updateView();
                loop.i++;
                staggeredText(text);
            }

            else {
                loop.i = 0;
                setTimeout(()=>{
                    menu.booktext = '';
                    menu.bookclose = "closed";
                    time.selectevent = true;
                    updateView();
                },3000);
            }

        },1500);
    }

    else {
        setTimeout(()=>{
            if (loop.i < strArray.length) {
                menu.booktext += strArray[loop.i];
                updateView();
                loop.i++;
                staggeredText(text);
            }

            else {
                loop.i = 0;
                setTimeout(()=>{
                    menu.booktext = '';
                    menu.bookclose = "closed";
                    time.selectevent = true;
                    updateView();
                },3000);
            }

        },40);
    }



    return "";

}
    writeIntro();
function writeIntro() {
    time.selectevent = false;
    menu.booktext = staggeredText(menu.intro);
    updateView();

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

    storeData('menu.round', menu.round);
    storeData('pmvariables.level', pmvariables.level);
    storeData('pmvariables.experiencepoints', pmvariables.experiencepoints);

    storeData('levelfactor.health', levelfactor.health);
    storeData('levelfactor.ad', levelfactor.ad);
    storeData('levelfactor.speed', levelfactor.speed);
    storeData('levelfactor.experience', levelfactor.experience);

    storeData('monstergrowth.health', monstergrowth.health);
    storeData('monstergrowth.ad', monstergrowth.ad);
    storeData('monstergrowth.speed', monstergrowth.speed);
    storeData('monsterbuff.interval', monsterbuff.interval);

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

    menu.round = parseInt(localStorage.getItem('menu.round'));
    pmvariables.level = parseInt(localStorage.getItem('pmvariables.level'));
    pmvariables.experiencepoints = parseInt(localStorage.getItem('pmvariables.experiencepoints'));

    levelfactor.health = parseInt(localStorage.getItem('levelfactor.health'));
    levelfactor.ad = parseInt(localStorage.getItem('levelfactor.ad'));
    levelfactor.speed = parseInt(localStorage.getItem('levelfactor.speed'));
    levelfactor.experience = parseFloat(localStorage.getItem('levelfactor.experience'));

    monstergrowth.health = parseInt(localStorage.getItem('monstergrowth.health'));
    monstergrowth.ad = parseInt(localStorage.getItem('monstergrowth.ad'));
    monstergrowth.speed = parseInt(localStorage.getItem('monstergrowth.speed'));
    monsterbuff.interval = parseInt(localStorage.getItem('monsterbuff.interval'));

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

    updateView();
}

function storeData(nameOfData, valueOfData) {
    localStorage.setItem(nameOfData, valueOfData)
}
