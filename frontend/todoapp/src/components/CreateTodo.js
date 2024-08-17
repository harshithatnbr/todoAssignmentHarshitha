import { useState } from "react";
import React from 'react';
import axios from 'axios';

export function CreateTodo(props) {
    // react-query
   
    const [description, setDescription] = useState("");

    return <div>
        
    
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="text" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                   
                    text: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}