//Server/models/post.js
import mongoose from "mongoose";
// import { ObjectId } from "mongoose.Schema.Types";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
// const ObjectId = mongoose.Schema.Types.ObjectId;

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
        // type: Schema.Types.ObjectId,
        ref: "User"  
    }
});

mongoose.model("Post",postSchema);
