//Server/models/post.js
import mongoose from "mongoose";
// import { ObjectId } from "mongoose.Schema.Types";


// const ObjectId = mongoose.Schema.Types.ObjectId;
 const ObjectId = mongoose.Schema.ObjectId;
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
        ref: "user"  
    }
});

mongoose.model("Post",postSchema);