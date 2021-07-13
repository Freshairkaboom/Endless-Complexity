    //Object defaults

    let model = {
        randomObjects: [

            objectnull = {
                name: "",

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
                name: "",
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
                name: '<span onclick="setName()">Bob (click to change)</span>',
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
                    windingmap: 0,
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

            pmvariables = {
                truename: 'Bob',
                experiencepoints: 0,
                level: 1,
                damage: 0,
                cover: 0,
                remainingcover: 0,
            }

        ],

        menuVariables: [

            menu = {
                booktext: '',
                bookclose: 'Open',
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

        questVariables: [
            theMerchantQuest = {
                completion: false,

                intro: [
                    "You spot a rather carefree figure relaxing in the shadow of a tree near the crossroads. His cart is overloaded with goods, and he's gnawing on a straw with his hands folded behind his head.",
                ],

                chapter1: [
                    //Step 1
                    [
                        "You approach the figure and he opens one eye in your direction. He spits out his straw and says to you in a sour demeanor: I am sick and tired of youngsters these days walking around without soil on their hands or sweat on their brow. You think yourself above me?",
                    ],

                    //Step 2
                    [
                        "You want me to give you a quest? What are you, a child? I don't have time for roleplaying!",
                        "Am I okay...? Well, now that you mention it, no, I'm not okay. I'm being bothered when I'm trying to think.",
                        "Snarky kid! I'll have you know that these hands have seen more work than you'll ever see in your lifetime. Now get lost.",
                    ],

                    //Step 3
                    [
                        "Hmm... Well, if you're adamant about doing something productive with your life, I guess I can let you in on a little secret. This here cart is actually loaded with precious minerals from the fiery caverns to the west. I could need some help carrying the cart to my home.",
                        "Ha! I'll believe it when I see it. Alright, I'll let you in on a little secret. This here cart is actually loaded with precious minerals from the fiery caverns to the west. I could need some help carrying the cart to my home.",
                    ],

                    //Step 4
                    [
                        "Alright, lets get on the road then. It's a couple of hours to the south-east, so I hope you're ready for it.",
                        "The fiery caverns are home to fearsome creatures and scorching heat. Nothing but misery and death awaits those who enter with violent intent. I would recommend staying away from that place if you value your life.",
                        "Haha! I knew you were in it for the reward. Not that I blame you, of course. I am a merchant myself. Don't worry, you will be well compensated if you stick with me all the way."
                    ],

                    //Step 5
                    [
                        "You pick up the covered cart. It's quite heavy, so apparently he's not lying about the minerals. You start to pull the cart, but you soon realize it's going to require extraordinary effort to pull this more than a few meters. The merchant just smiles slyly at you.",
                    ],

                    //Step 6
                    [
                        "Hahahah, I knew you were a weakling. How are you going to solve this? You already agreed to help, so now that you know my conundrum, what will you do?",
                    ],

                    //Step 7
                    [
                        "You pull as hard as you can, but the cart barely budges. You put your entire body into it, but your hands slip from the cart's handles and you fall flat on your face. Guess that's not going to work.",
                        "The merchant shakes his head and says: Painfully. Over many days and nights. And I'd say I'm a fair bit stronger than your average person too. Perhaps I should have thought of a solution before I- you know what, nevermind.",
                    ],

                    //Step 8
                    [
                        "My precious cargo? Are you crazy? I- Wait...that's it! Offloading the cargo! Okay, hear me out. To the east you will find some of my collegues...resting. Yeah... They'll probably have a spare cart we can use to split the cargo into two. Convince them to lend us one, and we'll be in business!",
                    ],

                ],

                chapter2: [
                    [
                        "You finished chapter 1 of The Merchant! I hope you liked it. Chapter 2 is not done yet, but here's some experience."
                    ],

                    [
                        "You walk for a while to the east. The forest is getting denser and denser, and the vegetation grows thicker and more colorful. The sound of splashing water can be heard from beyond the treeline. The forest spring comes into view, and suddenly you see three men trawling the opposite shoreline. They look rough in appearance and they're wearing some sort of thick fabric and heavy boots. They don't seem to have noticed you."
                    ],
                ],

            },
        ],

        otherVariables: [

            loop = {
                i: 0,
            },

            style = {
                opacity: "",
            },

            levelfactor = {
                health: 0,
                ad: 0,
                speed: 0,

                experience: 0,
            },

            monstergrowth = {
                health: 0,
                ad: 0,
                speed: 0,
            },

            time = {
                selectevent: true,
                strength: true,
                health: true,
                event: true,
                seek: true,
                check: true,
                use: true,
            },

            monster = {
                current: {
                    name:'',
                    health:''
                },
            },

            traps = {
                trapsornot: true,
            },

            monsterbuff = {
                interval: 0,
            },

            direction = {
                north: 'north',
                west: "west",
                east: "east",
                south: "south",
            },

            firsttime = {
                sector1: true,
                sector2: true,
                sector3: true,
                sector4: true,
                sector5: true,
                sector6: true,
                sector7: true,
                sector8: true,
                sector9: true,
            },

            questcompletion = {
                themerchant: false,
            },

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
