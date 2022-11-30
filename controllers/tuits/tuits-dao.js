import tuitsModel from './tuits-model.js';

export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({id: tid}, {$set: tuit})