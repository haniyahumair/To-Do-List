import { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {}
   
   
    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>

            <div>
                <input type="text" placeholder='Enter new task..' value={newtask} onChange={handleInputChange}/>
                <button className='add-task-button' onClick={addTask}> Add </button>
            </div>
        </div>
    );
}

export default ToDoList;