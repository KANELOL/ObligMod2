function editPoll(id) {
    if (id !== null){
        console.log("Har id");
    model.app.currentPage = "editPoll";
     model.app.currentPoll = id;
     model.inputs.createPoll.options = model.polls[id].options
    model.inputs.createPoll.question = model.polls[id].question
     updateView();
} else{
    console.log("Ny Poll");
    model.app.currentPage ="createPoll";
    model.app.currentPoll = null;
    model.inputs.createPoll.newAlternative = '';
            model.inputs.createPoll.question= '';
            model.inputs.createPoll.options= [];
            model.inputs.createPoll.usersCanAddAlternatives= true;
            updateView();

        }
}