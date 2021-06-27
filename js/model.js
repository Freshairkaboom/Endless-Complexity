    //Object defaults

    let model = {
        randomObjects: [

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
        ],

        weaponStore: [

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
            },
        ],

        characters: [

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
        ],

        playerModelVariables: [

            pmconstants = {
                attackdamage: 7,
            },

            pmvariables = {
                experiencepoints: 0,
                level: 1,
                damage: 0,
                cover: 0,
                remainingcover: 0,
            }

        ],

        menuVariables: [

            menu = {
                status: 'You are home.',
                winorlose: '',
                round: 0,
            },

            button = {
                firstaction: `<button class="actionButton" onclick="selectEvent('Fight')">Fight</button>`,
                secondaction: `<button class="actionButton" onclick="selectEvent('Explore')">Explore</button>`,
                thirdaction: `<button class="actionButton" onclick="selectEvent('Farm')">Farm</button>`,
                fourthaction: `<button class="actionButton" onclick="selectEvent('Study')">Study</button>`,
            },

        ],

        otherVariables: [

            levelfactor = {
                health: 0,
                ad: 0,
                speed: 0,

                experience: 1.8,
            },

            time = {
                event: true,
                strength: true,
                health: true,
                fight: true,
                seek: true,
                check: true,
                use: true,
            },

            monster = {
                current: {
                    name:'N/A',
                    health:'N/A'
                },
            },

            traps = {
                trapsornot: true,
            }

        ],

    }

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
