import addTask from './assets/img/AddIcon.png';
import useFetch from './DataFetch';
import TaskList from './TaskList';
import { useState, useEffect } from 'react';

const Home = () => {
    const {data: tasks, isPending, error} = useFetch('http://localhost:8000/tasks'); //npx json-server --watch data/db.json --port 8000
    const [title, setTitle] = useState('');

    const handleSubmit = (e) =>{
        const task = {title};
        console.log(task);

        fetch('http://localhost:8000/tasks', {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(task)
        }).then(() =>{
            console.log("New Task")
            console.log({title})
        })
    } 

    useEffect(() => {
        console.log('Site Running')
    },[]);
    return ( 
        <div className="home">
            <form >
            <div className="title">
                <h2>Todo List</h2>
                <button onClick={handleSubmit}><img src={addTask}/></button>
            </div>
            <div className="task-list-display">
                {error && <div>{ error }</div>}
                {isPending && <div style={{margin:"15px"}}>Loading Task...</div>}
                {tasks && <TaskList tasks= {tasks}/>}
            </div>
            
            <input type="text"
                placeholder='New Task'
                value ={title}
                onChange = {(e) => setTitle(e.target.value)}
            />
            </form>
        </div>
     );
}
 
export default Home;