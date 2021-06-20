    //View

    updateView();
    function updateView() {
        let html = `
        <div class="page">
            <div class="modelContainer">
                <div class="modelBox">
                    <div class="title">Player name: ${player.name}</div>
                    <div>Health: ${player.health}</div>
                    <div>Attack damage: ${player.ad}</div>
                    <div>Speed: ${player.speed}</div>
                    <div>Equipped weapon: ${player.weapon}</div>
                </div>
                <div class="modelBox">
                    <div>Monster name: ${monsterName}</div>
                    <div>Health: ${monsterHealth} </div>
                </div>

                <div class="modelBox">
                    <div>Inventory: ${player.inventory} slots left</div>
                    <div>Gold: ${player.gold} gp</div>
                    <div>Health potions: ${player.healthpotions}</div>
                    <div>AttackUP: ${player.attackUP}</div>
                </div>

                <div class="bottomBox">
                    <div>Buy health potion <button class="button" onclick="buyHealthPotion()">25gp</button></div>
                    <div> Buy attackUP <button class="button" onclick="buyAttackUp()">50gp</button></div>
                </div>
            </div>
            <div class="interactContainer">
                <div class="header">
                    <div>Click a button to select event</div>
                    <div> Status: ${status} </br> ${winOrLose}</div>
                </div>

                ${firstAction} 1)
                <hr>
                ${secondAction} 2)
                <hr>
                ${thirdAction} 3)
                <hr>
                ${fourthAction} 4)
                <hr>


            </div>
        </div>


    `;
    app.innerHTML = html;
    }
