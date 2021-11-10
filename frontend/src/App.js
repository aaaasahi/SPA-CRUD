import { useEffect } from 'react';
import axios from 'axios';



export const App = () => {

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    axios.get('http://localhost:8000/api/tasks')
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
