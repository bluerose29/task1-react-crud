import deleteIcon from "./assets/img/DeleteIcon.png";
import { useState, useEffect } from "react";

/**
 *
 * @param {{tasks: {title: string, id: number}[] , title: string, setTasks: ()=> void}}
 * @returns
 */
const TaskList = ({ tasks, title, setTasks, ...otherParams }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  function deleteTask(id) {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        return result.json();
      })
      .then(() => {
        setTasks((prevState) => prevState.filter((filter) => filter.id !== id));
      })
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });
  }

  // const newObject = {
  //   firstKey: 1,
  //   secondKey: 2,
  // }
  // const arrayOfKeys = Object.keys(newObject)
  // // ['firstKey', 'secondKey']

  // const arrayOfValues = Object.values(newObject)
  // // [1, 2]

  // const arrayOfTuples = Object.entries(newObject)
  // [['firstKey', 1], ['secondKey', 2]]

  const [count] = useState(tasks.length);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("I ran at first render");
  }, []);

  useEffect(() => {
    console.log(checkedState);
  }, [checkedState, tasks]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalunFinishTask = updatedCheckedState.reduce(
      (left, currentState, index) => {
        if (currentState === true) {
          return (left += 1);
        }
        return left;
      },
      0
    );

    setTotal(totalunFinishTask);
  };

  // tasks.find((fi, index) => index === 0);
  // const newTasks = tasks.forEach((task, index, tasksArray) => {
  //   return {
  //     ...task,
  //     newKey: index,
  //   };
  // });

  // const newTasksMapped = tasks.map((ea, index) => {
  //   return ({
  //     ...ea,
  //     // index:index,
  //     amountOfWork: index + 1
  //   })
  // });

  // const totalOfTasks = newTasksMapped.reduce((accumulator, item, index) => {
  //   return accumulator = accumulator + item.amountOfWork
  // }, 0)

  // console.log(totalOfTasks)

  return (
    <div className="task-view">
      <p>{count - total} Unfinished Task</p>
      {tasks.map(({ title, id }, index) => {
        return (
          <div className="task-items" key={index}>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label>{title}</label>
            </div>
            <button onClick={() => deleteTask(id)}>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
