
    function updateView() {
        let html = `
        <button onclick="saveGame()">Save</button>
        <button onclick="loadGame()">Load</button>

        <h1 class="title">Endless Complexity</h1>
        <div class="page">

            <div class="modelContainerBook ${menu.bookclose}">
                <p class="bookText">${menu.booktext}</p>
            </div>

        </div>

        <div class="page">

            <div class="modelContainer">
                <div class="modelBox">
                    <div>Player name: ${player.name}</div>
                    <div>Health: ${player.health} + ${pmvariables.cover}</div>
                    <div>Attack damage: ${player.ad}</div>
                    <div>Speed: ${player.speed}</div>
                    <div>Equipped: ${player.weapon.name}</div>
                </div>
                <hr>
                <div class="modelBox">
                    <div>Monster name: ${monster.current.name}</div>
                    <div>Health: ${monster.current.health} </div>
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
