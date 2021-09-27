function buystrengthPotion() {
    console.log(player.bag.strengthpotions);
    if (player.bag.gold >= 50 && player.bag.inventory > 0) {
        player.bag.gold -= 50;
        player.bag.inventory -= 1;
        player.bag.strengthpotions += 1;
        view();
    }
    else alert("Check if you have enough gold or inventory space.");

}

function buyHealthPotion() {
    console.log(player.bag.healthpotions);
    if (player.bag.gold >= 25 && player.bag.inventory > 0) {
        player.bag.gold -= 25;
        player.bag.inventory -= 1;
        player.bag.healthpotions += 1;
        view();
    }
    else alert("Check if you have enough gold or inventory space.");
}

// // Function that selects which event to execute based on button clicks from main menu // //
function selectEvent(event) {
    //Prevents two events running at the same time - time.event returns to true at the end of each event.
    if (time.selectevent == false) return;
    time.selectevent = false;

    //Increases menu.round by 1 and resets the player's health so they can fight.
    menu.round++;
    applyLevel();

    //Checks what box was clicked and selects appropriate event
    switch (event) {
        case 'Fight':
            model.app.currentView = `fightView`;
            updateDutyRoster();
            time.selectevent = true;
            view();
            break;

        case 'Explore':
            model.app.currentView = `exploreView`;
            time.selectevent = true;
            view();
            break;

        case 'Profession':
            menu.status = 'Event is not finished, try again later.';
            menu.round--;
            view();
            setTimeout(() => { menu.status = 'You are home.'; view(); time.selectevent = true; view(); }, 3000);
            break;

        case 'Study':
            menu.status = 'Event is not finished, try again later.';
            menu.round--;
            view();
            setTimeout(() => { menu.status = 'You are home.'; view(); time.selectevent = true; view(); }, 3000);
            break;

        default:
            menu.status = 'You should not be here. You most likely ran selectEvent() function with an invalid argument.';
            menu.round--;
            view();
            setTimeout(() => { menu.status = 'You are home.'; view(); time.selectevent = true; view(); }, 3000);
            break;
    }
}
