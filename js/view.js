
    function updateView() {
        let html = `

        <div class="page">
            <div class="modelContainer">
                <div class="modelBox">
                    <div class="title">Player name: ${player.name}</div>
                    <div>Health: ${player.health} + ${pmvariables.cover}</div>
                    <div>Attack damage: ${player.ad}</div>
                    <div>Speed: ${player.speed}</div>
                    <div>Equipped: ${player.weapon.name}</div>
                </div>
                <div class="modelBox">
                    <div>Monster name: ${monster.current.name}</div>
                    <div>Health: ${monster.current.health} </div>
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
                    <div>Round: ${menu.round}</div>
                    <div> Status: ${menu.status} </br> ${menu.winorlose}</div>
                </div>

                ${button.firstaction} 1)
                <hr>
                ${button.secondaction} 2)
                <hr>
                ${button.thirdaction} 3)
                <hr>
                ${button.fourthaction} 4)


            </div>
        </div>


    `;
    app.innerHTML = html;
    }
