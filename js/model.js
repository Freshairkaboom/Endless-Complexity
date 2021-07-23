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

            polearm = {
                name: "Polearm",
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
                name: '<span onclick="setName()">Bob</span>',
                health: 100,
                ad: 7,
                speed: 5,
                weapon: polearm,
                //Inventory:
                bag: {
                    inventory: 10,
                    gold: 10,
                    healthpotions: 0,
                    strengthpotions: 0,
                    windingmap: 0,

                    seedbag: {
                        wheatgrain: 0,
                        barley: 0,
                        potato: 0,
                        herb: 0,
                        poisonivy: 0,
                        magicseed: 0,
                    }
                },
                armory: {
                    slot1: noweapon,
                    slot2: noweapon,
                    slot3: noweapon,
                }
            },

            bandit = {
                name: "Bandit",
                health: 50,
                ad: 10, // Attack damage
                speed: 7,
            },
            banditLeader = {
                name: "Bandit Leader",
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
                intro: "Your reassignment is complete, forest guardian. It is your sworn duty to protect Massgrove Forest. Bandits are always attacking us, so please help drive them off. I'm not sure what kind of weaponry is available in the hut we left you, but I'm sure with the harsh training you received, you'll not have too many issues. Do come see me again, okay? I know you won't let us down. - Captain Taisha",
                booktext: '',
                bookclose: 'open',
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
                        "You approach the figure and he opens one eye in your direction. He spits out his straw and says to you in a sour demeanor: 'I am sick and tired of youngsters these days walking around without soil on their hands or sweat on their brow. You think yourself above me?'",
                    ],

                    //Step 2
                    [
                        "'You want me to give you a quest? What are you, a child? I don't have time for roleplaying!'",
                        "'Am I okay...? Well, now that you mention it, no, I'm not okay. I'm being bothered when I'm trying to think.'",
                        "'Snarky kid! I'll have you know that these hands have seen more work than you'll ever see in your lifetime. Now get lost.'",
                    ],

                    //Step 3
                    [
                        "'Hmm... Well, if you're adamant about doing something productive with your life, I guess I can let you in on a little secret. This here cart is actually loaded with precious minerals from the fiery caverns to the west. I could need some help carrying the cart to my home.'",
                        "'Ha! I'll believe it when I see it. Alright, I'll let you in on a little secret. This here cart is actually loaded with precious minerals from the fiery caverns to the west. I could need some help carrying the cart to my home.'",
                    ],

                    //Step 4
                    [
                        "'Alright, lets get on the road then. It's a couple of hours to the south-east, so I hope you're ready for it.'",
                        "'The fiery caverns are home to fearsome creatures and scorching heat. Nothing but misery and death awaits those who enter with violent intent. I would recommend staying away from that place if you value your life.'",
                        "'Haha! I knew you were in it for the reward. Not that I blame you, of course. I am a merchant myself. Don't worry, you will be well compensated if you stick with me all the way.'"
                    ],

                    //Step 5
                    [
                        "You pick up the covered cart. It's quite heavy, so apparently he's not lying about the minerals. You start to pull the cart, but you soon realize it's going to require extraordinary effort to pull this more than a few meters. The merchant just smiles slyly at you.",
                    ],

                    //Step 6
                    [
                        "'Hahahah, I knew you were a weakling. How are you going to solve this? You already agreed to help, so now that you know my conundrum, what will you do?'",
                    ],

                    //Step 7
                    [
                        "You pull as hard as you can, but the cart barely budges. You put your entire body into it, but your hands slip from the cart's handles and you fall flat on your face. Guess that's not going to work.",
                        "The merchant shakes his head and says: 'Painfully. Over many days and nights. And I'd say I'm a fair bit stronger than your average person too. Perhaps I should have thought of a solution before I- you know what? Nevermind.'",
                    ],

                    //Step 8
                    [
                        "'My precious cargo? Are you crazy? I- Wait...that's it! Offloading the cargo! Okay, hear me out. To the east you will find some of my collegues...resting. Yeah... They'll probably have a spare cart we can use to split the cargo into two. Convince them to lend us one, and we'll be in business!'",
                    ],

                ],

                chapter2: [
                    //Step 9
                    [
                        "You walk for a while to the east. The forest is getting denser and denser, and the vegetation grows thicker and more colorful. The sound of splashing water can be heard from beyond the treeline. The forest spring comes into view, and suddenly you see three men trawling the opposite shoreline. They look rough in appearance and they're wearing some sort of thick fabric and heavy crossbows. They don't seem to have noticed you.",
                    ],

                    //Step 10
                    [
                        "You choose to walk up to them and introduce yourself. Too late you realize your mistake - a crossbow bolt is heading right for you! You are hit square in the shoulder, letting out a scream that echoes throughout the woods. You fall to the ground and hear a disgruntled voice shout: 'Wait! That's not one of them! Careful where you point that thing Frederick!'",
                        "Hiding and waiting seems like the more logical option given they are armed. Your training has served you well. You hide behind a tree and peek out. The men seem to be looking for something. Are they bounty hunters? Given how many wanted bandits there are, it wouldn't surprise you."
                    ],
                    //Step 11
                    [
                        "'On behalf of my half-wit partner Frederick here, we are so sorry about hitting you. Are you okay stranger?'",
                        "After a while of hiding behind the tree, you notice them starting to leave your vision as they leave the spring and head back to the treeline on the opposite shore. You take a step forward to follow them, but step on a stick. It breaks! A small bolt-like arrow comes flying out of nowhere and hits you square in the shoulder!",
                    ],
                    //Step 12
                    [
                        "You pull the arrow out of your shoulder to everyone's shock, and reach for the medical kit in your backpack to clean the wound. One of the men steps up and quizzingly asks: 'Hey, you don't seem like your average traveler. That sort of expertise is usually reserved for...who are you?'",
                        "'Oi! Who goes there?' A rugged man, probably their leader, comes rushing over the shallow water like the wind. 'Wait, you're not one of them...why are you lurking in the shadows like an assassin? Who are you?' The other men follow suit, and soon have you surrounded. You pull out the arrow from your shoulder to everyone's shock. 'Who are you?' the leader asks quizzingly.",

                    ],
                    //Step 13
                    [
                        "'A forest guardian? Wait, does that mean you are...familiar with someone called Taisha Evendrett?'",
                    ],
                    //Step 14
                    [
                        "The men go silent, almost too silent. The third one in the back that had not shot you or talked to you carefully speaks up: 'You don't happen to be looking for...bandits, are you?' The first one to approach you shoots him a glare. You think they're clearly hiding something, but seeing as you are in such a vulnerable positon, you find it best to not confront them.",
                    ],
                    //Step 15
                    [
                        "The leader speaks: 'A merchant? He wouldn't happen to be carrying a big, heavy cart around, would he?'",
                    ],
                    //Step 16
                    [
                        "'And where may I ask is this merchant now?' Your suspicions shoot through the roof. Given that his cart is full of valuable minerals, you think it best to not share his location with just anyone.",
                    ],
                    //Step 16
                    [
                        "'You don't know?! Some help you are.' The quiet one seems to have found his voice. He is promptly interrupted by the leader: 'Shut up Carl! He clearly just doesn't trust us. Understandable, given how our only interaction is shooting at him.' He turns to you and takes on a softer persona: 'Don't worry about the location. We know the guy you're talking to, he's an old friend. Of course we will lend you a cart.'",
                    ],

                    //Step 17
                    [
                        "'Frederick, you shot him, so you go get the cart. And make it snappy!' the leader exclaims. Frederick shoots you a 'sorry' glance and scurries off behind some trees. When he comes back with the cart, the leader and Carl help you to your feet. 'Okay, here's your cart. And don't forget to give our regards to Jack.'",
                    ],
                    //Step 18
                    [
                        "You pull the old ragged cart back onto the road. You give a pained wave with your hurt shoulder, only to lower it again immediately when you realize. Frederick gives you a waning smile, and shouts back to you: 'Good...luck with everything!' You go back to the road, making sure to keep looking over your shoulder to see if they're following you. You wonder what they were doing there with those weapons. You should probably send Captain Taisha a letter about that.",
                    ],
                    //Step 19
                    [
                        "Just in case, you decide to take a detour in order to throw them off the trail should they choose to follow you. You really don't want to be responsible for Jack the merchant being robbed by those highly suspicious characters. Eventually, after making really sure you are not being followed, you end up back where you first met him. He's still resting by the tree you first found him at.",
                    ],
                    //Step 20
                    [
                        "'Huh? Oh, you're back... Wait, did they really let you borrow a cart?' he asks you quizzingly. He gets on his feet and dusts his pants. 'That's really surprising. I know my collegues are a bit...eccentric. Well, former collegues.'",
                    ],
                    //Step 21
                    [
                        "'They shot you?! Oh, and you're still standing? I must say, I may have underestimated you. Let me introduce myself, my name is Jack Ledger. I'm a bit of a legend in these parts. But you...you have potential, kid.'",
                    ],
                    //Step 22
                    [
                        "'Oh, don't trouble yourself any further, with your shoulder you should probably go home and rest. I've already taken the liberty to hire someone to do the heavy lifting.' He points at a large figure out by the road. They come over, and you see that it's a giant ripped woman, probably larger than a bear, and with brown pigtails.",
                    ],
                    //Step 23
                    [
                        "The woman looks at you scornfully, but eventually relaxes her gaze and talks to Jack: 'I get paid by the hour, you want to go?'",
                    ],
                    //Step 24
                    [
                        "'Right, did I promise you a reward?' Jack smiles. He puts his hands under the hood of the cart and pulls out a pouch. 'This pouch contains valuable seeds not found anywhere else in these woods. I'm not sure if you know what to do with them, but you'll be sure to get a good penny for them if not.'",
                    ],
                    //Step 25
                    [
                        "'Do not worry yourself, you have done me a great service. If you are ever in the Deep Woods, seek me out. With my bodyguard here, nobody is going to stop us.'",
                    ],
                    //Step 26
                    [
                        "The woman starts loading the empty cart with heavy bags that jingle when they are moved. 'We'll be heading out for the Deep Woods now. It'll be a long journey,' Jack exclaims excitedly."
                    ],
                    //Step 27
                    [
                        "'Hahaha! I changed my mind, these minerals are far too valuable to simply store in my home. I'm going to sell them in the city. Anyway, you got your reward, so I'll see you another time! Thanks for your help.' And with that, Jack and his bodyguard pick up the two carts and trail off to the west."
                    ],


                ],

            },
        ],

        otherVariables: [

            loop = {
                i: 0,
            },

            levelfactor = {
                health: 0,
                ad: 0,
                speed: 0,

                experience: 0,
            },

            enemygrowth = {
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

            enemy = {
                current: {
                    name:'',
                    health:''
                },
            },

            traps = {
                trapsornot: true,
            },

            enemybuff = {
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

            save = {
                havesaved: false,
            },

        ],

    }
