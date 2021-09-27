function exploreView() {
    let html = `
    <button class="save" onclick="saveGame()">Save</button>
    <button class="load" onclick="loadGame()">Load</button>

    <h1 class="title">Endless Complexity</h1>

    <div class="page">

        <div class="modelContainer">
            <div class="modelBox">
                <div>Player name: ${player.name} (click to change)</div>
                <div>Health: ${player.health}</div>
                <div>Attack damage: ${player.ad}</div>
                <div>Speed: ${player.speed}</div>
                <div>Equipped: ${player.weapon}</div>
            </div>
            <hr>
            <div class="modelBox">
                <div>Enemy name:</div>
                <div>Health:</div>
            </div>
            <hr>
            <div class="modelBox">
                <div>Inventory: ${player.bag.inventory} slots left</div>
                <div>Gold: ${player.bag.gold} gp</div>
                <div>Health potions: ${player.bag.healthpotions}</div>
                <div>Strength potions: ${player.bag.strengthpotions}</div>
            </div>
            <hr>
            <div class="bottomBox">
                <div>Hint: It's wise to make a mental map of the area you are exploring, that way it's easier to find your way back next time.</div>
            </div>
        </div>

        <div class="statuscontainer">
                <div>Level: ${pmvariables.level}</div>
                <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
                <div> Status: ${menu.status}</div>
        </div>

        <div class="buttoncontainer">
            ${button.firstaction} 1)

            ${button.secondaction} 2)

            ${button.thirdaction} 3)

            ${button.fourthaction} 4)

        </div>
    </div>
    `;
    app.innerHTML = html;
}
