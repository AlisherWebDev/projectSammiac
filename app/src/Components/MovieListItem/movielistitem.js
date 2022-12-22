import {Component} from 'react'
import "./movielistitem.css"

class MovieListItem extends Component{
  constructor(props){
    super(props)
    this.state = {favourite:false, like:false}
  }
  onFavourite = () =>{
    this.setState(({favourite}) =>({favourite:!favourite}) )
  }
  onLike = () =>{
    this.setState(({like}) => ({like: !like}))
  }
  render(){
    const{name, viewers, onDelete} = this.props
    const{favourite, like } = this.state
    return (
      <li className={`list-group-item d-flex justify-content-between align-items-center  ${favourite && 'favourite'} ${like && 'like'}`} >
          <span onClick={this.onLike} className='list-group-item-label'>{name}</span>
          <input type="number" className='list-group-item-input' defaultValue={viewers} />
          <div className='d-flex align-items-center'>
              <button type="button" className='btn-cookie btn-sm' onClick={this.onFavourite}>
              <i className="fa-solid fa-cookie"></i>
              </button>
              <button type="button" className='btn-trash btn-sm'>
                  <i className='fas fa-trash' onClick={onDelete}/>
              </button>
              <i className="fa-solid fa-star "></i>
          </div>
      </li>
    )
  }
}



export default MovieListItem