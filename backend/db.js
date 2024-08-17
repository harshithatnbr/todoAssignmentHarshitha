const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://harshithatnbr2001:harshitha1234@cluster0.fcnwo6y.mongodb.net/todoapp")
const todoSchema = mongoose.Schema({
    id: String,
    text: String,
    submit: Boolean
})

const todo = mongoose.model('todoapp', todoSchema);

module.exports = {
    todo
}