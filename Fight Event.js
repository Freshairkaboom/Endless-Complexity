//Main menu function - Updates action buttons and prepares the board

function fightSequence(monster) {

    fightTime = true;

    currentMonster = monster;

    status = "You encountered a " + monster.name + "!";

    firstAction = `<button class="actionButton fightSequence" onclick="strikeMonster(calculateDamage())">Strike</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="openBag()">Open bag</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="assessArea()">Assess area</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="flee()">Flee</button>`;

    updateView();

}

// // Onclick functions // //

function strikeMonster(damage) {

    if(eventLock() == "locked") return;

    status = 'You prepare to strike your foe...';
    updateView();

    setTimeout(()=>{
        if (player.speed + player.weapon.speed >= currentMonster.speed) {
            currentMonster.health -= damage;
            checkDead();
            if (currentMonster.health < 0) currentMonster.health = 0;

            if (cover > currentMonster.ad) cover -= currentMonster.ad;
            else if (cover <= currentMonster.ad) {
                remainingCover = cover;
                cover = 0;
                player.health -= currentMonster.ad - remainingCover;
                updateView();
            }


            checkDead();
            if (player.health < 0) player.health = 0;

        }
        else {
            if (cover > currentMonster.ad) cover -= currentMonster.ad;
            else if (cover <= currentMonster.ad) {
                remainingCover = cover;
                cover = 0;
                console.log(currentMonster.ad - remainingCover)
                player.health -= currentMonster.ad - remainingCover;
                updateView();
            }
            if (player.health < 0) player.health = 0;

            currentMonster.health -= damage;
            checkDead();
            if (currentMonster.health < 0) currentMonster.health = 0;
        }
        if (player.health > 0 && currentMonster.health > 0) {
            if(player.health < 50 && currentMonster.health > 50) {
                status = "You don't see yourself winning a head on engagement any longer. Perhaps you should change strategy."
                updateView();
                fightTime = true;

            }
            else {
                if (cover > 0) {
                    status = "You dealt " + damage + " damage to the " + currentMonster.name + ", and the "
                    + currentMonster.name + " dealt " + currentMonster.ad + " damage to your cover.";
                    updateView();
                    fightTime = true;
                }

                else if (remainingCover > 0) {
                    status = "You dealt " + damage + " damage to the " + currentMonster.name + ", and the "
                    + currentMonster.name + " dealt " + currentMonster.ad + " damage to your cover and destroyed it!";
                    updateView();
                    fightTime = true;
                }

                else {
                    status = "You dealt " + damage + " damage to the " + currentMonster.name + ", and the "
                    + currentMonster.name + " dealt " + currentMonster.ad + " damage to you.";
                    updateView();
                    fightTime = true;
                }


            }

        }
        else if (player.health == 0) {
            player.health = 100;
            player.ad = 7;
            fightTime = true;
            return;
        }
    },500);

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

    status = 'You look around for something usable.';

    firstAction = `<button class="actionButton fightSequence" onclick="useObject(randomObject[0])">${randomObject[0].name}</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="useObject(randomObject[1])">${randomObject[1].name}</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="useObject(randomObject[2])">${randomObject[2].name}</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="fightSequence(currentMonster)">Return to fight</button>`;

    updateView();

}

function flee() {

    if(eventLock() == "locked") {
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

//Fight functions start here

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
        if (player.armory.slot1 == noweapon && player.weapon != ironsword && Math.ceil(Math.random()*5 == 5)) {
            alert('You got an Iron Sword! Check your bag.');
            player.armory.slot1 = ironsword;
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
        name: 'Bob',
        health: 0,
        ad: 7, // Attack damage
        speed: 5,
        weapon: stick,
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
    updateView();
    setTimeout(()=> {
            reset();
            round = 0;
        },3000)
}

 //Returns total damage after accounting for weapon, player and powerup damage.
 function calculateDamage() {

    damage = player.weapon.damage + player.ad;
    return damage;
}

//Open Bag functions start here

function restoreHealth() {
    if (healthTime == false) return;
    healthTime = false;
    if (player.bag.healthpotions > 0 && player.health <= 75) {
        status = 'You drink a healthpotion...';
        player.health += 25;
        updateView();
        setTimeout(()=>{
            player.bag.healthpotions -= 1;
            player.bag.inventory += 1;
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
    healthTime = true;
}

function strengthPotion() {

    if (strengthTime == false) {
        status = 'You cannot gain any more benefit from drinking strength potions.';
        updateView();
        return;
    }

    strengthTime = false;

    if (player.bag.strengthpotions > 0) {
        status = 'You drink a strength potion...';
        player.ad = attackDamage;
        player.ad += 5;
        updateView();
        setTimeout(()=>{
            if (player.bag.strengthpotions < 1) return;
            player.bag.strengthpotions -= 1;
            player.bag.inventory += 1;
            status = 'You became stronger. What else would you like to do?';
            updateView();
        },3000);
    }
    else {
        status = "You don't have any strength potions.";
        updateView();
    }

}

function switchWeapon() {
    status = 'You are currently wielding ' + player.weapon.name + '. Select the weapon you would like to wield.';

    firstAction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot1)">${player.armory.slot1.name}</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot2)">${player.armory.slot2.name}</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot3)">${player.armory.slot3.name}</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="openBag()">Return</button>`;

    fightTime = true;

    updateView();
}

function equipWeapon(weapon) {
    if (weapon == noweapon) {
        status = 'There is no weapon in this slot.';
        updateView();
    }
    else {
        player.armory.slot1 = player.weapon;
        player.weapon = weapon;
        switchWeapon()
        updateView();
    }
}

//Assess area functions start here

function getRandomObject() {
    //Makes sure only one object is not objectnull, giving priority to the first and second.
    for (i = 0; i<randomObject.length; i++) {
        if (randomObject[i] != objectnull) return objectnull;
    }

    random = Math.ceil(Math.random()*5);
    if (random <= 3) return objectnull;
    if (random == 4) return campsite;
    if (random == 5) return objectnull; //Temporarily disabled hut
}

function useObject(object) {
    if (useTime == false) return;
    useTime = false;

    if (object == objectnull) return;
    if (object == campsite) campsiteEvent();
    if (object == hut) return;

    object = objectnull;
}

function campsiteEvent() {
    random = Math.ceil(Math.random()*3);

    if (random == 1) status = 'You escape towards a nearby campsite. Can you use something here?';

    if (random == 2) status = 'You spot a campsite nearby. You wonder if there is something useful here.';

    if (random == 3) status = 'You see a campsite in a clearing to the right. What do you want to do?';

    //---------------------------------------------------------------------------------------------------------

    firstAction = `<button class="actionButton fightSequence" onclick="seekCover(campsite)">Use campsite for cover</button>`;

    secondAction = `<button class="actionButton fightSequence" onclick="seekTreasure(campsite)">Scout for treasure</button>`;

    thirdAction = `<button class="actionButton fightSequence" onclick="checkTraps(campsite)">Check for traps</button>`;

    fourthAction = `<button class="actionButton fightSequence" onclick="fightSequence(currentMonster)">Return to fight</button>`;

    updateView();

    fightTime = true;

}

function seekCover(object) {

    if (seekTime == false) return;
    seekTime = false;

    status = 'You find cover behind some crates in the ' + object.name + '.';
    updateView();

    object = {
        name: object.name,
        traps: Math.floor(Math.random()*3),
        cover: 10 + Math.floor(Math.random()*50),
    }

    if (object.traps > 1) {
        setTimeout(()=>{
            player.health -= 10;
            checkDead();
            status = 'You step on a beartrap and lose 10 health!'
            setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},2000)
            updateView();
        },3000);
    }

    else if (object.cover < 20) {
        setTimeout(()=>{
            status = 'The crates fall apart as you lean on them, apparently they are rotten to the core. You are left without any cover.'
            updateView();
            setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},2000)
        },3000);
    }

    else {
        setTimeout(()=>{
            status = 'The crates provide solid cover for a counterattack.'
            cover = object.cover;
            updateView();
            setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},2000)
        },3000);
    }
}

function seekTreasure(object) {
    if (seekTime == false) return;
    seekTime = false;

    status = 'You go looking for something valuable in the nearby ' + object.name + '.';
    updateView();

    object = {
        name: object.name,
        traps: Math.floor(Math.random()*2),
        treasure: Math.floor(Math.random()*5),
    }

    if (trapsOrNot == false) object.traps = 0;

    if (object.treasure > 3 && object.traps > 0) {
        setTimeout(()=>{
            player.health -= 15;
            checkDead();
            status = 'You find some treasure, but there is a trap on it! You lose some health.'
            updateView();
            setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},3000)
        },3000);
    }
    else if (object.treasure > 3 && object.traps == 0) {
        setTimeout(()=>{
                addTreasure();
                setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},3000)
        },3000);
    }

    else {
        setTimeout(()=>{
            status = 'You did not find any treasure...';
            updateView();
            setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},3000);
        },3000)
    }
}

function addTreasure() {
    random = Math.ceil(Math.random()*10);

    if (random == 10 && player.armory.slot1 != ironsword && player.weapon != ironsword) {
        player.armory.slot1 = ironsword;
        status = 'You find an iron sword! Congratulations!';
        updateView();
    }

    if (10 > random > 8) {
        player.bag.healthpotions++;
        status = 'You find a health potion!';
        updateView();
    }
    if (9 > random > 7) {
        player.bag.strengthpotions++;
        status = 'You find a strength potion!';
        updateView();
    }

    else {
        player.bag.gold += Math.ceil(Math.random()*100);
        status = 'You find some gold!';
        updateView();
    }
}

function checkTraps(object) {

    if (checkTime == false) return;
    checkTime = false;

    if (seekTime == false) return;
    seekTime = false;

    status = 'You check the ' + object.name + ' for traps.';
    updateView();

    object = {
        traps: Math.floor(Math.random()*2),
    }

    if (object.traps > 0 && Math.ceil(Math.random()*100) >= 60) {
        setTimeout(()=>{
            status = 'You disable all traps!'
            updateView();
            trapsOrNot = false;
            seekTime = true;
        },3000);
    }

    else if (object.traps > 0 && Math.ceil(20 < Math.random()*100) < 60) {
        setTimeout(()=>{
            status = 'You fail to spot and disable any traps.';
            updateView();
            trapsOrNot = false;
            seekTime = true;
        },3000);
    }
    else {
        setTimeout(()=>{
            status = 'You trigger a trap and lose some health!';
            player.health -= 15;
            checkDead();
            updateView();
            setTimeout(()=>{seekTime = true;checkTime=true;fightSequence(currentMonster);},3000);
        },3000);
    }
}

// Reset function for when events in fightSequence() are over.
function reset() {
    status = 'You are home.';
    winOrLose = '';
    eventTime = true;
    strengthTime = true;
    useTime = true;
    checkTime = true;

    firstAction = `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`;
    secondAction = `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`;
    thirdAction = `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`;
    fourthAction = `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`;

    player.health = 100;
    player.ad = 7;
    currentMonster = {name:'N/A',health:'N/A'};
    cover = 0;
    updateView();
}

function eventLock() {
    if (fightTime == false) return "locked";
    fightTime = false;
}

function checkDead() {
    if (player.health < 1) {
        death();
        return;
    }

    if (currentMonster.health < 1) {
        reward();
        return;
    }

}
