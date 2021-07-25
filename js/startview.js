
    function startView() {
        let html = `
        <button class="save" onclick="saveGame()">Save</button>
        <button class="load" onclick="loadGame()">Load</button>

        <h1 class="title">Endless Complexity</h1>

        <button class="startButton" onclick="updateView();writeIntro();">Start Game</button>

        <img class="bg-start"src="https://github.com/Freshairkaboom/Endless-Complexity/blob/main/assets/bg-start.png?raw=true" alt="background of start screen">

    `;
    app.innerHTML = html;
    }
