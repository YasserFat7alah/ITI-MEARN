import express from 'express'
import { createTodo, deleteTodo, readTodos, updateTodo } from './js/controllers.js';


/* ========= APP INIT ========== */
const app = express()

/* ========= MIDDLEWARES ========== */
app.use(express.json()) // bodyParser

/* ========= ENDPOINTS ========== */
//Create a new todo
app.post('/todos', (req, res) => {
    console.log(req.body);
    
    const { title, status } = req.body;

    if (!title) {
        res.status(400).json({ error: "❌ You must enter the todo title to add" });
        return;
    }

    createTodo(title, status);
    res.status(201).json({ message: "✅ Added a new todo!" });
});

//Read all todos  **DONE
app.get('/todos', (req, res) => {

    // BONUS PART => Query String limit and skip
    let { limit = 0, skip = 0 } = req.query;
    limit = parseInt(limit);
    skip = parseInt(skip);

    let toView = readTodos();

    if (typeof toView == 'string') {
        res.status(404).json({ message: toView });
        return;
    };

    if (skip || limit) toView = toView.slice(skip, limit ? skip + limit : toView.length);
        
    res.status(200).json(toView);
    return;
});

//Read specific todo by id **DONE
app.get('/todos/:id', (req, res) => {
    const { id } = req.params || '';

    // Validate id
    if (id && ! +id) {
        res.status(400).json({ error: `❌ Format: id {${id}} must be a number..` });
        return;
    }

    const toView = readTodos(id);

    if (typeof toView == 'string') {
        res.status(404).json({ message: toView });
        return;
    };

    res.status(200).json(toView);
    return;
});


//Update specific todo by id
app.patch('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;

    if (id && !+id) {
        res.status(400).json({ error: `❌ Format: id {${id}} must be a number..` });
        return;
    }

    if (!title && !status) {
        res.status(400).json({ error: "⚠️ You must provide title or status to update" });
        return;
    }


    updateTodo('' + id, title || '', status || '');
    res.status(200).json({ message: "✅ The todo has been updated successfully!" });
});


//Delete specific todo by id
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(400).json({ error: `❌ Format: You must define an id to delete` });
        return;
    }


    if (id && !+id) {
        res.status(400).json({ error: `❌ Format: id {${id}} must be a number..` });
        return;
    }

    deleteTodo(id);
    res.status(200).json({ message: "Todo deleted successfully!" });
});


/* ========= SERVER SETUP ========== */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Started Successfully at Port ${PORT}`);

})




