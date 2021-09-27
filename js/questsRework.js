function theMerchant() {
    if(theMerchantQuest.completion == true) return;

    theMerchantQuest.menu.questText.forEach(status => {
        if (status[i].id == theMerchantQuest.chapter && status[i].id == theMerchantQuest.step) {
            menu.status = status[i].text;
        }
    })

    theMerchantQuest.menu.questText;

    theMerchantQuest.menu.buttons.forEach(button => {
        button[i] = `<button class="actionButton" onclick="${theMerchantQuest.menu.buttons.onclick[i]}">${theMerchantQuest.menu.buttons.name[i]}</button>`
    });


}
