import express from 'express';
import todoModel from '../Models/todoModel';

const todoRoutes = express.Router();

todoRouters.post('/new', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new todoModel({ title, description });
        await newTodo.save();
        res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo', error: error.message });
    }
});

todoRoutes.get('/all', async (req, res) => {
    try {
        const todos = await todoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todos', error: error.message });
    }
});

export default todoRoutes;