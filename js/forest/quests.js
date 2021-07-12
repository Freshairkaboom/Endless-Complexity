function theMerchant() {

    updateQuest(
        theMerchantQuest.intro[0],
        `<button class="actionButton exploreSequence" onclick="theMerchantChapter1()">Start quest</button>`,
        `<button class="actionButton exploreSequence" onclick="ignoreQuest()">Ignore quest</button>`,
        `<button class="actionButton exploreSequence" onclick=""></button>`,
        `<button class="actionButton exploreSequence" onclick=""></button>`
        );

    updateView();
}

function theMerchantChapter1() {

    updateQuest(
        theMerchantQuest.chapter1[0],
        `<button class="actionButton exploreSequence" onclick="theMerchantStep1Choice1()">I'm looking for a quest</button>`,
        `<button class="actionButton exploreSequence" onclick="theMerchantStep1Choice2()">Are you okay?</button>`,
        `<button class="actionButton exploreSequence" onclick="theMerchantStep1Choice3()">Awfully clean hands you got</button>`,
        `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
        );

    updateView();

}


    //Step 1
    function theMerchantStep1Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[1][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice2()">I can get my hands dirty</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep1Choice3()">Awfully clean hands you got</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }
    function theMerchantStep1Choice2() {

        updateQuest(
            theMerchantQuest.chapter1[1][1],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice2()">I can get my hands dirty</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep1Choice3()">Awfully clean hands you got</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }
    function theMerchantStep1Choice3() {

        updateQuest(
            theMerchantQuest.chapter1[1][2],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice2()">I can get my hands dirty</button>`,
            `<button class="actionButton exploreSequence" onclick=""><del>Awfully clean hands you got</del></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }

    //Step 2
    function theMerchantStep2Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[2][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice1()">Sure thing</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice3()">What's in it for me?</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }
    function theMerchantStep2Choice2() {

        updateQuest(
            theMerchantQuest.chapter1[2][1],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice1()">Sure thing</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice3()">What's in it for me?</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }
    function theMerchantStep2Choice3() {

        updateQuest(
            theMerchantQuest.chapter1[1][2],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep2Choice1()">Do you need any help?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton exploreSequence" onclick=""><del>Awfully clean hands you got</del></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }

    //Step 3
    function theMerchantStep3Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[3][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep4Choice1()">Lets go</button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }
    function theMerchantStep3Choice2() {

        updateQuest(
            theMerchantQuest.chapter1[3][1],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep4Choice1()">Sure thing</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice2()"><del>Fiery caverns?</del></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice3()">What's in it for me?</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }
    function theMerchantStep3Choice3() {

        updateQuest(
            theMerchantQuest.chapter1[3][2],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep4Choice1()">Sure thing</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice2()">Fiery caverns?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep3Choice3()"><del>What's in it for me?</del></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();

    }

    //Step 4
    function theMerchantStep4Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[4][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep5Choice1()">How is this so heavy...?</button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }

    //Step 5
    function theMerchantStep5Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[5][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep6Choice1()">I will manage</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep6Choice2()">How did you pull it here?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep7Choice1()">Maybe offload some cargo?</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }

    //Step 6
    function theMerchantStep6Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[6][0],
            `<button class="actionButton exploreSequence" onclick=""><del>I will manage</del></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep6Choice2()">How did you pull it here?</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep7Choice1()">Maybe offload some cargo?</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }
    function theMerchantStep6Choice2() {

        updateQuest(
            theMerchantQuest.chapter1[6][1],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep6Choice1()">I will manage</button>`,
            `<button class="actionButton exploreSequence" onclick=""><del>How did you pull it here?</del></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep7Choice1()">Maybe offload some cargo?</button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }

    //Step 7
    function theMerchantStep7Choice1() {

        updateQuest(
            theMerchantQuest.chapter1[7][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantChapter2()">Consider it done</button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }

    //Chapter 2
    function theMerchantChapter2() {

        updateQuest(
            staggeredText(theMerchantQuest.chapter2[0][0]),
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`,
            `<button class="actionButton exploreSequence" onclick=""></button>`
            );

            updateView();

        pmvariables.experiencepoints += 150;
        theMerchantQuest.completion = true;


        if (pmvariables.experiencepoints >= getExpReq()) {
            setTimeout(()=>{
                levelUp();
                menu.status = 'You levelled up!';
                updateView();

                setTimeout(()=>{
                    reset();
                },3000);
            },12000);

        }

    }

    function theMerchantStep9Choice1() {

        updateQuest(
            theMerchantQuest.chapter2[1][0],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice1()">Approach them</button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice2()"></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice3()"></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }
    function theMerchantStep9Choice2() {

        updateQuest(
            theMerchantQuest.chapter2[0][1],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice1()"></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice2()"></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice3()"></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }
    function theMerchantStep9Choice3() {

        updateQuest(
            theMerchantQuest.chapter2[0][2],
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice1()"></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice2()"></button>`,
            `<button class="actionButton exploreSequence" onclick="theMerchantStep9Choice3()"></button>`,
            `<button class="actionButton exploreSequence" onclick="endQuest()">*Leave*</button>`
            );

        updateView();
    }

    //Step 10

    //Step 11

    //Step 12

    //Step 13

    //Step 14

    //Step 15

    //Step 16

    //Step 17

    //Step 18

    //Step 19

    //Step 20



function ignoreQuest() {

    updateQuest(
        "The figure is not interesting enough to pique your curiosity, so you head back to the road.",
        `<button class="actionButton exploreSequence" onclick=""></button>`,
        `<button class="actionButton exploreSequence" onclick="sectorForest1(direction.west)">Go west</button>`,
        `<button class="actionButton exploreSequence" onclick="sectorForest3(direction.east)">Go east</button>`,
        `<button class="actionButton exploreSequence" onclick="sectorForest5(direction.south)">Go south</button>`
        );

    time.event = true;

    updateView();
}

function endQuest() {

    updateQuest(
        "You decide to leave the farmer behind and head back to the crossroads. Hopefully he's not too mad about it.",
        `<button class="actionButton exploreSequence" onclick=""></button>`,
        `<button class="actionButton exploreSequence" onclick="sectorForest1(direction.west)">Go west</button>`,
        `<button class="actionButton exploreSequence" onclick="sectorForest3(direction.east)">Go east</button>`,
        `<button class="actionButton exploreSequence" onclick="sectorForest5(direction.south)">Go south</button>`
        );

    time.event = true;

    updateView();
}
