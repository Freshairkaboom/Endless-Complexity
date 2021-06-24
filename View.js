    //View

    updateView();
    function updateView() {
        let html = `

        <div class="page">
            <div class="modelContainer">
                <div class="modelBox">
                    <div class="title">Player name: ${player.name}</div>
                    <div>Health: ${player.health} + ${cover}</div>
                    <div>Attack damage: ${player.ad}</div>
                    <div>Speed: ${player.speed}</div>
                    <div>Equipped: ${player.weapon.name}</div>
                </div>
                <div class="modelBox">
                    <div>Monster name: ${currentMonster.name}</div>
                    <div>Health: ${currentMonster.health} </div>
                </div>

                <div class="modelBox">
                    <div>Inventory: ${player.bag.inventory} slots left</div>
                    <div>Gold: ${player.bag.gold} gp</div>
                    <div>Health potions: ${player.bag.healthpotions}</div>
                    <div>Strength potions: ${player.bag.strengthpotions}</div>
                </div>

                <div class="bottomBox">
                    <div>Buy Health <button class="button" onclick="buyHealthPotion()">25gp</button></div>
                    <div> Buy Strength <button class="button" onclick="buystrengthPotion()">50gp</button></div>
                </div>
            </div>
            <div class="interactContainer">
                <div class="header">
                    <div>Round: ${round}</div>
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
