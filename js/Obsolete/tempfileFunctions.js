//Used as an argument when Fight event option is chosen from main menu - Sets random areas, and returns a enemy based on random logic.
function randomEncounter() {
    //Set all enemy health
    bandit.health = 40 + Math.ceil(Math.random()*21) + Math.floor(50 * enemygrowth.health);
    banditLeader.health = 80 + Math.ceil(Math.random()*41) + Math.floor(100 * enemygrowth.health);

    //Pick areas you can find in Assess Area event option at random.
    model.randomObjects[0] = getRandomObject();
    model.randomObjects[1] = getRandomObject();
    model.randomObjects[2] = getRandomObject();

    //Pick enemy at random.
    random = Math.ceil(Math.random() * 10);

    if (menu.round == 10 + enemybuff.interval) {
        enemybuff.interval += 10;
        enemygrowth.health += 0.30;
        enemygrowth.ad += 0.30;
        enemygrowth.speed += 0.30;
        return banditLeader;
    }
    if (random == 10 && menu.round > 10) return banditLeader;
    else return bandit;

}
