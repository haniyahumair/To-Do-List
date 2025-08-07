import { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to Gym", "Read a Book", "Complete Assignment"]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {}

    function deleteTask(index) {}

    function moveUp(index) {}
    
    function moveDown(index) {}
   
   
    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>

            <div>
                <input type="text" placeholder='Enter new task..' value={newtask} onChange={handleInputChange}/>
                <button className='add-task-button' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-task'
                        onClick={() => deleteTask(index)}>Delete
                        </button>

                        <button className='move-button'
                        onClick={() => moveUp(index)}> Up
                        </button>

                        <button className='move-button'
                        onClick={() => moveDown(index)}> Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;