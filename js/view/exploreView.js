function exploreView() {
    let html = `
    <button class="save" onclick="saveGame()">Save</button>
    <button class="load" onclick="loadGame()">Load</button>

    <h1 class="title">Endless Complexity</h1>

    <div class="page">

        <div class="modelContainer">
            <div class="modelBox">
                <div>Player name: ${model.exploreview.player.name} (click to change)</div>
                <div>Health: ${model.exploreview.player.health}</div>
                <div>Attack damage: ${model.exploreview.player.ad}</div>
                <div>Speed: ${model.exploreview.player.speed}</div>
                <div>Equipped: ${model.exploreview.player.weapon}</div>
            </div>
            <hr>
            <div class="modelBox">
                <div>Enemy name:</div>
                <div>Health:</div>
            </div>
            <hr>
            <div class="modelBox">
                <div>Inventory: ${model.exploreview.player.bag.inventory} slots left</div>
                <div>Gold: ${model.exploreview.player.bag.gold} gp</div>
                <div>Health potions: ${model.exploreview.player.bag.healthpotions}</div>
                <div>Strength potions: ${model.exploreview.player.bag.strengthpotions}</div>
            </div>
            <hr>
            <div class="bottomBox">
                <div>Hint: Report to the Sergeant to receive your duty assignments and hone skills.</div>
            </div>
        </div>

        <div class="statuscontainer">
                <div>Level: ${pmvariables.level}</div>
                <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
                <div> Status: ${model.exploreview.menu.status}</div>
        </div>

        <div class="buttoncontainer">
            ${model.exploreview.button.firstaction} 1)

            ${model.exploreview.button.secondaction} 2)

            ${model.exploreview.button.thirdaction} 3)

            ${model.exploreview.button.fourthaction} 4)

        </div>
    </div>
    `;
    app.innerHTML = html;
}
