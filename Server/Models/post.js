//Server/models/post.js
import mongoose from "mongoose";
// import { ObjectId } from "Schema.Types";
// const Schema = mongoose.Schema;
// const ObjectId = mongoose.SchemaTypes.ObjectId;
// const ObjectId = Schema.Types;
const {ObjectId} = mongoose.Schema.Types;
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: "User"  
    }
});
mongoose.model("Post",postSchema);
