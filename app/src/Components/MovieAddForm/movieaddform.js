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
  inputChangeHandler = (e) => {
    this.setState = ({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="movie-add-form ">
        <h3> Yangi kino Qo 'shish</h3> <br />{" "}
        <div className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Kino nomini kiriting"
            onChange={this.inputChangeHandler}
            name='cinema'
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marotaba korilgan?"
            onChange={this.inputChangeHandler}
            name='views'
          />
          <button type="button" className="btn btn-outline-dark"> Qo'shish</button>{" "}
        </div>{" "}
      </div>
    );
  }

};

export default MovieAddForm;
