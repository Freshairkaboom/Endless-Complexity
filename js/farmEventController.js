
function farmPlotMenu() {
    menu.status = "You leave your home for the fields. It is a great day to get your hands dirty with soil.";

    button.firstaction = `<button class="actionButton" onclick="">${farmplot.north.name}</button>`;

    button.secondaction = `<button class="actionButton" onclick="">${farmplot.west.name}</button>`;

    button.thirdaction = `<button class="actionButton" onclick="">${farmplot.east.name}</button>`;

    button.fourthaction = `<button class="actionButton" onclick="farmSequence()">Return</button>`;

    view();
}

function buyPlots() {
    menu.status = "You leave your home for the fields. It is a great day to get your hands dirty with soil.";

    button.firstaction = `<button class="actionButton" onclick="">Buy north plot</button>`;

    button.secondaction = `<button class="actionButton" onclick="">Buy west plot</button>`;

    button.thirdaction = `<button class="actionButton" onclick="">Buy east plot</button>`;

    button.fourthaction = `<button class="actionButton" onclick="farmSequence()">Return</button>`;

    view();
}

//-----------//
// Buy tools //
//-----------//

function buyTools() {
    menu.status = "You leave your home for the fields. It is a great day to get your hands dirty with soil.";

    button.firstaction = `<button class="actionButton" onclick="">Buy watering can</button>`;

    button.secondaction = `<button class="actionButton" onclick="">Buy spade</button>`;

    button.thirdaction = `<button class="actionButton" onclick="">See more...</button>`;

    button.fourthaction = `<button class="actionButton" onclick="farmSequence()">Return</button>`;

    view();
}

//-----------//
// Main Menu //
//-----------//

function farmSequence() {
    menu.status = "You leave your home for the fields. It is a great day to get your hands dirty with soil.";

    button.firstaction = `<button class="actionButton" onclick="farmPlotMenu()">Farm plot menu</button>`;

    button.secondaction = `<button class="actionButton" onclick="buyPlots()">Buy farm plots</button>`;

    button.thirdaction = `<button class="actionButton" onclick="buyTools()">Buy tools</button>`;

    button.fourthaction = `<button class="actionButton" onclick="reset()">Return home</button>`;

    view();
}
