import mongoose from 'mongoose';
const schema = mongoose.Schema({
    id: Number,
    topic: String,
    username: String,
    handle: String,
    time: String,
    profileImage: String,
    descriptionImage: String,
    title: String,
    description: String,
    liked: Boolean,
    likes: Number,
    disliked: Boolean,
    dislikes: Number,
    comments: Number,
    retuits: Number

}, {collection: 'tuits'});

export default schema;
