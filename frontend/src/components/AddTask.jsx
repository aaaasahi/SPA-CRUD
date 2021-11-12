import { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export const AddTask = () => {

  const initialState = {
    id: null,
    title: "",
    text: "",
  };

  const [task, setTask] = useState(initialState);
  const history = useHistory();

  const onChangeInput = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const saveTask = () => {
    var data = {
      title: task.title,
      text: task.text
    };

    axios.post('http://localhost:8000/api/tasks', data)
      .then(resp => {
        setTask({
          id: resp.data.id,
          title: resp.data.title,
          text: resp.data.text
        });
      console.log(resp.data);
      history.push('/tasks');
    })
  .catch(e => {
    console.log(e)
  })
};


  return (
    <div className="container">
      <h2 className="text-center m-5">Add Task</h2>
      <div className="card w-50 mx-auto">
        <div className="card-body">
          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={task.title}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="form-title">Text</label>
              <textarea 
                className="form-control" 
                rows="3"
                value={task.text}
                onChange={onChangeInput}
                name="text"
                />
            </div>
          </div>
          <div className="text-center">
            <button onClick={saveTask} className="btn btn-outline-primary mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};