// Blir kjørt i createPollPageView.js updateViewCreateVotePage()
// <button onclick="createOrUpdatePoll()" 
function createOrUpdatePoll() {
    const inputObj = model.app.currentPoll == null ? model.inputs.createPoll : JSON.parse(JSON.stringify(model.polls[model.app.currentPoll]));
    console.log("InputObj ppCont ID:", inputObj.pollId)
    const deleteCount = model.app.currentPoll == null ? 0 : 1;
    const placement = model.app.currentPoll == null ? 0 : model.app.currentPoll;
    const newId = model.app.currentPoll == null ? model.polls.length : inputObj.id;
    //console.log("Placement: ",placement ,"DeleteCount:", deleteCount, "InputObj: ", inputObj,"Model app current Poll", model.app.currentPoll);
    //console.log("Splicing");
    model.polls.splice(placement,
        deleteCount,{
        id: newId, //Satt bare noe her imens - K
        isOpen: true,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: model.inputs.createPoll.question,
        options: [...inputObj.options],
        votes: {},
    });
    //console.log("Spliced element: ", model.polls[placement])
    //console.log("Updating View");
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

// function createNewPoll() {
//     console.log("creatingNewPoll")
//     model.inputs.createPoll = {
//         pollId: model.polls.length,
//         newAlternative: '',
//         question: 'New Poll',
//         options: ['A', 'B', 'C'],
//         usersCanAddAlternatives: true,
//     };
//     model.app.currentPage ="createPoll";
//     model.app.currentPoll =null;
//     updateView();
//     console.log("-----Kjører updateView---");
// }
function getPollId(id){
    if (id !== null) {
     return JSON.stringify(model.polls[model.app.currentPoll]);
    } else {
        return console.log("Id er Null",0);
    }};
    // function updateAlternative(){
    // model.inputs.createPoll.newAlternative = JSON.stringify(document.getElementById(`divNewAlternative`));
    // console.log(`model.inputs.createPoll.newAlternative`);
    // }






   // if (model.app.currentPage == "createPoll") {
    //     const inputObj = model.inputs.createPoll;
    //     inputObj = {
    //         pollId: null,
    //         newAlternative: '',
    //         question: 'New Poll',
    //         options: ['A', 'B', 'C'],
    //         usersCanAddAlternatives: true,
    //     },
    //     console.log("createPoll");
    // } else {
    //     inputObj = getCurrentPoll();
    //     console.log("updatePoll");
    // } 

//    if(model.app.currentPage == `createPoll`){
//     console.log(model.app.currentPage); 
//        model.inputs.createPoll = {
//         pollId: null,
//         newAlternative: '',
//         question: 'New Question',
//         options: ['Geir', 'Eskil', 'Terje'],
//         usersCanAddAlternatives: true,
//        }
//     } else {
//         model.inputs.createPoll = model.polls[model.currentPoll];
//         console.log(model.polls[model.currentPoll]);
// //  

// model.currentPoll !== null ? model.polls[model.currentPoll]
// }