function getCurrentPoll() {
    const pollId = model.app.currentPoll;
    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}