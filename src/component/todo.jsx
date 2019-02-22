import React from 'react';

const Todo = () => {
    const styles = {color : "blue"} 
    return (
        <div>
            <h4 style= {{color:"red"}}>This is to-do list</h4>

            <input type = "checkbox" />
            <p style={styles}>place holder text here</p>

        </div>
    );
}

export default Todo;