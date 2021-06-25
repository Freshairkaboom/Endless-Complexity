//Called from onclick event in "fight" box.
function selectEvent(event) {
    //Prevents two events running at the same time - eventTime returns to true at the end of each event.
    if (eventTime == false) return;
    eventTime = false;

    //Increases round by 1 and resets the player's health so they can fight.
    round++;
    player.health = 100;

    //Loading event visible on screen
    status = 'Loading event...';
    updateView();

    if (event == "Rest" && player.health < 50) {
        status = 'You take a couple days off to rest, recovering from your wounds.';
        round +=2;
        updateView();
        setTimeout(()=>{status='You are home.';player.health = 100;updateView();eventTime=true;}, 3000);
    }

    //Checks what box was clicked and selects appropriate event
    if (event == 'Fight') {
        setTimeout(()=>{fightSequence(randomEncounter());eventTime=true;}, 500);

    }
    else if (event == 'Explore') {
            status = 'Event is not finished, try again later.'
            round--;
            updateView()
            setTimeout(()=>{status='You are home.';updateView();eventTime=true;}, 3000);

    }
    else if (event == 'Farm') {
            status = 'Event is not finished, try again later.'
            round--;
            updateView()
            setTimeout(()=>{status='You are home.';updateView();eventTime=true;}, 3000);

    }
    else if (event == 'Study') {
            status = 'Event is not finished, try again later.'
            round--;
            updateView()
            setTimeout(()=>{status='You are home.';updateView();eventTime=true;}, 3000);

    }
}

//Called from selectEvent() function - Returns a monster based on random logic.
function randomEncounter() {
    //Set all monster health
    goblin.health = 30 + Math.ceil(Math.random()*30);
    goblinBoss.health = 60 + Math.ceil(Math.random()*60);

    //Pick objects at random
    randomObject[0] = getRandomObject();
    randomObject[1] = getRandomObject();
    randomObject[2] = getRandomObject();

    //Pick monster at random
    random = Math.ceil(Math.random() * 10);

    if (round == 10 || round == 20 || round == 30) return goblinBoss;
    if (random == 10 && round > 10) return goblinBoss;
    else return goblin;
}
