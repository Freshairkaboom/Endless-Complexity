 //Called from 50gp button in the bottom left box.
 function buystrengthPotion() {
    console.log(player.bag.strengthpotions);
    if (player.bag.gold >= 50 && player.bag.inventory > 0) {
        player.bag.gold -= 50;
        player.bag.inventory -= 1;
        player.bag.strengthpotions += 1;
        updateView();
    }
    else alert("Check if you have enough gold or inventory space.");

}

function buyHealthPotion() {
    console.log(player.bag.healthpotions);
    if (player.bag.gold >= 25 && player.bag.inventory > 0) {
        player.bag.gold -= 25;
        player.bag.inventory -= 1;
        player.bag.healthpotions += 1;
        updateView();
    }
    else alert("Check if you have enough gold or inventory space.");
}
