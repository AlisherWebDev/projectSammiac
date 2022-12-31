import {Component} from 'react'
import "./movielistitem.css"

const MovieListItem = ({name, viewers, onDelete, onToggleProp, favourite, like}) =>{


  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center  ${favourite && 'favourite'} ${like && 'like'}`} >
        <span onClick={onToggleProp} data-toggle='like' className='list-group-item-label'>{name}</span>
        <input type="number" className='list-group-item-input' defaultValue={viewers} />
        <div className='d-flex align-items-center'>
            <button type="button" className='btn-cookie btn-sm' onClick={onToggleProp} data-toggle="favourite" >
            <i className="fa-solid fa-cookie"></i>
            </button>
            <button type="button" onClick={onDelete}
             className='btn-trash btn-sm'>
                <i className='fas fa-trash' />
            </button>
            <i className="fa-solid fa-star "></i>
        </div>
    </li>
  )
}

export default MovieListItem