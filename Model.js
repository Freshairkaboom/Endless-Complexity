    //Model
    let app = document.getElementById('app');

    //Player model variables
    let playerName = 'Bob'; //Default name
    let weaponType = "Default";
    let healthPotions = 0;

    //Weapon variables
    let weaponDamage = 0;
    let weaponSpeed = 0;

    //Other variables
    let round = 1;
    let currentMonster = {name:'N/A',health:'N/A'};
    let damage = 0;
    let winOrLose = '';
    let eventTime = true;
    let strikeTime = true;
    let status = 'You are home.';
    let powerUP = 0;
    let firstAction = `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`;
    let secondAction = `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`;
    let thirdAction = `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`;
    let fourthAction = `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`;

    let characters = [

    player = {
        name: playerName,
        health: 100,
        ad: 3, // Attack damage
        speed: 5,
        weapon: "Stick",
        //Inventory:
        inventory: 10,
        gold: 10,
        healthpotions: 0,
        attackUP: 0,

        //Status:
        courage: 1,
    },

    goblin = {
        name: "Goblin",
        health: 50,
        ad: 10, // Attack damage
        armor: 2,
        speed: 4,
    },
    goblinBoss = {
        name: "Goblin Boss",
        health: 100,
        ad: 20, // Attack damage
        armor: 5,
        speed: 2,
    },];

    let Events = [

        forest = {
            name: "forest",
            strength: 3,
            stealthdetection: 5,
            traps: 5,
            treasure: 'Stick',
        },

        castle = {
            name: "castle",
            strength: 5,
            stealthdetection: 10,
            traps: 3,
            treasure: 'Iron sword',
        },

    ]
