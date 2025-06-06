import mongoose from "mongoose";
const  todoSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Todo", todoSchema);