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
