const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todos", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs given",
        })
        return;
    }
    // to create in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    
    res.json({
        todos: []
    })

})

app.delete("/todos", async function(req, res) {
    const id=req.headers.id;
    const response = await todo.findByIdAndRemove(id);

    if(!response.success){
        res.send('id not found')
    } else{
        
        res.send(' deleted '+{id})
    }
})

app.listen(3000);