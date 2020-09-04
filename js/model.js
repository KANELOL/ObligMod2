const model = {
    //
    app: {
        currentPoll: null,
        loggedInUser: 'per',
        currentPage: 'createPoll', // denne blir endret av changePage ettersom man klikker på "stem" eller "lag poll"
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],
    //lager options som er inne i pollen, og gir laget poll en id som vi kan referere til senere
    //
    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: '',
            options: ['A'],
            usersCanAddAlternatives: true,
        }
    },
    //jeg tror at denne fyller seg med pollene vi lager???
    polls: [{
        id: 0,
        newAlternative: '',
        question: 'Question 1',
        options: ['2', '3'],
        usersCanAddAlternatives: true,
        votes: {},
    },{
        id: 1,
        newAlternative: '',
        question: 'Question 2',
        options: ['A', 'B', 'C'],
        usersCanAddAlternatives: true,
        votes: {},
    }]
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?

    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/