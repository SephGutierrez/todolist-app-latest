// import { useState, useEffect } from "react";
import NoteList from "./NoteList";
import useFetch from "./useFetch";

const Home = () => {

   //npx json-server --watch data/db.json --port 8000
   const {data: notes, isLoading, error} = useFetch('http://localhost:8000/notes');
   

   
    return ( 
        <div className="home">

           
            {error && <div> {error} </div>}
            {isLoading && <div> Loading please wait... </div>}
           {notes && <NoteList notes = {notes} title = 'All Notes!' />}
           
        </div>
     );

}
 
export default Home;    

