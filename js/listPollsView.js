function updateListPollsView() {
    const app = document.getElementById("app");
    let loopLength = model.polls.length
    app.innerHTML = "<h1>Liste over polls</h1><br><button onclick='editPoll(null)'>NyPoll</button></br>"
    if (loopLength == 0) {
        app.innerHTML = "Du har null polls!";
    } else {
        for (let poll of model.polls) {
            app.innerHTML += poll.question+` <button onclick='editPoll(${poll.id})'>Endre</button></br>`;
    }

}}