// // Function that selects which event to execute based on button clicks from main menu // //
function selectEvent(event) {
    //Prevents two events running at the same time - time.event returns to true at the end of each event.
    if (time.selectevent == false) return;
    time.selectevent = false;

    //Increases menu.round by 1 and resets the player's health so they can fight.
    menu.round++;
    applyLevel();

    //Loading event visible on screen
    menu.status = 'Loading event...';
    updateView();

    //Checks what box was clicked and selects appropriate event
    if (event == 'Fight') {
        setTimeout(()=>{fightSequence(randomEncounter());time.selectevent=true;updateView();}, 3000);

    }
    else if (event == 'Explore') {
            updateView()
            setTimeout(()=>{exploreSequence();time.selectevent=true;updateView();}, 3000);
    }
    else if (event == 'Farm') {
            menu.status = 'Event is not finished, try again later.'
            menu.round--;
            updateView()
            setTimeout(()=>{menu.status='You are home.';updateView();time.selectevent=true;updateView();}, 3000);

    }
    else if (event == 'Study') {
            menu.status = 'Event is not finished, try again later.'
            menu.round--;
            updateView()
            setTimeout(()=>{menu.status='You are home.';updateView();time.selectevent=true;updateView();}, 3000);

    }
}

//Used as an argument when Fight event option is chosen from main menu - Sets random areas, and returns a monster based on random logic.
function randomEncounter() {
    //Set all monster health
    goblin.health = 40 + Math.ceil(Math.random()*21) + Math.floor(50 * monstergrowth.health);
    goblinGeneral.health = 80 + Math.ceil(Math.random()*41) + Math.floor(100 * monstergrowth.health);

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
        return goblinGeneral;
    }
    if (random == 10 && menu.round > 10) return goblinGeneral;
    else return goblin;

}
