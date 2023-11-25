import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }

});

export const Todo = mongoose.models.todos || mongoose.model('Todo', TodoSchema);