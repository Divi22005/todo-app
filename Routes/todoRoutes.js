import express from 'express';
import todoModel from '../Models/todoModel';

const todoRouter = express.Router();

todoRouter.post('/new', async (req, res) => {
        const { title, description } = req.body;
        const result = await todoModel.insertOne({ title, description });
        return res.json(result);
});

todoRoutes.get('/all', async (req, res) => {
        const result = await todoModel.find({});
        return res.json(result);
});

export default todoRouter;