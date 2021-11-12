import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { DetailTask } from "./components/DetailTask";

export const App = () => {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-secondary">
      <a href="/tasks" className="navbar-brand nav-title">
        TaskApp
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tasks"} className="nav-link">
            Task List
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            AddTodo
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
      <Switch>
        <Route exact path={["/", "/tasks"]} component={TaskList} />
        <Route exact path="/add" component={AddTask} />
        <Route path="/tasks/:id" component={DetailTask} />
      </Switch>
    </div>
  </BrowserRouter>
  )
};

