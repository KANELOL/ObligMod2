function updateListPollsView() {
    let loopLength = model.polls.length
    document.getElementById("app").innerHTML = "<h1>Liste over polls</h1><br><button onclick='editPoll(null)'>NyPoll</button></br>"
    if (loopLength == 0) {
        document.getElementById("app").innerHTML = "Du har null polls!";
    } else {
        for (let poll of model.polls) {
            document.getElementById("app").innerHTML += poll.question+` <button onclick='editPoll(${poll.id})'>Endre</button></br>`;
        // for (let i = 0; i < loopLength; i++) {
        //     document.getElementById("app").innerHTML += model.polls[i].question+` <button onclick='editPoll(${model.polls[i].pollId})'>Endre</button></br>`;
    }

}}