import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    posts: [
        {
            username: String,
            caption: String,
            userPicture: String,
            picturePath: String,
            likes: [],
            comments: []
        }
    ],
})

export default mongoose.model("Post",PostSchema);