export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.id}</h1>
                <h2>{todo.text}</h2>
                <button>{todo.completed == true ? "submit" : "Mark as Complete"}</button>
                <button>Delete</button>
            </div>
        })}
    </div>
}