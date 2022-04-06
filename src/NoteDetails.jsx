import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const NoteDetails = () => {



    const {id} = useParams();
    const {data: note, error, isLoading} = useFetch('http://localhost:8000/notes/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
         fetch('http://localhost:8000/notes/' + note.id, {
             method: 'DELETE'
         }).then(() => {
            navigate('/');
         })
    }

   
    return ( 
        <div className="note-details">
            

            {isLoading && <div>Loading please wait... </div>}   
            {error && <div> {error} </div>}
            {note && (
                <article>
                    <h2> {note.title} </h2>
                    <p>Lead By {note.task}</p>
                    <div>{note.desc} </div>
                    <button onClick={handleDelete}> Delete</button>
                </article>
            )}
           
        </div>
     );
}
 
export default NoteDetails; 