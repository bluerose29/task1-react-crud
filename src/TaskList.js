import deleteIcon from './assets/img/DeleteIcon.png';
import {useState} from 'react';

const TaskList = ({tasks, title}) => {
    const [checkedState, setCheckedState] = useState(
        new Array(tasks.length).fill(false)
      );

    function deleteTask(id){
        console.log(id);
        fetch(`http://localhost:8000/tasks/${id}`,{
            method: 'DELETE'
        }).then((result) =>{
            result.json().then((resp) => {
                console.warn(resp)
            })
        })   
    }
    const [count] = useState(Object.keys(tasks).length);

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    
        const totalunFinishTask = updatedCheckedState.reduce(
          (left, currentState, index) => {
            if (currentState === true) {
              return left += 1;
            }
            return left;
          },
          0
        );
    
        setTotal(totalunFinishTask);
      };
    return ( 
        <div className="task-view">
            
            <p>{count - total}  Unfinished Task Left</p>
            {tasks.map(({ title, id }, index) => {
          return (
              <div className="task-items">
                  <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label>{title}</label>
                  </div>
                  <button onClick={() => deleteTask(id)}><img src={deleteIcon}/></button>
              </div>
          );
        })}
        </div>
     );
}
 
export default TaskList;