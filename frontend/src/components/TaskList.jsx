import { useEffect, useState } from 'react';
import axios from 'axios';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    axios.get('http://localhost:8000/api/tasks')
      .then(response => {
        setTasks(response.data)
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <h2 className="text-center m-5">Task List</h2>
      <div className="card w-50 mx-auto">
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li className={"list-group-item"} key={index}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}