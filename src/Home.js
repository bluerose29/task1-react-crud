import addTask from "./assets/img/AddIcon.png";
import useFetch from "./DataFetch";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";

const Home = () => {
  const {
    data: tasksFetch,
    isPending,
    error,
  } = useFetch("http://localhost:8000/tasks"); //npx json-server --watch data/db.json --port 8000
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8000/tasks').then(res => {
  //    return  res.json()
  //   }).then(res => {
  //     setTasks(res)
  //   })
  // },[])
  useEffect(() => {
    setTasks(tasksFetch);
  }, [tasksFetch]);

  const handleSubmit = (e) => {
    const task = { title };
    console.log(task);

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setTasks((prevState) => [...prevState, resJson]);

        /**
         * clear input
         */
        setTitle("");
      });
  };

  useEffect(() => {
    console.log("Site Running");
  }, [title]);
  return (
    <div className="home">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="title">
          <h2>Todo List</h2>
          <button onClick={handleSubmit}>
            <img src={addTask} alt="Add" />
          </button>
        </div>
        <div className="task-list-display">
          {error && <div>{error}</div>}
          {isPending && <div style={{ margin: "15px" }}>Loading Task...</div>}
          {tasks && (
            <TaskList
              setTasks={setTasks}
              tasks={tasks}
              extraProps={1}
              anotherExtraProp={"lkansdflkansdf"}
            />
          )}
        </div>

        <input
          type="text"
          placeholder="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Home;
