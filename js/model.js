const model = {
    app: {
        currentPoll: null,
        loggedInUser: 'per',
        currentPage: 'createPoll',
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],
    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: '',
            options: ['A'],
            usersCanAddAlternatives: true,
        }
    },
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