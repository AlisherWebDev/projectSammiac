import {useState } from "react";
import "./movieaddform.css";

const MovieAddForm = ({addForm}) =>{
  const [state, setState] = useState({name:'', views: ''})
   // ========== inputChangeHandler ==================
  const inputChangeHandler = e => {
    setState({...state,[e.target.name]: e.target.value })
  }
  // ========== addFormHandler ==================
  const addFormHandler = (e) =>{
    e.preventDefault()
    if(state.name === '' || state.views === '') return
    const data = {name:state.name, viewers:state.views}
    addForm(data)
    setState({name:'', views:''})
  }
    return (
      <div className="movie-add-form ">
        <h3> Yangi kino Qo 'shish</h3> <br />{" "}
        <form className="add-form d-flex" onSubmit={addFormHandler}>
          <input
            type="text" className="form-control new-post-label"
            placeholder="Kino nomini kiriting" 
            onChange={inputChangeHandler} 
            name='name'
            value={state.name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marotaba ko'rilgan?" 
            onChange={inputChangeHandler} 
            name='views'
            value={state.views}
          />
          <button type="submit" className="btn btn-outline-dark"> Qo'shish</button>{" "}
        </form>{" "}
      </div>
    );
  }


export default MovieAddForm;
