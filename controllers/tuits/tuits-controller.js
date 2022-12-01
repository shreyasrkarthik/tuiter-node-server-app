// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from '../tuits/tuits-dao.js'

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);

}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits)
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.profileImage = "nodejs.png";
    newTuit.descriptionImage = "nodejs.png";
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.time = "2h";
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.description = req.body.tuit;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    console.log(req.params);

    const status = await tuitsDao.deleteTuit(parseInt(tuitdIdToDelete));
    console.log(status);
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    res.json(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    console.log(tuitdIdToUpdate);
    console.log(updates);
    // const tuitIndex = tuits.findIndex(
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] =
    //     { ...tuits[tuitIndex], ...updates };
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    console.log(status);
    res.json(status);
}

export default TuitsController;