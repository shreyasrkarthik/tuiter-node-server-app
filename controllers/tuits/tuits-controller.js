import posts from "./tuits.js";
let tuits = posts;

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);

}

const findTuits = (req, res) => {
    res.json(tuits)
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.avatarIcon = "nasa_logo.png";
    newTuit.userName = "NASA";
    newTuit.handle = "@nasa";
    newTuit.time = "2h";
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

const updateTuit = (req, res) => {

    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        { ...tuits[tuitIndex], ...updates };
    res.sendStatus(200);
}

export default TuitsController;