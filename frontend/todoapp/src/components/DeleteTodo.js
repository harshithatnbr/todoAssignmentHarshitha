import { useState } from "react";
import React from 'react';
import axios from 'axios';

export function DeleteTodo(props){
    return <div>
       <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/todos", {
                method: "DLETE",
            
                headers: {
                    "Content-type": "application/json",
                    
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("deleted todo");
                })
        }}>Delete</button>
    </div>
    
}