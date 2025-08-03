import { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
   
   
    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>

            <div>
                <input type="text" placeholder='Enter new task..'/>
            </div>
        </div>
    );
}

export default ToDoList;