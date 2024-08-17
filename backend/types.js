const zod = require("zod");

const createTodo = zod.object({
    text: zod.string()
})


module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}