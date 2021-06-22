//Main menu function - Updates action buttons and prepares the board

function fightSequence(monster) {

    strikeTime = true;
    bagTime = true;
    assessTime = true;
    fleeTime = true;

    currentMonster = monster;

    status = "You encountered a " + monster.name + "!";

    firstAction = `<button class="actionButton fightSequence" onclick="strikeMonster(calculateDamage())">Strike</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="openBag()">Open bag</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="alert('This button does nothing (yet).')">Assess area</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="flee()">Flee</button>`;

    updateView();

}

// // Menu functions // //

function strikeMonster(damage) {

    if(eventLock() == "locked") return;

    status = 'You prepare to strike your foe...';
    updateView();

    setTimeout(()=>{
        weaponSpeed = addWeaponSpeed();

        if (player.speed + player.weapon.speed >= currentMonster.speed) {
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
            player.ad = 7;
            strikeTime = true;
            return;
        }
    },500);
    fleeTime = true;
    bagTime = true;
    assessTime = true;

}

function openBag() {

    if(eventLock() == "locked") return;

    status = 'You opened your satchel. What would you like to do?';

    firstAction = `<button class="actionButton fightSequence" onclick="restoreHealth()">Restore health</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="strengthPotion()">Strength Potion</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="switchWeapon()">Switch weapon</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="fightSequence(currentMonster)">Close bag</button>`;

    updateView();
}

function assessArea() {
    if(eventLock() == "locked") return;

}

// Called from fightSequence() function - Ends fightSequence function and resets values.
function flee() {

    if(eventLock() == "locked") {
        console.log('It was locked');
        return;
    }

    winOrLose = 'You fled from the battle and lost some gold.';
    updateView();
    player.bag.gold -= 5;
    if (player.bag.gold < 0) player.bag.gold = 0;
    setTimeout(()=>{
        reset();
        updateView();},3000);
    return;
}

// // Callback functions // //

function reward() {
    let loot = Math.ceil(Math.random()*30);

    if (currentMonster.name == "Goblin") {
        player.bag.gold += loot;
        winOrLose = 'You beat the ' + currentMonster.name + ' and got '+ loot + ' gp.';
        currentMonster = {name:'N/A',health:'N/A'};
        updateView();
        setTimeout(()=> {
            reset();
        },3000)
    }
    else if (currentMonster.name == "Goblin Boss") {
        player.bag.gold += loot*2;
        winOrLose = 'You beat the ' + currentMonster.name + ' and got '+ loot*2 + ' gp.';
        currentMonster = {name:'N/A',health:'N/A'};
        updateView();
        if (player.armory.slot1 != ironsword ||
            player.armory.slot2 != ironsword ||
            player.armory.slot3 != ironsword &&
            player.armory.slot1 == noweapon &&
            player.weapon != ironsword) {
            alert('You got an Iron Sword! Check your bag.');
            player.armory.slot1 = ironsword;
            console.log('It worked?')
        }
        updateView();
        setTimeout(()=> {
            reset();
        },3000)
    }
    else {
        setTimeout(()=> {
            reset();
        },3000)
    }
}

function death() {
    winOrLose = 'Oh dear, you have met your demise. Try again from the start.'
    updateView();
    player = {
        name: playerName,
        health: 0,
        ad: attackDamage, // Attack damage
        speed: 5,
        weapon: stick,
        //Inventory:
        bag: {
            inventory: 10,
            gold: 10,
            healthpotions: 0,
            strengthPotion: 0,
        }
    }
    updateView();
    setTimeout(()=> {
            reset();
        },3000)
}

 // Called from fightSequence() function - Returns total damage after accounting for weapon, player and powerup damage.
 function calculateDamage() {

    // weaponDamage = addWeaponDamage();

    damage = player.weapon.damage + player.ad;
    return damage;
}

//Called from fightSequence() function - Returns weapon speed after checking the equipped weapon.
function addWeaponSpeed() {
    //Default weapon
    if (player.weapon == "Stick") return 5; //Weapon speed is 5
    if (player.weapon == 'Iron Sword') return 8;
}

function restoreHealth() {
    if (player.bag.healthpotions > 0 && player.health <= 75) {
        status = 'You drink a healthpotion...';
        updateView();
        setTimeout(()=>{
            player.bag.healthpotions -= 1;
            player.bag.inventory += 1;
            player.health += 25;
            status = 'You restored 25 health. What else would you like to do?';
            updateView();
        },3000);
    }
    else if (player.bag.healthpotions < 1) {
        status = "You don't have any healthpotions.";
        updateView();
    }
    else {
        status = "You don't feel like you would gain enough benefit from drinking a health potion at this time.";
        updateView();
    }
}

function strengthPotion() {

    if (player.ad == attackDamage + 5) {
        status = 'You cannot gain any more benefit from drinking Strength Potions.';
        updateView();
        return;
    }

    if (player.bag.strengthPotion > 0) {
        status = 'You drink a Strength Potion...';
        updateView();
        player.ad = attackDamage;
        setTimeout(()=>{
            player.bag.strengthPotion -= 1;
            player.bag.inventory += 1;
            player.ad += 5;
            status = 'You became stronger. What else would you like to do?';
            updateView();
        },3000);
    }
    else {
        status = "You don't have any Strength Potions.";
        updateView();
    }
}

function switchWeapon() {
    status = 'You are currently wielding ' + player.weapon.name + '. Select the weapon you would like to wield.';

    firstAction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot1)">${player.armory.slot1.name}</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot2)">${player.armory.slot2.name}</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot3)">${player.armory.slot3.name}</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="openBag()">Return</button>`;

    strikeTime = true;
    bagTime = true;
    assessTime = true;
    fleeTime = true;

    updateView();
}

function equipWeapon(weapon, index) {
    console.log('Start good');
    if (weapon == noweapon) {
        console.log('No weapon');
        status = 'There is no weapon in this slot.';
        updateView();
    }
    else {
        console.log('Weapon eqipped');
        player.armory.slot1 = player.weapon;
        player.weapon = weapon;
        switchWeapon()
        updateView();
    }
}
