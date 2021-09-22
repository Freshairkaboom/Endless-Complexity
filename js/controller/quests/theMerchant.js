function theMerchant() {

    updateQuest(
        model.exploreview.quests.theMerchantQuest.intro[0],
        `<button class="actionButton" onclick="theMerchantChapter1()">Start quest</button>`,
        `<button class="actionButton" onclick="ignoreQuest()">Ignore quest</button>`,
        `<button class="actionButton" onclick=""></button>`,
        `<button class="actionButton" onclick=""></button>`
        );

    view();
}

function theMerchantChapter1() {

    updateQuest(
        model.exploreview.quests.theMerchantQuest.chapter1[0],
        `<button class="actionButton" onclick="theMerchantStep1Choice1()">I'm looking for a quest</button>`,
        `<button class="actionButton" onclick="theMerchantStep1Choice2()">Are you okay?</button>`,
        `<button class="actionButton" onclick="theMerchantStep1Choice3()">Awfully clean hands you got</button>`,
        `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
        );

    view();

}


    //Step 1
    function theMerchantStep1Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[1][0],
            `<button class="actionButton" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton" onclick="theMerchantStep2Choice2()">I can get my hands dirty</button>`,
            `<button class="actionButton" onclick="theMerchantStep1Choice3()">Awfully clean hands you got</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }
    function theMerchantStep1Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[1][1],
            `<button class="actionButton" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton" onclick="theMerchantStep2Choice2()">I can get my hands dirty</button>`,
            `<button class="actionButton" onclick="theMerchantStep1Choice3()">Awfully clean hands you got</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }
    function theMerchantStep1Choice3() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[1][2],
            `<button class="actionButton" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton" onclick="theMerchantStep2Choice2()">I can get my hands dirty</button>`,
            `<button class="actionButton" onclick=""><del>Awfully clean hands you got</del></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }

    //Step 2
    function theMerchantStep2Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[2][0],
            `<button class="actionButton" onclick="theMerchantStep3Choice1()">Sure thing</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice3()">What's in it for me?</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }
    function theMerchantStep2Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[2][1],
            `<button class="actionButton" onclick="theMerchantStep3Choice1()">Sure thing</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice3()">What's in it for me?</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }
    function theMerchantStep2Choice3() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[1][2],
            `<button class="actionButton" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton" onclick=""><del>Awfully clean hands you got</del></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }

    //Step 3
    function theMerchantStep3Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[3][0],
            `<button class="actionButton" onclick="theMerchantStep4Choice1()">Lets go</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }
    function theMerchantStep3Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[3][1],
            `<button class="actionButton" onclick="theMerchantStep4Choice1()">Sure thing</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice2()"><del>Fiery caverns?</del></button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice3()">What's in it for me?</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }
    function theMerchantStep3Choice3() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[3][2],
            `<button class="actionButton" onclick="theMerchantStep4Choice1()">Sure thing</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton" onclick="theMerchantStep3Choice3()"><del>What's in it for me?</del></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();

    }

    //Step 4
    function theMerchantStep4Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[4][0],
            `<button class="actionButton" onclick="theMerchantStep5Choice1()">How is this so heavy...?</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();
    }

    //Step 5
    function theMerchantStep5Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[5][0],
            `<button class="actionButton" onclick="theMerchantStep6Choice1()">I will manage</button>`,
            `<button class="actionButton" onclick="theMerchantStep6Choice2()">How did you pull it here?</button>`,
            `<button class="actionButton" onclick="theMerchantStep7Choice1()">Maybe offload some cargo?</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();
    }

    //Step 6
    function theMerchantStep6Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[6][0],
            `<button class="actionButton" onclick=""><del>I will manage</del></button>`,
            `<button class="actionButton" onclick="theMerchantStep6Choice2()">How did you pull it here?</button>`,
            `<button class="actionButton" onclick="theMerchantStep7Choice1()">Maybe offload some cargo?</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();
    }
    function theMerchantStep6Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[6][1],
            `<button class="actionButton" onclick="theMerchantStep6Choice1()">I will manage</button>`,
            `<button class="actionButton" onclick=""><del>How did you pull it here?</del></button>`,
            `<button class="actionButton" onclick="theMerchantStep7Choice1()">Maybe offload some cargo?</button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();
    }

    //Step 7
    function theMerchantStep7Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter1[7][0],
            `<button class="actionButton" onclick="theMerchantChapter2()">Consider it done</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        view();
    }

    //Chapter 2 Step 8
    function theMerchantChapter2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[0][0],
            `<button class="actionButton" onclick="theMerchantStep9Choice1()">Approach them</button>`,
            `<button class="actionButton" onclick="theMerchantStep9Choice2()">Hide and wait</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

            view();

    }

    //Step 9
    function theMerchantStep9Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[1][0],
            `<button class="actionButton" onclick="theMerchantStep10Choice1()">Ugh...</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        player.health -= 25;
        if (player.health < 1) death();

        view();
    }
    function theMerchantStep9Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[1][1],
            `<button class="actionButton" onclick="theMerchantStep10Choice2()">Continue hiding</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick="endQuest()">*Leave*</button>`
            );

        pmvariables.experiencepoints += 10;

        if (pmvariables.experiencepoints >= getExpReq()) {
            levelUp();
            menu.status = 'You levelled up!';

            setTimeout(()=>{
                model.exploreview.quests.theMerchantQuest.chapter2[2][1]
                view();
            },3000);
        }

        view();

    }

    //Step 10
    function theMerchantStep10Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[2][0],
            `<button class="actionButton" onclick="theMerchantStep11Choice1()">I'm...fine</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();

    }
    function theMerchantStep10Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[2][1],
            `<button class="actionButton" onclick="theMerchantStep11Choice2()">Ugh...</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        player.health -= 25;
        if (player.health < 1) death();

        view();
    }

    //Step 11
    function theMerchantStep11Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[3][0],
            `<button class="actionButton" onclick="theMerchantStep12Choice1()">I'm a forest guardian</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        player.health += 25;
        view();
    }
    function theMerchantStep11Choice2() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[3][1],
            `<button class="actionButton" onclick="theMerchantStep12Choice1()">I'm....a forest guardian</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 12
    function theMerchantStep12Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[4][0],
            `<button class="actionButton" onclick="theMerchantStep13Choice1()">She's my captain</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 13
    function theMerchantStep13Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[5][0],
            `<button class="actionButton" onclick="theMerchantStep14Choice1()">I'm helping out a merchant</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 14
    function theMerchantStep14Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[6][0],
            `<button class="actionButton" onclick="theMerchantStep15Choice1()">Well...he asked me to get him a cart because his was too heavy to move</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 15
    function theMerchantStep15Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[7][0],
            `<button class="actionButton" onclick="theMerchantStep16Choice1()">I...don't know.</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 16
    function theMerchantStep16Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[8][0],
            `<button class="actionButton" onclick="theMerchantStep17Choice1()">Thank you, I'm sure he will reward you for your efforts later</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 17
    function theMerchantStep17Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[9][0],
            `<button class="actionButton" onclick="theMerchantStep18Choice1()">Jack huh? I did wonder what his name was...Thanks again</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 18
    function theMerchantStep18Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[10][0],
            `<button class="actionButton" onclick="theMerchantStep19Choice1()">Continue</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 19
    function theMerchantStep19Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[11][0],
            `<button class="actionButton" onclick="theMerchantStep20Choice1()">Hey, I got the cart you asked for</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 20
    function theMerchantStep20Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[12][0],
            `<button class="actionButton" onclick="theMerchantStep21Choice1()">I guess they felt they owed me for shooting me in the shoulder</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 21
    function theMerchantStep21Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[13][0],
            `<button class="actionButton" onclick="theMerchantStep22Choice1()">And I'm ${player.name}. Nice to make your acquaintance. Well, shall we go?</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 22
    function theMerchantStep22Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[14][0],
            `<button class="actionButton" onclick="theMerchantStep23Choice1()">H-hello there</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 23
    function theMerchantStep23Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[15][0],
            `<button class="actionButton" onclick="theMerchantStep24Choice1()">What about me?</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 24
    function theMerchantStep24Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[16][0],
            `<button class="actionButton" onclick="theMerchantStep25Choice1()">Oh thanks...are you going to be okay?</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 25
    function theMerchantStep25Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[17][0],
            `<button class="actionButton" onclick="theMerchantStep26Choice1()">I guess you'll be fine then</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 26
    function theMerchantStep26Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[18][0],
            `<button class="actionButton" onclick="theMerchantStep27Choice1()">Weren't you going to your home?</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

    //Step 27
    function theMerchantStep27Choice1() {

        updateQuest(
            model.exploreview.quests.theMerchantQuest.chapter2[19][0],
            `<button class="actionButton" onclick="completeQuest()">Complete quest</button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`,
            `<button class="actionButton" onclick=""></button>`
            );

        view();
    }

function completeQuest() {
    model.exploreview.player.bag.gold += 500;
    model.exploreview.menu.status = 'You get 5 magic seeds. Unfortunately you do not know how to farm yet, so you sell them for 500 gold instead.';
    view();

        setTimeout(()=>{
            model.exploreview.quests.theMerchantQuest.completion = true;
            sectorForest2('back');
        },3000);

    view();
}


function ignoreQuest() {

    updateQuest(
        "The figure is not interesting enough to pique your curiosity, so you head back to the road.",
        `<button class="actionButton" onclick=""></button>`,
        `<button class="actionButton" onclick="sectorForest1(direction.west)">Go west</button>`,
        `<button class="actionButton" onclick="sectorForest3(direction.east)">Go east</button>`,
        `<button class="actionButton" onclick="sectorForest5(direction.south)">Go south</button>`
        );

    time.event = true;

    view();
}

function endQuest() {

    updateQuest(
        "You decide to leave the merchant behind and head back to the crossroads. Hopefully he's not too mad about it.",
        `<button class="actionButton" onclick=""></button>`,
        `<button class="actionButton" onclick="sectorForest1(direction.west)">Go west</button>`,
        `<button class="actionButton" onclick="sectorForest3(direction.east)">Go east</button>`,
        `<button class="actionButton" onclick="sectorForest5(direction.south)">Go south</button>`,
        );

    time.event = true;

    view();
}
