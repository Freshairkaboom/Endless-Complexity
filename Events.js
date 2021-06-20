//Called from selectEvent() function branch

function fightSequence(monster) {

    monsterName = monster.name;
    monsterHealth = monster.health;

    currentMonster = monster;

    status = "You encountered a " + monster.name + "!";

    firstAction = `<button class="actionButton fightSequence" onclick="strikeMonster(calculateDamage())">Strike</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="alert('This button does nothing (yet).')">Open bag</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="alert('This button does nothing (yet).')">Assess area</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="flee()">Flee</button>`;

    updateView();

}

function strikeMonster(damage) {

    if (strikeTime == false) return;
    strikeTime = false;
    if (fleeTime == false) return;

    status = 'You prepare to strike your foe...';
    updateView();

    setTimeout(()=>{
        weaponSpeed = addWeaponSpeed();

        if (player.speed + weaponSpeed >= currentMonster.speed) {
            currentMonster.health -= damage;
            checkDead();
            if (currentMonster.health < 0) currentMonster.health = 0;
            player.health -= currentMonster.ad;
            checkDead();
            if (player.health < 0) player.health = 0;

        }
        else {
            player.health -= currentMonster.ad;
            checkDead();
            if (player.health < 0) player.health = 0;

            currentMonster.health -= damage;
            checkDead();
            if (currentMonster.health < 0) currentMonster.health = 0;
        }
        if (player.health > 0 && currentMonster.health > 0) {
            if(player.health < 50 && currentMonster.health > 50) {
                status = "You don't see yourself winning a head on engagement any longer. Perhaps you should change strategy."
                updateView();
                strikeTime = true;

            }
            else {
                status = "You dealt " + damage + " damage to the " + currentMonster.name + ", and the "
                + currentMonster.name + " dealt " + currentMonster.ad + " damage to you.";
                updateView();
                strikeTime = true;
            }

        }
        else if (player.health == 0) {
            player.health = 100;
            strikeTime = true;
            return;
        }
    },3000);
    fleeTime == true;
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
