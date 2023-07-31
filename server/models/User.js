import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 20,
    },
    friends: {
        type: Array,
        required: false,
    },
    picturePath: {
        type: String,
        required: true
    },
    groups: {
        type: Array,
        required: false
    },
    posts: {
        type: Array,
        required: false
    },
    notes: {
        type: Array,
        required: false
    },
    likes : {
        type: Array,
        required: false
    }
})

export default mongoose.model("User",UserSchema);
