    //Model
    let app = document.getElementById('app');

    //Object defaults
    let weaponStore = [

        noweapon = {
            name: "N/A",
        },

        stick = {
            name: "Stick",
            damage: 3,
            speed: 5,
        },

        ironsword = {
            name: "Iron Sword",
            damage: 6,
            speed: 8,
        },
    ]

    let characters = [

        player = {
            name: 'Bob',
            health: 100,
            ad: 7,
            speed: 5,
            weapon: stick,
            //Inventory:
            bag: {
                inventory: 10,
                gold: 10,
                healthpotions: 0,
                strengthPotion: 0,
            },
            armory: {
                slot1: noweapon,
                slot2: noweapon,
                slot3: noweapon,
            }
        },

        goblin = {
            name: "Goblin",
            health: 50,
            ad: 10, // Attack damage
            speed: 7,
        },
        goblinBoss = {
            name: "Goblin Boss",
            health: 100,
            ad: 20, // Attack damage
            speed: 10,
        },
    ];

    //Player model variables
    let attackDamage = 7;

    //Other variables
    let status = 'You are home.';
    let winOrLose = '';

    let round = 0;
    let currentMonster = {name:'N/A',health:'N/A'};
    let damage = 0;

    //This variable prevent events from running while another event is running.
    let eventTime = true;

    //For strikeSequence() function - Prevents multiple options from running at the same time.
    let strikeTime = true;
    let bagTime = true;
    let assessTime = true;
    let fleeTime = true;

    let powerUP = 0;
    let firstAction = `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`;
    let secondAction = `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`;
    let thirdAction = `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`;
    let fourthAction = `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`;



    // let Events = [

    //     forest = {
    //         name: "forest",
    //         strength: 3,
    //         stealthdetection: 5,
    //         traps: 5,
    //         treasure: 'Stick',
    //     },

    //     castle = {
    //         name: "castle",
    //         strength: 5,
    //         stealthdetection: 10,
    //         traps: 3,
    //         treasure: 'Iron sword',
    //     },

    // ]
