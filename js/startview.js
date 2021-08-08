
    function startView() {
        let html = `
        <button class="save" onclick="saveGame()">Save</button>
        <button class="load" onclick="loadGame()">Load</button>

        <div class="container">

        <h1 class="title">Endless Complexity</h1>

        <button class="startButton" onclick="updateView();writeIntro();">Start Game</button>

        </div>

    `;
    app.innerHTML = html;
    }
