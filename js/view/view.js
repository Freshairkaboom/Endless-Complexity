function view() {

    switch (model.app.currentView) {
        case 'startView':
            startView();
            break;
        case 'mainView':
            mainView();
            break;
        case 'fightView':
            fightView();
            break;
        case 'exploreView':
            exploreView();
            break;
        case 'skillView':
            skillView();
            break;
        case 'studyView':
            studyView();
            break;
    }
}
