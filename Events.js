//Called from selectEvent() function branch

function fightSequence(monster) {
    status = "You encountered a " + monster.name + "!";

    firstAction = `<button class="actionButton" onclick="strikeMonster(calculateDamage())">Strike</button>`;

    secondAction = `<button class="actionButton" onclick="selectEvent('Fight')">Open bag</button>`;

    thirdAction = `<button class="actionButton" onclick="selectEvent('Fight')">Assess area</button>`;

    fourthAction = `<button class="actionButton" onclick="selectEvent('Fight')">Flee</button>`;

    updateView();
    console.log(monster.name);



}

function treasureHunt(treasureEvent) {
    treasureEvent.strength = Math.ceil(Math.random()*5);
    treasureEvent.stealthdetection = Math.ceil(Math.random()*10);
    treasureEvent.traps = Math.ceil(Math.random()*5);
    treasureEvent.treasure = 'Stick';
    console.log(treasureEvent);

    let eventName = treasureEvent.name;

    firstAction = `<button class="actionButton" onclick="selectEvent('Fight')">Brute force</button>`;
    secondAction = `<button class="actionButton" onclick="selectEvent('Fight')">Sneak around</button>`;

    status = 'You entered a ' + eventName + '!';
    updateView();
    return;
}
