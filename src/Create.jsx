import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [task, setTask] = useState('Paulo');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {title, desc, task};
        setIsLoading(true);

        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            console.log('new note added');
            setIsLoading(false);
            navigate('/'); 
        })
        
    }
    

    return ( 
        <div className="create"> 
            <h2>Add a New TASK</h2>
            <form onSubmit={handleSubmit}> 
                <label> Note title: </label> 
                <input 
                type='text'
                required
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                 />
                 <label> Note desc :</label>
                <textarea
                 required
                 value={desc}
                 onChange= {(e) => setDesc(e.target.value)}
                 >     
                </textarea>
                <label>Note Task by: </label>
                <select
                 value={task}
                 onChange= {(e) => setTask(e.target.value)}
                >
                    <option value="Paulo">Paulo</option>
                    <option value="Jezrell">Jezrell</option>
                    <option value="Javes">Javes</option>
                    <option value="Jan Peter">Jan Peter</option>
                    <option value="Francis">Francis</option>
                    <option value="Vince">Vince</option>
                </select>
                { !isLoading && <button>Add Note</button>}
                { isLoading && <button disabled>Adding note... </button>}
                
            </form>
        </div>
     );
}
 
export default Create;