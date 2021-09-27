// // Function that selects which event to execute based on button clicks from main menu // //
function selectEvent(event) {
    //Prevents two events running at the same time - time.event returns to true at the end of each event.
    if (time.selectevent == false) return;
    time.selectevent = false;

    //Increases menu.round by 1 and resets the player's health so they can fight.
    model.mainview.menu.round++;
    applyLevel();

    //Loading event visible on screen
    model.mainview.menu.status = 'Loading event...';
    view();

    //Checks what box was clicked and selects appropriate event
    if (event == 'Fight') {
        model.mainview.menu.status = 'Event is not finished, try again later.';
        model.mainview.menu.round--;
        view();
        setTimeout(() => { model.mainview.menu.status = 'You are home.'; view(); time.selectevent = true; view(); }, 3000);

    }
    else if (event == 'Explore') {
            view();
            setTimeout(()=>{exploreSequence();time.selectevent=true;view();}, 3000);
    }
    else if (event == 'Farm') {
            menu.round--;
            view();
            setTimeout(()=>{farmSequence();time.selectevent=true;view();}, 3000);

    }
    else if (event == 'Study') {
            menu.round--;
            view();
            setTimeout(()=>{studySequence();time.selectevent=true;view();}, 3000);

    }
}

//Used as an argument when Fight event option is chosen from main menu - Sets random areas, and returns a enemy based on random logic.
function randomEncounter() {
    //Set all enemy health
    bandit.health = 40 + Math.ceil(Math.random()*21) + Math.floor(50 * enemygrowth.health);
    banditLeader.health = 80 + Math.ceil(Math.random()*41) + Math.floor(100 * enemygrowth.health);

    //Pick areas you can find in Assess Area event option at random.
    model.randomObjects[0] = getRandomObject();
    model.randomObjects[1] = getRandomObject();
    model.randomObjects[2] = getRandomObject();

    //Pick enemy at random.
    random = Math.ceil(Math.random() * 10);

    if (menu.round == 10 + enemybuff.interval) {
        enemybuff.interval += 10;
        enemygrowth.health += 0.30;
        enemygrowth.ad += 0.30;
        enemygrowth.speed += 0.30;
        return banditLeader;
    }
    if (random == 10 && menu.round > 10) return banditLeader;
    else return bandit;

}
