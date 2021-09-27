function enterWindingPaths() {
    if (player.bag.windingmap == 0) {
        menu.status = "You peek into the closest path, but it immediately disappears to the left in a myriad of dense trees, and seeing as you don't have a map, you find it unwise to continue."
        view();
    }
    else if (player.bag.windingmap == 1) {
        menu.status = "With the winding map in hand, you brave the treacherous path leading deeper into the forest. Where would you like to go?"

        button.firstaction = `<button class="actionButton" onclick="">Take first path</button>`;

        button.secondaction = `<button class="actionButton" onclick="">Take second path</button>`;

        button.thirdaction = `<button class="actionButton" onclick="">Take third path</button>`;

        button.fourthaction = `<button class="actionButton" onclick="sectionForest6(direction.west)">Go back to footpath</button>`;
        view();
    }
}
