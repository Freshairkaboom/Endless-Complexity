function buystrengthPotion() {
    console.log(player.bag.strengthpotions);
    if (model.mainview.player.bag.gold >= 50 && model.mainview.player.bag.inventory > 0) {
        model.mainview.player.bag.gold -= 50;
        model.mainview.player.bag.inventory -= 1;
        model.mainview.player.bag.strengthpotions += 1;
        view();
    }
    else alert("Check if you have enough gold or inventory space.");

}

function buyHealthPotion() {
    console.log(player.bag.healthpotions);
    if (model.mainview.player.bag.gold >= 25 && model.mainview.player.bag.inventory > 0) {
        model.mainview.player.bag.gold -= 25;
        model.mainview.player.bag.inventory -= 1;
        model.mainview.player.bag.healthpotions += 1;
        view();
    }
    else alert("Check if you have enough gold or inventory space.");
}

// // Function that selects which event to execute based on button clicks from main menu // //
function selectEvent(event) {
    //Prevents two events running at the same time - time.event returns to true at the end of each event.
    if (model.mainview.time.selectevent == false) return;
    model.mainview.time.selectevent = false;

    //Increases menu.round by 1 and resets the player's health so they can fight.
    model.mainview.menu.round++;
    applyLevel();

    //Checks what box was clicked and selects appropriate event
    switch (event) {
        case 'Fight':
            model.app.currentView = `fightView`;
            updateDutyRoster();
            model.mainview.time.selectevent = true;
            view();
            break;

        case 'Explore':
            model.app.currentView = `exploreView`;
            model.mainview.time.selectevent = true;
            view();
            break;

        case 'Profession':
            model.mainview.menu.status = 'Event is not finished, try again later.';
            model.mainview.menu.round--;
            view();
            setTimeout(() => { model.mainview.menu.status = 'You are home.'; view(); model.mainview.time.selectevent = true; view(); }, 3000);
            break;

        case 'Study':
            model.mainview.menu.status = 'Event is not finished, try again later.';
            model.mainview.menu.round--;
            view();
            setTimeout(() => { model.mainview.menu.status = 'You are home.'; view(); model.mainview.time.selectevent = true; view(); }, 3000);
            break;

        default:
            model.mainview.menu.status = 'You should not be here. You most likely ran selectEvent() function with an invalid argument.';
            model.mainview.menu.round--;
            view();
            setTimeout(() => { model.mainview.menu.status = 'You are home.'; view(); model.mainview.time.selectevent = true; view(); }, 3000);
            break;
    }
}
