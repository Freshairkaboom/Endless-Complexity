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
    else return Math.floor(30 * levelfactor.experience)
}

function applyLevel() {
    player.health = 100;
    player.ad = 7;
    player.speed = 5;

    player.health += Math.floor(player.health * levelfactor.health);
    player.ad += Math.floor(player.ad * levelfactor.ad);
    player.speed += Math.floor(player.speed * levelfactor.speed);
}

function setName() {

    player.name = '<input onchange="changeName(this.value)"/>'
    updateView();
}

function changeName(name) {
    pmvariables.truename = name;

    player.name = '<span onclick="setName()">' + name + '</span>';
    updateView();
}

function eventLock() {
    if (time.event == false) return "locked";
    time.event = false;
}

function updateQuest(status, button1, button2, button3, button4) {
    menu.status = status;

    button.firstaction = button1;

    button.secondaction = button2;

    button.thirdaction = button3;

    button.fourthaction = button4;
}

function staggeredText(text) {

    let str = text;
    let strArray = str.split("");

    if (strArray[loop.i-1] == "." || strArray[loop.i-1] == "!" || strArray[loop.i-1] == "?") {
        setTimeout(()=>{
            if (loop.i < strArray.length) {
                menu.status += strArray[loop.i];
                updateView();
                loop.i++;
                staggeredText(text);
            }

            else {
                loop.i = 0;

            }

        },1500);
    }

    else {
        setTimeout(()=>{
            if (loop.i < strArray.length) {
                menu.status += strArray[loop.i];
                updateView();
                loop.i++;
                staggeredText(text);
            }

            else {
                loop.i = 0;

            }

        },50);
    }



    return "";

}
