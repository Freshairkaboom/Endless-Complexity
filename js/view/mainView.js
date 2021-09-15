function mainView() {
    let html = `
        <button class="save" onclick="saveGame()">Save</button>
        <button class="load" onclick="loadGame()">Load</button>

        <h1 class="title">Endless Complexity</h1>

        <div class="modelContainerBook ${model.mainview.menu.bookclose}">
                <p class="bookText">${model.mainview.menu.booktext}</p>
            </div>
        <div class="page">

        </div>

        <div class="page">

            <div class="modelContainer">
                <div class="modelBox">
                    <div>Player name: ${model.mainview.player.name} (click to change)</div>
                    <div>Health: ${model.mainview.player.health}</div>
                    <div>Attack damage: ${model.mainview.player.ad}</div>
                    <div>Speed: ${model.mainview.player.speed}</div>
                    <div>Equipped: ${model.mainview.player.weapon}</div>
                </div>
                <hr>
                <div class="modelBox">
                    <div>Enemy name:</div>
                    <div>Health:</div>
                </div>
                <hr>
                <div class="modelBox">
                    <div>Inventory: ${model.mainview.player.bag.inventory} slots left</div>
                    <div>Gold: ${model.mainview.player.bag.gold} gp</div>
                    <div>Health potions: ${model.mainview.player.bag.healthpotions}</div>
                    <div>Strength potions: ${model.mainview.player.bag.strengthpotions}</div>
                </div>
                <hr>
                <div class="bottomBox">
                    <div>Buy health potion:<button class="button" onclick="buyHealthPotion()">25gp</button></div>
                    <div> Buy strength potion: <button class="button2" onclick="buystrengthPotion()">50gp</button></div>
                </div>
            </div>

            <div class="statuscontainer">
                    <div>Round: ${model.mainview.menu.round}</div>
                    <div>Level: ${pmvariables.level}</div>
                    <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
                    <div> Status: ${model.mainview.menu.status}</div>
            </div>

            <div class="buttoncontainer">
                ${model.mainview.button.firstaction} 1)

                ${model.mainview.button.secondaction} 2)

                ${model.mainview.button.thirdaction} 3)

                ${model.mainview.button.fourthaction} 4)
            </div>
        </div>

    `;
    app.innerHTML = html;
}
