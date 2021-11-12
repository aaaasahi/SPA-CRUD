import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const DetailTask = () => {

  const { state } = useLocation();

  const [task, setTask] = useState(state);

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
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}