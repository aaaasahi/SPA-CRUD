import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export const DetailTask = () => {
  const { state } = useLocation();
  const [task, setTask] = useState(state);
  const history = useHistory();

  const onChangeInput = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const updateTask = () => {
    axios.patch(`http://localhost:8000/api/tasks/${task.id}`, task)
      .then(response => {
        console.log(response.data);
        history.push("/tasks");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">
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
                name="text"
                onChange={onChangeInput}
                />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6 d-grid gap-2">
              <button 
                className="btn btn-outline-success"
                onClick={updateTask}
              >
                Update
              </button>
            </div>
            <div className="col-6 d-grid gap-2">
              <button className="btn btn-outline-danger" >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}