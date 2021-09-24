function view() {

    switch(model.app.currentView) {
        case 'startView':
            startView();
            break;

        case 'mainView':
            mainView();
            break;

        case 'fightView':
            fightView();
            break;

        case 'exploreView':
            exploreView();
            break;

        case 'skillView':
            skillView();
            break;

        case 'studyView':
            studyView();
            break;
    }
}

function startView() {
    let html = `
    <div class="container">

    <h1 class="title">Endless Complexity</h1>

    <button class="startButton" onclick="model.app.currentView='mainView';view();writeIntro();">Start Game</button>

    </div>

`;
app.innerHTML = html;
}


function mainView() {
    let html = `
        <button class="save" onclick="saveGame()">Save</button>
        <button class="load" onclick="loadGame()">Load</button>

        <h1 class="title">Endless Complexity</h1>

        <div class="modelContainerBook ${menu.bookclose}">
                <p class="bookText">${menu.booktext}</p>
            </div>
        <div class="page">

        </div>

        <div class="page">

            <div class="modelContainer">
                <div class="modelBox">
                    <div>Player name: ${player.name} (click to change)</div>
                    <div>Health: ${player.health} + ${pmvariables.cover}</div>
                    <div>Attack damage: ${player.ad}</div>
                    <div>Speed: ${player.speed}</div>
                    <div>Equipped: ${player.weapon.name}</div>
                </div>
                <hr>
                <div class="modelBox">
                    <div>Enemy name: ${enemy.current.name}</div>
                    <div>Health: ${enemy.current.health} </div>
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
                    <div>Buy health potion:<button class="button" onclick="buyHealthPotion()">25gp</button></div>
                    <div> Buy strength potion: <button class="button2" onclick="buystrengthPotion()">50gp</button></div>
                </div>
            </div>

            <div class="statuscontainer">
                    <div>Round: ${menu.round}</div>
                    <div>Level: ${pmvariables.level}</div>
                    <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
                    <div> Status: ${menu.status}</div>
                    <div>${menu.winorlose}</div>
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

function fightView() {

}
function skillView() {

}
function studyView() {

}
