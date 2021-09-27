function fightView() {
    let html = `
    <button class="save" onclick="saveGame()">Save</button>
    <button class="load" onclick="loadGame()">Load</button>

    <h1 class="title">Endless Complexity</h1>

    <div class="page">

        <div class="modelContainer">
            <div class="modelBox">
                <div>Player name: ${player.name} (click to change)</div>
                <div>Health: ${player.health} + ${skills.defence}</div>
                <div>Attack damage: ${player.ad} + ${skills.strength}</div>
                <div>Speed: ${player.speed} + ${skills.agility}</div>
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
                <div>Hint: Report to the Sergeant to receive your duty assignments and hone skills.</div>
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
