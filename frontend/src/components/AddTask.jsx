export const AddTask = () => {
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
                required
                name="title"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="form-title">Text</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};