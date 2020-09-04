// Blir kjørt i createPollPageView.js updateViewCreateVotePage()
function createOrUpdatePoll() {
    const inputObj = model.app.currentPoll == null ? model.inputs.createPoll : JSON.parse(JSON.stringify(model.polls[model.app.currentPoll]));
    console.log("InputObj ppCont ID:", inputObj.pollId)
    const deleteCount = model.app.currentPoll == null ? 0 : 1;
    const placement = model.app.currentPoll == null ? 0 : model.app.currentPoll;
    const newId = model.app.currentPoll == null ? model.polls.length : inputObj.id;

    model.polls.splice(placement,
        deleteCount,{
        id: newId,
        isOpen: true,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: model.inputs.createPoll.question,
        options: [...inputObj.options],
        votes: {},
    });
    console.log("NewId: ", newId);
    model.polls.sort(function(a,b){
        return a.id - b.id;
       })
       console.log("sorted?:", model.polls);
    model.app.currentPoll = newId;
    updateView();
    
}
function addOption() {
    model.inputs.createPoll.options.push(`${model.inputs.createPoll.newAlternative}`);
    updateView();
}

function getPollId(id){
    console.log("Nå kjører getpollId");
    if (id !== null) {
     return JSON.stringify(model.polls[model.app.currentPoll]);
    } else {
        return console.log("Id er Null",0);
    }};