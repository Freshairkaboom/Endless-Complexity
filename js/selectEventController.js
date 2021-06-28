// // Function that selects which event to execute based on button clicks from main menu // //
function selectEvent(event) {
    //Prevents two events running at the same time - time.event returns to true at the end of each event.
    if (time.event == false) return;
    time.event = false;

    //Increases menu.round by 1 and resets the player's health so they can fight.
    menu.round++;
    applyLevel();

    //Loading event visible on screen
    menu.status = 'Loading event...';
    updateView();

    //Adds opacity to page
    style.opacity = "opacity";
    updateView();

    if (event == "Rest" && player.health < 50) {
        menu.status = 'You take a couple days off to rest, recovering from your wounds.';
        menu.round +=2;
        updateView();
        setTimeout(()=>{menu.status='You are home.';player.health = 100;updateView();time.event=true;style.opacity = "";}, 3000);
    }

    //Checks what box was clicked and selects appropriate event
    if (event == 'Fight') {
        setTimeout(()=>{fightSequence(randomEncounter());time.event=true;style.opacity = "";updateView();}, 3000);

    }
    else if (event == 'Explore') {
            menu.status = 'Event is not finished, try again later.'
            menu.round--;
            updateView()
            setTimeout(()=>{menu.status='You are home.';updateView();time.event=true;style.opacity = "";updateView();}, 3000);

    }
    else if (event == 'Farm') {
            menu.status = 'Event is not finished, try again later.'
            menu.round--;
            updateView()
            setTimeout(()=>{menu.status='You are home.';updateView();time.event=true;style.opacity = "";updateView();}, 3000);

    }
    else if (event == 'Study') {
            menu.status = 'Event is not finished, try again later.'
            menu.round--;
            updateView()
            setTimeout(()=>{menu.status='You are home.';updateView();time.event=true;style.opacity = "";updateView();}, 3000);

    }
}

//Used as an argument when Fight event option is chosen from main menu - Sets random areas, and returns a monster based on random logic.
function randomEncounter() {
    //Set all monster health
    goblin.health = 40 + Math.ceil(Math.random()*20) + Math.floor(goblin.health * monstergrowth.health);
    goblinBoss.health = 80 + Math.ceil(Math.random()*40) + Math.floor(goblinBoss.health * monstergrowth.health);

    //Pick areas you can find in Assess Area event option at random.
    model.randomObjects[0] = getRandomObject();
    model.randomObjects[1] = getRandomObject();
    model.randomObjects[2] = getRandomObject();

    //Pick monster at random.
    random = Math.ceil(Math.random() * 10);

    if (menu.round == 10 + monsterbuff.interval) {
        monsterbuff.interval += 10;
        monstergrowth.health += 0.30;
        monstergrowth.ad += 0.30;
        monstergrowth.speed += 0.30;
        return goblinBoss;
    }
    if (random == 10 && menu.round > 10) return goblinBoss;
    else return goblin;

}
