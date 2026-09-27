import{useState} from "react"
import{ v4 as uuidv4} from "uuid";

export default function Tracker() {
  let [tasks, setTasks] = useState([]);
  let [newtask, setnewTask] = useState("");

  let addTask = () => {
    setTasks([...tasks, {ta:newtask, id: uuidv4(), isdone:false}]);
    setnewTask("");
  }
  let deleteTask = (id) => {
    setTasks(tasks.filter((task) =>( task.id !== id)));
  }
  let markall =() =>{
    setTasks(tasks.map((task) => {
      return{...task, isdone:true}
     }));
  }
  let mark=(id) =>{
    setTasks(tasks.map((task) => {
      if(task.id === id){
        return{...task,isdone:true}
      }
      else{
      return task;
      }
     }));
}
return<div className="container">
    <h1>Task Tracker</h1>
    <hr></hr>
    <h3> Add Task </h3>
    <input placeholder="Enter a new task" type="text" value={newtask} onChange={(e) => setnewTask(e.target.value)}></input>
    <button className="add btn-primary" onClick={addTask}>Add Task</button>
    <hr></hr>
    <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                {/* <input type="checkbox" checked={task.isdone} onChange={() => mark(task.id)}></input> */}
                <span className={task.isdone ? "done" : "" } style={{textDecoration: task.isdone ? "line-through" : "none"}}>{task.ta}</span>
                <button className="delete btn-danger" onClick={() => deleteTask(task.id)}>Remove Task</button>
                <button className="add-btn" onClick={() => mark(task.id)}>Mark as Done</button>
            </li>
        ))}
    </ul>
    <button className="all-btn" onClick={markall}>Mark All as Done</button>
</div>
}