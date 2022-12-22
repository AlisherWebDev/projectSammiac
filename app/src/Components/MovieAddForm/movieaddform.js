import { Component } from "react";
import "./movieaddform.css";
class MovieAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      views: ''
    }
  }
  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    e.preventDefault()
  }

  addFormHandler = e =>{
    this.props.addForm({name: this.state.name, viewers: this.state.views})
    this.setState({
      name: '',
      views: ''
    })
    e.preventDefault()
  }


  render() {
    const {name, views} = this.state 
    return (
      <div className="movie-add-form ">
        <h3> Yangi kino Qo 'shish</h3> <br />{" "}
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text" className="form-control new-post-label"
            placeholder="Kino nomini kiriting" 
            onChange={this.inputChangeHandler} 
            name='name'
            value={name}
            required
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marotaba korilgan?" 
            onChange={this.inputChangeHandler} 
            name='views'
            value={views}
            required
          />
          <button type="submit" className="btn btn-outline-dark"> Qo'shish</button>{" "}
        </form>{" "}
      </div>
    );
  }

};

export default MovieAddForm;
