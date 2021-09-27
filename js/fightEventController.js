// // Main menu function - Updates action buttons and prepares the board // //

function fightSequence(encounter) {

    time.event = true;

    enemy.current = encounter;

    menu.status = "You encountered a " + enemy.current.name + "!";

    button.firstaction = `<button class="actionButton fightSequence" onclick="strikeenemy(calculateDamage())">Strike</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="openBag()">Open bag</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="assessArea()">Assess area</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="flee()">Flee</button>`;

    view();

}

// // Action button functions // //

function strikeenemy(damage) {

    if(eventLock() == "locked") return;

    menu.status = 'You prepare to strike your foe...';
    view();

    setTimeout(()=>{
        if (player.speed + player.weapon.speed >= enemy.current.speed) {
            enemy.current.health -= damage;
            checkDead();
            if (enemy.current.health < 0) enemy.current.health = 0;

            if (pmvariables.cover > enemy.current.ad) pmvariables.cover -= enemy.current.ad;
            else if (pmvariables.cover <= enemy.current.ad) {
                pmvariables.remainingcover = pmvariables.cover;
                pmvariables.cover = 0;
                player.health -= enemy.current.ad - pmvariables.remainingcover;
                view();
            }


            checkDead();
            if (player.health < 0) player.health = 0;

        }
        else {
            if (pmvariables.cover > enemy.current.ad) pmvariables.cover -= enemy.current.ad;
            else if (pmvariables.cover <= enemy.current.ad) {
                pmvariables.remainingcover = pmvariables.cover;
                pmvariables.cover = 0;
                player.health -= enemy.current.ad - pmvariables.remainingcover;
                view();
            }
            if (player.health < 0) player.health = 0;

            enemy.current.health -= damage;
            checkDead();
            if (enemy.current.health < 0) enemy.current.health = 0;
        }
        if (player.health > 0 && enemy.current.health > 0) {
            if(player.health < 50 && enemy.current.health > 50) {
                menu.status = "You don't see yourself winning a head on engagement any longer. Perhaps you should change strategy."
                view();
                time.event = true;

            }
            else {
                if (pmvariables.cover > 0) {
                    menu.status = "You dealt " + damage + " damage to the " + enemy.current.name + ", and the "
                    + enemy.current.name + " dealt " + enemy.current.ad + " damage to your cover.";
                    view();
                    time.event = true;
                }

                else if (pmvariables.remainingcover > 0) {
                    menu.status = "You dealt " + damage + " damage to the " + enemy.current.name + ", and the "
                    + enemy.current.name + " dealt " + enemy.current.ad + " damage to your cover and destroyed it!";
                    view();
                    time.event = true;
                }

                else {
                    menu.status = "You dealt " + damage + " damage to the " + enemy.current.name + ", and the "
                    + enemy.current.name + " dealt " + enemy.current.ad + " damage to you.";
                    view();
                    time.event = true;
                }


            }

        }
        else if (player.health == 0) {
            player.health = 100;
            player.ad = 7;
            time.event = true;
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

    button.fourthaction = `<button class="actionButton fightSequence" onclick="fightSequence(enemy.current)">Close bag</button>`;

    view();
}

function assessArea() {
    if(eventLock() == "locked") return;

    menu.status = 'You look around for something usable.';

    button.firstaction = `<button class="actionButton fightSequence" onclick="useObject(model.randomObjects[0])">${model.randomObjects[0].name}</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="useObject(model.randomObjects[1])">${model.randomObjects[1].name}</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="useObject(model.randomObjects[2])">${model.randomObjects[2].name}</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="fightSequence(enemy.current)">Return to event</button>`;

    view();

}

function flee() {

    if(eventLock() == "locked") {
        return;
    }

    menu.winorlose = 'You fled from the battle and lost some gold.';
    view();
    player.bag.gold -= player.bag.gold * 0.25;
    if (player.bag.gold < 0) player.bag.gold = 0;
    setTimeout(()=>{
        reset();
        view();},3000);
    return;
}

// // Functions used by the Fight event option // //

function calculateDamage() {

    pmvariables.damage = player.weapon.damage + player.ad;
    return pmvariables.damage;
}

function reward() {
    let loot = 10 + Math.floor(Math.random()*21);

    if (enemy.current.name == "Bandit") {
        pmvariables.experiencepoints += 5;
        player.bag.gold += loot;
        menu.winorlose = 'You beat the ' + enemy.current.name + ' and get '+ loot + ' gp.';
        enemy.current = {name:'',health:''};
        view();
        setTimeout(()=>{
            if (pmvariables.experiencepoints >= getExpReq()) {
                levelUp();
                menu.status = 'You levelled up!';
                view();
            }
            setTimeout(()=> {
                reset();
            },3000)
        },500)

    }
    else if (enemy.current.name == "Bandit Leader") {
        pmvariables.experiencepoints += 10;
        player.bag.gold += loot*10;
        menu.winorlose = 'You beat the ' + enemy.current.name + ' and got '+ loot*10 + ' gp.';
        enemy.current = {name:'',health:''};
        view();

        if (player.armory.slot1 == noweapon && player.weapon != ironsword && Math.ceil(Math.random()*5) == 5) {
            menu.status =  'You beat the ' + enemy.current.name + ' and got '+ loot*10 + ' gp and an iron sword!';
            player.armory.slot1 = ironsword;
        }
        view();
        setTimeout(()=>{
            if (pmvariables.experiencepoints >= getExpReq()) {
                levelUp();
                menu.status = 'You levelled up!';
                view();
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

// // Functions used by the Open Bag event option // //

function restoreHealth() {
    if (time.health == false) return;
    time.health = false;
    if (player.bag.healthpotions > 0 && player.health <= 75 + Math.floor(player.health * levelfactor.health)) {
        menu.status = 'You drink a healthpotion...';
        player.health += 25;
        view();
        setTimeout(()=>{
            player.bag.healthpotions -= 1;
            player.bag.inventory += 1;
            time.health = true;
            if (player.bag.healthpotions < 1) player.bag.healthpotions = 0;
            menu.status = 'You restored 25 health. What else would you like to do?';
            view();
        },1000);
    }
    else if (player.bag.healthpotions < 1) {
        menu.status = "You don't have any healthpotions.";
        player.bag.healthpotions = 0;
        time.health = true;
        view();
    }
    else {
        menu.status = "You don't feel like you would gain enough benefit from drinking a health potion at this time.";
        time.health = true;
        view();
    }
}

function strengthPotion() {

    if (time.strength == false) {
        menu.status = 'You cannot gain any more benefit from drinking strength potions.';
        view();
        return;
    }

    time.strength = false;

    if (player.bag.strengthpotions > 0) {
        menu.status = 'You drink a strength potion...';
        player.ad += 5;
        view();
        setTimeout(()=>{
            if (player.bag.strengthpotions < 1) return;
            player.bag.strengthpotions -= 1;
            player.bag.inventory += 1;
            menu.status = 'You became stronger. What else would you like to do?';
            view();
        },3000);
    }
    if (player.bag.strengthpotions <= 0) {
        time.strength = true;
        menu.status = "You don't have any strength potions.";
        view();
    }

}

function switchWeapon() {
    menu.status = 'You are currently wielding ' + player.weapon.name + '. Select the weapon you would like to wield.';

    button.firstaction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot1)">${player.armory.slot1.name}</button>`;

    button.secondaction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot2)">${player.armory.slot2.name}</button>`;

    button.thirdaction = `<button class="actionButton fightSequence" onclick="equipWeapon(player.armory.slot3)">${player.armory.slot3.name}</button>`;

    button.fourthaction = `<button class="actionButton fightSequence" onclick="openBag()">Return</button>`;

    time.event = true;

    view();
}

function equipWeapon(weapon) {
    if (weapon == noweapon) {
        menu.status = 'There is no weapon in this slot.';
        view();
    }
    else {
        player.armory.slot1 = player.weapon;
        player.weapon = weapon;
        switchWeapon()
        view();
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

    button.fourthaction = `<button class="actionButton fightSequence" onclick="fightSequence(enemy.current)">Return to event</button>`;

    view();

    time.event = true;

}

function seekCover(object) {

    if (time.seek == false) return;
    time.seek = false;

    menu.status = 'You find cover behind some crates in the ' + object.name + '.';
    view();

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
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},2000)
            view();
        },3000);
    }

    else if (object.cover < 20) {
        setTimeout(()=>{
            menu.status = 'The crates fall apart as you lean on them, apparently they are rotten to the core. You are left without any cover.'
            view();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},2000)
        },3000);
    }

    else {
        setTimeout(()=>{
            menu.status = 'The crates provide solid cover for a counterattack.'
            pmvariables.cover = object.cover;
            view();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},2000)
        },3000);
    }
}

function seekTreasure(object) {
    if (time.seek == false) return;
    time.seek = false;

    menu.status = 'You go looking for something valuable in the nearby ' + object.name + '.';
    view();

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
            view();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},3000)
        },3000);
    }
    else if (object.treasure > 1 && object.traps == 0) {
        setTimeout(()=>{
                addTreasure();
                setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},3000)
        },3000);
    }

    else {
        setTimeout(()=>{
            menu.status = 'You did not find any treasure...';
            view();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},3000);
        },3000)
    }
}

function checkTraps(object) {

    if (time.check == false) return;
    time.check = false;

    if (time.seek == false) return;
    time.seek = false;

    menu.status = 'You check the ' + object.name + ' for traps.';
    view();

    object = {
        traps: Math.ceil(Math.random()*10),
    }

    if (object.traps > 1 && Math.ceil(Math.random()*100) > 30) {
        setTimeout(()=>{
            menu.status = 'You disable all traps!'
            view();
            traps.trapsornot = false;
            time.seek = true;
        },3000);
    }

    else if (object.traps < 3) {
        setTimeout(()=>{
            menu.status = 'You fail to spot and disable any traps.';
            view();
            traps.trapsornot = false;
            time.seek = true;
        },3000);
    }
    else {
        setTimeout(()=>{
            menu.status = 'You trigger a trap and lose some health!';
            player.health -= 15;
            checkDead();
            view();
            setTimeout(()=>{time.seek = true;time.check=true;fightSequence(enemy.current);},3000);
        },3000);
    }
}

function addTreasure() {
    random = Math.ceil(Math.random()*10);

    if (random == 10 && player.armory.slot1 != ironsword && player.weapon != ironsword) {
        player.armory.slot1 = ironsword;
        menu.status = 'You find an iron sword! Congratulations!';
        view();
    }

    if (10 > random > 8) {
        player.bag.healthpotions++;
        menu.status = 'You find a health potion!';
        view();
    }
    if (9 > random > 7) {
        player.bag.strengthpotions++;
        menu.status = 'You find a strength potion!';
        view();
    }

    else {
        player.bag.gold += Math.ceil(Math.random()*100);
        menu.status = 'You find some gold!';
        view();
    }
}

// // Functions used to check if player/enemy is dead, or is afflicted by other effects // //
function checkDead() {
    if (player.health < 1) {
        view();
        death();
        return;
    }

    if (enemy.current.health < 1) {
        view();
        reward();
        return;
    }

}

// // Functions used to reset or lock events in fightSequence function // //
function reset() {

    menu.status = 'You are home.';
    menu.winorlose = '';

    time.event = true;
    time.explore = true;
    time.strength = true;
    time.use = true;
    time.check = true;

    button.firstaction = `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`;
    button.secondaction = `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`;
    button.thirdaction = `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`;
    button.fourthaction = `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`;

    applyLevel();

    pmvariables.cover = 0;

    enemy.current = {name:'',health:''};
    view();
}
