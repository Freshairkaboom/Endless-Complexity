// // Main menu function - Updates action buttons and prepares the board // //

function fightSequence(enemy) {

    time.fight = true;

    monster.current = enemy;

    menu.status = "You encountered a " + enemy.name + "!";

    button.firstaction = `<button class="actionButton fightSequence" onclick="strikeMonster(calculateDamage())">Strike</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="openBag()">Open bag</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="assessArea()">Assess area</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="flee()">Flee</button>`;

    updateView();

}

// // Action button functions // //

function strikeMonster(damage) {

    if(eventLock() == "locked") return;

    menu.status = 'You prepare to strike your foe...';
    updateView();

    setTimeout(()=>{
        if (player.speed + player.weapon.speed >= monster.current.speed) {
            monster.current.health -= damage;
            checkDead();
            if (monster.current.health < 0) monster.current.health = 0;

            if (pmvariables.cover > monster.current.ad) pmvariables.cover -= monster.current.ad;
            else if (pmvariables.cover <= monster.current.ad) {
                pmvariables.remainingcover = pmvariables.cover;
                pmvariables.cover = 0;
                player.health -= monster.current.ad - pmvariables.remainingcover;
                updateView();
            }


            checkDead();
            if (player.health < 0) player.health = 0;

        }
        else {
            if (pmvariables.cover > monster.current.ad) pmvariables.cover -= monster.current.ad;
            else if (pmvariables.cover <= monster.current.ad) {
                pmvariables.remainingcover = pmvariables.cover;
                pmvariables.cover = 0;
                player.health -= monster.current.ad - pmvariables.remainingcover;
                updateView();
            }
            if (player.health < 0) player.health = 0;

            monster.current.health -= damage;
            checkDead();
            if (monster.current.health < 0) monster.current.health = 0;
        }
        if (player.health > 0 && monster.current.health > 0) {
            if(player.health < 50 && monster.current.health > 50) {
                menu.status = "You don't see yourself winning a head on engagement any longer. Perhaps you should change strategy."
                updateView();
                time.fight = true;

            }
            else {
                if (pmvariables.cover > 0) {
                    menu.status = "You dealt " + damage + " damage to the " + monster.current.name + ", and the "
                    + monster.current.name + " dealt " + monster.current.ad + " damage to your cover.";
                    updateView();
                    time.fight = true;
                }

                else if (pmvariables.remainingcover > 0) {
                    menu.status = "You dealt " + damage + " damage to the " + monster.current.name + ", and the "
                    + monster.current.name + " dealt " + monster.current.ad + " damage to your cover and destroyed it!";
                    updateView();
                    time.fight = true;
                }

                else {
                    menu.status = "You dealt " + damage + " damage to the " + monster.current.name + ", and the "
                    + monster.current.name + " dealt " + monster.current.ad + " damage to you.";
                    updateView();
                    time.fight = true;
                }


            }

        }
        else if (player.health == 0) {
            player.health = 100;
            player.ad = 7;
            time.fight = true;
            return;
        }
    },500);

}

function openBag() {

    if(eventLock() == "locked") return;

    menu.status = 'You opened your satchel. What would you like to do?';

    button.firstaction = `<button class="actionButton fightSequence" onclick="restoreHealth()">Restore health</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="strengthPotion()">Strength Potion</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="switchWeapon()">Switch weapon</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="fightSequence(monster.current)">Close bag</button>`;

    updateView();
}

function assessArea() {
    if(eventLock() == "locked") return;

    menu.status = 'You look around for something usable.';

    button.firstaction = `<button class="actionButton fightSequence" onclick="useObject(model.randomObjects[0])">${model.randomObjects[0].name}</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="useObject(model.randomObjects[1])">${model.randomObjects[1].name}</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="useObject(model.randomObjects[2])">${model.randomObjects[2].name}</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="fightSequence(monster.current)">Return to fight</button>`;

    updateView();

}

function flee() {

    if(eventLock() == "locked") {
        return;
    }

    menu.winorlose = 'You fled from the battle and lost some gold.';
    updateView();
    player.bag.gold -= 5;
    if (player.bag.gold < 0) player.bag.gold = 0;
    setTimeout(()=>{
        reset();
        updateView();},3000);
    return;
}

// // Functions used by the Fight event option // //

function calculateDamage() {

    pmvariables.damage = player.weapon.damage + player.ad;
    return pmvariables.damage;
}

function reward() {
    let loot = Math.ceil(Math.random()*30);

    if (monster.current.name == "Goblin") {
        pmvariables.experiencepoints += 5;
        player.bag.gold += loot;
        menu.winorlose = 'You beat the ' + monster.current.name + ' and get '+ loot + ' gp.';
        monster.current = {name:'N/A',health:'N/A'};
        updateView();
        setTimeout(()=>{
            if (pmvariables.experiencepoints >= getExpReq()) {
                levelUp();
                menu.status = 'You levelled up!';
                updateView();
            }
            setTimeout(()=> {
                reset();
            },3000)
        },500)

    }
    else if (monster.current.name == "Goblin Boss") {
        pmvariables.experiencepoints += 10;
        player.bag.gold += loot*2;
        menu.winorlose = 'You beat the ' + monster.current.name + ' and got '+ loot*2 + ' gp.';
        monster.current = {name:'N/A',health:'N/A'};
        updateView();

        if (player.armory.slot1 == noweapon && player.weapon != ironsword && Math.ceil(Math.random()*5 == 5)) {
            alert('You got an Iron Sword! Check your bag.');
            player.armory.slot1 = ironsword;
        }
        updateView();
        setTimeout(()=>{
            if (pmvariables.experiencepoints >= getExpReq()) {
                levelUp();
                menu.status = 'You levelled up!';
                updateView();
            }
            setTimeout(()=> {
                reset();
            },3000)
        },500)
    }
    else {
        setTimeout(()=> {
            reset();
        },3000)
    }
}

function death() {
    menu.winorlose = 'Oh dear, you have met your demise. Try again from the start.'
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
        pmvariables.level = 1;
        pmvariables.experiencepoints = 0;
        levelfactor.health = 0;
        levelfactor.ad = 0;
        levelfactor.speed = 0;
        menu.round = 0;
        reset();
        },3000)
}

// // Functions used by the Open Bag event option // //

function restoreHealth() {
    if (time.health == false) return;
    time.health = false;
    if (player.bag.healthpotions > 0 && player.health <= 75 + Math.floor(player.health * levelfactor.health)) {
        menu.status = 'You drink a healthpotion...';
        player.health += 25;
        updateView();
        setTimeout(()=>{
            player.bag.healthpotions -= 1;
            player.bag.inventory += 1;
            menu.status = 'You restored 25 health. What else would you like to do?';
            updateView();
        },3000);
    }
    else if (player.bag.healthpotions < 1) {
        menu.status = "You don't have any healthpotions.";
        updateView();
    }
    else {
        menu.status = "You don't feel like you would gain enough benefit from drinking a health potion at this time.";
        updateView();
    }
    time.health = true;
}

function strengthPotion() {

    if (time.strength == false) {
        menu.status = 'You cannot gain any more benefit from drinking strength potions.';
        updateView();
        return;
    }

    time.strength = false;

    if (player.bag.strengthpotions > 0) {
        menu.status = 'You drink a strength potion...';
        player.ad += 5;
        updateView();
        setTimeout(()=>{
            if (player.bag.strengthpotions < 1) return;
            player.bag.strengthpotions -= 1;
            player.bag.inventory += 1;
            menu.status = 'You became stronger. What else would you like to do?';
            updateView();
        },3000);
    }
    if (player.bag.strengthpotions <= 0) {
        time.strength = true;
        menu.status = "You don't have any strength potions.";
        updateView();
    }

}

function switchWeapon() {
    menu.status = 'You are currently wielding ' + player.weapon.name + '. Select the weapon you would like to wield.';

    button.firstaction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot1)">${player.armory.slot1.name}</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot2)">${player.armory.slot2.name}</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot3)">${player.armory.slot3.name}</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="openBag()">Return</button>`;

    time.fight = true;

    updateView();
}

function equipWeapon(weapon) {
    if (weapon == noweapon) {
        menu.status = 'There is no weapon in this slot.';
        updateView();
    }
    else {
        player.armory.slot1 = player.weapon;
        player.weapon = weapon;
        switchWeapon()
        updateView();
    }
}

// // Functions used by the Assess Area event option // //

function getRandomObject() {
    //Makes sure only one object is not objectnull, giving priority to the first and second.
    for (i = 0; i<model.randomObjects.length; i++) {
        if (model.randomObjects[i] != objectnull) return objectnull;
    }

    random = Math.ceil(Math.random()*5);
    if (random <= 3) return objectnull;
    if (random == 4) return campsite;
    if (random == 5) return objectnull; //Temporarily disabled hut
}

function useObject(object) {
    if (time.use == false) return;
    time.use = false;

    if (object == objectnull) return;
    if (object == campsite) campsiteEvent();
    if (object == hut) return;
}

function campsiteEvent() {
    random = Math.ceil(Math.random()*3);

    if (random == 1) menu.status = 'You escape towards a nearby campsite. Can you use something here?';

    if (random == 2) menu.status = 'You spot a campsite nearby. You wonder if there is something useful here.';

    if (random == 3) menu.status = 'You see a campsite in a clearing to the right. What do you want to do?';

    //---------------------------------------------------------------------------------------------------------//

    button.firstaction = `<button class="actionButton fightSequence" onclick="seekCover(campsite)">Seek cover</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="seekTreasure(campsite)">Scout for treasure</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="checkTraps(campsite)">Check for traps</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="fightSequence(monster.current)">Return to fight</button>`;

    updateView();

    time.fight = true;

}

function seekCover(object) {

    if (time.seek == false) return;
    time.seek = false;

    menu.status = 'You find cover behind some crates in the ' + object.name + '.';
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
            menu.status = 'You step on a beartrap and lose 10 health!'
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},2000)
            updateView();
        },3000);
    }

    else if (object.cover < 20) {
        setTimeout(()=>{
            menu.status = 'The crates fall apart as you lean on them, apparently they are rotten to the core. You are left without any cover.'
            updateView();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},2000)
        },3000);
    }

    else {
        setTimeout(()=>{
            menu.status = 'The crates provide solid cover for a counterattack.'
            pmvariables.cover = object.cover;
            updateView();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},2000)
        },3000);
    }
}

function seekTreasure(object) {
    if (time.seek == false) return;
    time.seek = false;

    menu.status = 'You go looking for something valuable in the nearby ' + object.name + '.';
    updateView();

    object = {
        name: object.name,
        traps: Math.floor(Math.random()*2),
        treasure: Math.floor(Math.random()*5),
    }

    if (traps.trapsornot == false) object.traps = 0;

    if (object.treasure > 1 && object.traps > 0) {
        setTimeout(()=>{
            player.health -= 15;
            checkDead();
            menu.status = 'You find some treasure, but there is a trap on it! You lose some health.'
            updateView();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},3000)
        },3000);
    }
    else if (object.treasure > 1 && object.traps == 0) {
        setTimeout(()=>{
                addTreasure();
                setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},3000)
        },3000);
    }

    else {
        setTimeout(()=>{
            menu.status = 'You did not find any treasure...';
            updateView();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},3000);
        },3000)
    }
}

function checkTraps(object) {

    if (time.check == false) return;
    time.check = false;

    if (time.seek == false) return;
    time.seek = false;

    menu.status = 'You check the ' + object.name + ' for traps.';
    updateView();

    object = {
        traps: Math.ceil(Math.random()*10),
    }

    if (object.traps > 1 && Math.ceil(Math.random()*100) > 30) {
        setTimeout(()=>{
            menu.status = 'You disable all traps!'
            updateView();
            traps.trapsornot = false;
            time.seek = true;
        },3000);
    }

    else if (object.traps < 3) {
        setTimeout(()=>{
            menu.status = 'You fail to spot and disable any traps.';
            updateView();
            traps.trapsornot = false;
            time.seek = true;
        },3000);
    }
    else {
        setTimeout(()=>{
            menu.status = 'You trigger a trap and lose some health!';
            player.health -= 15;
            checkDead();
            updateView();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(monster.current);},3000);
        },3000);
    }
}

function addTreasure() {
    random = Math.ceil(Math.random()*10);

    if (random == 10 && player.armory.slot1 != ironsword && player.weapon != ironsword) {
        player.armory.slot1 = ironsword;
        menu.status = 'You find an iron sword! Congratulations!';
        updateView();
    }

    if (10 > random > 8) {
        player.bag.healthpotions++;
        menu.status = 'You find a health potion!';
        updateView();
    }
    if (9 > random > 7) {
        player.bag.strengthpotions++;
        menu.status = 'You find a strength potion!';
        updateView();
    }

    else {
        player.bag.gold += Math.ceil(Math.random()*100);
        menu.status = 'You find some gold!';
        updateView();
    }
}

// // Functions used to check if player/monster is dead, or is afflicted by other effects // //
function checkDead() {
    if (player.health < 1) {
        style.opacity = "opacity";
        updateView();
        death();
        return;
    }

    if (monster.current.health < 1) {
        style.opacity = "opacity";
        updateView();
        reward();
        return;
    }

}

// // Functions used to reset or lock events in fightSequence function // //
function reset() {
    style.opacity = "";

    menu.status = 'You are home.';
    menu.winorlose = '';

    time.event = true;
    time.strength = true;
    time.use = true;
    time.check = true;

    button.firstaction = `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`;
    button.secondaction = `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`;
    button.thirdaction = `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`;
    button.fourthaction = `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`;

    applyLevel();

    pmvariables.cover = 0;

    monster.current = {name:'N/A',health:'N/A'};
    updateView();
}

function eventLock() {
    if (time.fight == false) return "locked";
    time.fight = false;
}
