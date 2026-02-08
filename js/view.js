function view() {

    switch(model.app.currentView) {
        case 'startView':
            startView();
            break;

        case 'gameView':
            gameView();
            break;

    }
}

function startView() {
    let html = `
    <div class="container">

    <h1 class="title">Endless Complexity</h1>

    <div class="buttonContainer">
    <button class="startButton" onclick="model.app.currentView='gameView';view();writeIntro();">New Game</button>
    <button class="startButton" onclick="model.app.currentView='gameView';loadGame();closeBook();view();">Load Game</button>
    </div>

    </div>

`;
app.innerHTML = html;
}


function gameView() {
    // Check if view already exists - if so, only update dynamic content
    const existingView = document.querySelector('.container .page');

    if (existingView) {
        // Update only the dynamic content without recreating the DOM
        updateGameViewContent();
        return;
    }

    // First time render - create full HTML structure
    let html = `
        <button class="save" onclick="saveGame()">Save</button>
        <button class="load" onclick="loadGame()">Load</button>

        <div class="menuBackdrop" id="menuBackdrop" onclick="toggleMenu()"></div>
        <div class="sideMenu" id="sideMenu">
            <button class="closeMenu" onclick="toggleMenu()">&times;</button>
            <div class="menuContent">
                <details class="infoSection" id="playerInfo" ${menuState.playerInfoOpen ? 'open' : ''} ontoggle="menuState.playerInfoOpen = this.open">
                    <summary class="infoHeader">Player Info</summary>
                    <div class="infoContent">
                        <div>Player name: ${player.name} (click to change)</div>
                        <div>Health: ${player.health} + ${pmvariables.cover}</div>
                        <div>Attack damage: ${player.ad}</div>
                        <div>Speed: ${player.speed}</div>
                        <div>Equipped: ${player.weapon.name}</div>
                    </div>
                </details>

                <details class="infoSection" id="enemyInfo" ${menuState.enemyInfoOpen ? 'open' : ''} ontoggle="menuState.enemyInfoOpen = this.open">
                    <summary class="infoHeader">Enemy Info</summary>
                    <div class="infoContent">
                        <div>Enemy name: ${enemy.current.name}</div>
                        <div>Health: ${enemy.current.health}</div>
                    </div>
                </details>

                <details class="infoSection" id="inventory" ${menuState.inventoryOpen ? 'open' : ''} ontoggle="menuState.inventoryOpen = this.open">
                    <summary class="infoHeader">Inventory</summary>
                    <div class="infoContent">
                        <div>Inventory slots: ${player.bag.inventory}</div>
                        <div>Gold: ${player.bag.gold} gp</div>
                        <div>Health potions: ${player.bag.healthpotions}</div>
                        <div>Strength potions: ${player.bag.strengthpotions}</div>
                    </div>
                </details>

                <details class="infoSection" id="shop" ${menuState.shopOpen ? 'open' : ''} ontoggle="menuState.shopOpen = this.open">
                    <summary class="infoHeader">Shop</summary>
                    <div class="infoContent shopContent">
                        <div>Buy health potion:<button class="button" onclick="buyHealthPotion()">25gp</button></div>
                        <div>Buy strength potion: <button class="button2" onclick="buystrengthPotion()">50gp</button></div>
                    </div>
                </details>
            </div>
        </div>

        <div class="container">
            <h1 class="title">Endless Complexity</h1>

            <div class="modelContainerBook ${menu.bookclose}">
                <p class="bookText">${menu.booktext}</p>
            </div>

            <div class="page">

            <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="modelContainer">
                <details class="infoSection" id="playerInfoMain" ${menuState.playerInfoOpen ? 'open' : ''} ontoggle="menuState.playerInfoOpen = this.open">
                    <summary class="infoHeader">Player Info</summary>
                    <div class="infoContent">
                        <div>Player name: ${player.name} (click to change)</div>
                        <div>Health: ${player.health} + ${pmvariables.cover}</div>
                        <div>Attack damage: ${player.ad}</div>
                        <div>Speed: ${player.speed}</div>
                        <div>Equipped: ${player.weapon.name}</div>
                    </div>
                </details>

                <details class="infoSection" id="enemyInfoMain" ${menuState.enemyInfoOpen ? 'open' : ''} ontoggle="menuState.enemyInfoOpen = this.open">
                    <summary class="infoHeader">Enemy Info</summary>
                    <div class="infoContent">
                        <div>Enemy name: ${enemy.current.name}</div>
                        <div>Health: ${enemy.current.health}</div>
                    </div>
                </details>

                <details class="infoSection" id="inventoryMain" ${menuState.inventoryOpen ? 'open' : ''} ontoggle="menuState.inventoryOpen = this.open">
                    <summary class="infoHeader">Inventory</summary>
                    <div class="infoContent">
                        <div>Inventory slots: ${player.bag.inventory}</div>
                        <div>Gold: ${player.bag.gold} gp</div>
                        <div>Health potions: ${player.bag.healthpotions}</div>
                        <div>Strength potions: ${player.bag.strengthpotions}</div>
                    </div>
                </details>

                <details class="infoSection" id="shopMain" ${menuState.shopOpen ? 'open' : ''} ontoggle="menuState.shopOpen = this.open">
                    <summary class="infoHeader">Shop</summary>
                    <div class="infoContent shopContent">
                        <div>Buy health potion:<button class="button" onclick="buyHealthPotion()">25gp</button></div>
                        <div>Buy strength potion: <button class="button2" onclick="buystrengthPotion()">50gp</button></div>
                    </div>
                </details>
            </div>

            <div class="statuscontainer">
                    <div>Round: ${menu.round}</div>
                    <div>Level: ${pmvariables.level}</div>
                    <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
                    <div> Status: ${menu.status}</div>
                    <div>${menu.winorlose}</div>
            </div>

            <div class="buttoncontainer">
                <div class="actionButtonWrapper">${button.firstaction}</div>

                <div class="actionButtonWrapper">${button.secondaction}</div>

                <div class="actionButtonWrapper">${button.thirdaction}</div>

                <div class="actionButtonWrapper">${button.fourthaction}</div>
            </div>
        </div>
        </div>

    `;
    app.innerHTML = html;
}

function updateGameViewContent() {
    // Update player info content in both locations
    const playerInfoContents = document.querySelectorAll('#playerInfo .infoContent, #playerInfoMain .infoContent');
    playerInfoContents.forEach(content => {
        content.innerHTML = `
            <div>Player name: ${player.name} (click to change)</div>
            <div>Health: ${player.health} + ${pmvariables.cover}</div>
            <div>Attack damage: ${player.ad}</div>
            <div>Speed: ${player.speed}</div>
            <div>Equipped: ${player.weapon.name}</div>
        `;
    });

    // Update enemy info content in both locations
    const enemyInfoContents = document.querySelectorAll('#enemyInfo .infoContent, #enemyInfoMain .infoContent');
    enemyInfoContents.forEach(content => {
        content.innerHTML = `
            <div>Enemy name: ${enemy.current.name}</div>
            <div>Health: ${enemy.current.health}</div>
        `;
    });

    // Update inventory content in both locations
    const inventoryContents = document.querySelectorAll('#inventory .infoContent, #inventoryMain .infoContent');
    inventoryContents.forEach(content => {
        content.innerHTML = `
            <div>Inventory slots: ${player.bag.inventory}</div>
            <div>Gold: ${player.bag.gold} gp</div>
            <div>Health potions: ${player.bag.healthpotions}</div>
            <div>Strength potions: ${player.bag.strengthpotions}</div>
        `;
    });

    // Update status container
    const statusContainer = document.querySelector('.statuscontainer');
    if (statusContainer) {
        statusContainer.innerHTML = `
            <div>Round: ${menu.round}</div>
            <div>Level: ${pmvariables.level}</div>
            <div>Experience: ${pmvariables.experiencepoints} / ${getExpReq()}</div>
            <div> Status: ${menu.status}</div>
            <div>${menu.winorlose}</div>
        `;
    }

    // Update button container
    const buttonContainer = document.querySelector('.buttoncontainer');
    if (buttonContainer) {
        buttonContainer.innerHTML = `
            <div class="actionButtonWrapper">${button.firstaction}</div>
            <div class="actionButtonWrapper">${button.secondaction}</div>
            <div class="actionButtonWrapper">${button.thirdaction}</div>
            <div class="actionButtonWrapper">${button.fourthaction}</div>
        `;
    }

    // Update book
    const bookContainer = document.querySelector('.modelContainerBook');
    if (bookContainer) {
        bookContainer.className = `modelContainerBook ${menu.bookclose}`;
        const bookText = bookContainer.querySelector('.bookText');
        if (bookText) bookText.textContent = menu.booktext;
    }
}

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const backdrop = document.getElementById('menuBackdrop');
    menu.classList.toggle('active');
    backdrop.classList.toggle('active');
}
