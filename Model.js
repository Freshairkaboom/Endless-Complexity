    //Model
    let app = document.getElementById('app');

    //Object defaults

    let randomObjects = [

        objectnull = {
            name: "N/A",
        },

        campsite = {
            name: "Campsite",
            traps: 1,
            treasure: 1,
        },

        hut = {
            name: "Hut",
            hull: 100,
            treasure: 1,
        },

        //Workspace
    ]


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

        steelsword = {
            name: "Steel Sword",
            damage: 12,
            speed: 8,
        }
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
                strengthpotions: 0,
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
            speed: 12,
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
    let cover = 0;
    let remainingCover = 0;
    let trapsOrNot = true;

    //These variables prevent events from running while another event is running.
    let eventTime = true;
    let strengthTime = true;
    let healthTime = true;

    let fightTime = true;
    let potionTime = true;
    let seekTime = true;
    let checkTime = true;
    let useTime = true;

    //Defining the default values of action buttons on the main menu.
    let firstAction = `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`;
    let secondAction = `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`;
    let thirdAction = `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`;
    let fourthAction = `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`;

    //Used to place objects in Assess Area menu in FightSequence() function. By default, objectnull is an empty object with the name "N/A".
    let randomObject = [objectnull,objectnull,objectnull];

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
