function fightSequence2(encounter) {

    time.event = true;

    enemy.current = encounter;

    menu.status = "You encountered a " + enemy.current.name + "!";

    button.firstaction = `<button class="actionButton" onclick="engageEnemy()">Engage</button>`;

    button.secondaction = `<button class="actionButton" onclick="openBag()">Open bag</button>`;

    button.thirdaction = `<button class="actionButton" onclick="assessArea()">Assess area</button>`;

    button.fourthaction = `<button class="actionButton" onclick="flee()">Flee</button>`;

    view();

}

function engageEnemy() {
    menu.status = "You got the attention of the " + enemy.current.name + "! " + randomQuip();

    button.firstaction = `<button class="actionButton" onclick="${player.attack1}">${player.attack1.name}</button>`;

    button.secondaction = `<button class="actionButton" onclick="${player.attack2}">${player.attack2.name}</button>`;

    button.thirdaction = `<button class="actionButton" onclick=${player.attack3}">${player.attack3.name}</button>`;

    button.fourthaction = `<button class="actionButton" onclick="${player.attack4}">${player.attack4.name}</button>`;

    view();
}



function attackStrike() {
    menu.status = "You perform a strike with your " + player.weapon.name + "...";

    button.firstaction = `<button class="actionButton" onclick="fightMenu()">Fight</button>`;

    button.secondaction = `<button class="actionButton" onclick="openBag()">Open bag</button>`;

    button.thirdaction = `<button class="actionButton" onclick="assessArea()">Assess area</button>`;

    button.fourthaction = `<button class="actionButton" onclick="flee()">Flee</button>`;

    view();
}
