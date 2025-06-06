import mongoose from "mongoose";
const  todoSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    createdAt: { type: Date,default: Date.now },
});

export default mongoose.model("To-do", todoSchema);