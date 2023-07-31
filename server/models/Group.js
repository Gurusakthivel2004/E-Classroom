import mongoose from "mongoose"

const GroupSchema = new mongoose.Schema({
    leader: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    group_name: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    posts: {
        type: Array,
        required: true,
    },
    members: {
        type: Array,
        required: true,
    }
})

export default mongoose.model("Group",GroupSchema);
