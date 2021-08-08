
    function startView() {
        let html = `
        <div class="container">

        <h1 class="title">Endless Complexity</h1>

        <button class="startButton" onclick="updateView();writeIntro();">Start Game</button>

        </div>

    `;
    app.innerHTML = html;
    }
