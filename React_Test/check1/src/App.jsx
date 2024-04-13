import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/todos";
const App = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setTodos(data);
      // console.log(data);
    } catch (error) {
      console.log("Error is ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const visibleTodos = todos.slice(0, 10);
  return (
    <>
      <div>
        <h1>Rahul React</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {visibleTodos.map((todo) => {
              return (
                <>
                  <tr>
                    <th scope="row">1</th>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;

// https://jsonplaceholder.typicode.com/todos

// useEffect(() => {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }, []);
