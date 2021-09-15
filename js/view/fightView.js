function fightView() {
    let html = `
    <button class="save" onclick="saveGame()">Save</button>
    <button class="load" onclick="loadGame()">Load</button>

    <h1 class="title">Endless Complexity</h1>

    <div class="page">

        <div class="modelContainer">
            <div class="modelBox">
                <div>Player name: ${model.fightview.player.name} (click to change)</div>
                <div>Health: ${model.fightview.player.health} + ${model.fightview.skills.defence}</div>
                <div>Attack damage: ${model.fightview.player.ad} + ${model.fightview.skills.strength}</div>
                <div>Speed: ${model.fightview.player.speed} + ${model.fightview.skills.agility}</div>
                <div>Equipped: ${model.fightview.player.weapon}</div>
            </div>
            <hr>
            <div class="modelBox">
                <div>Enemy name:</div>
                <div>Health:</div>
            </div>
            <hr>
            <div class="modelBox">
                <div>Inventory: ${model.fightview.player.bag.inventory} slots left</div>
                <div>Gold: ${model.fightview.player.bag.gold} gp</div>
                <div>Health potions: ${model.fightview.player.bag.healthpotions}</div>
                <div>Strength potions: ${model.fightview.player.bag.strengthpotions}</div>
            </div>
            <hr>
            <div class="bottomBox">
                <div>Hint: Report to the Sergeant to receive your duty assignments and hone skills.</div>
            </div>
        </div>

        <div class="statuscontainer">
                <div>Level: ${pmvariables.level}</div>
                <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
                <div> Status: ${model.fightview.menu.status}</div>
        </div>

        <div class="buttoncontainer">
            ${model.fightview.button.firstaction} 1)

            ${model.fightview.button.secondaction} 2)

            ${model.fightview.button.thirdaction} 3)

            ${model.fightview.button.fourthaction} 4)
        </div>
    </div>
    `;
    app.innerHTML = html;
}
