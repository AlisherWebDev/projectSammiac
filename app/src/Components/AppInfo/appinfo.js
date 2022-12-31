import React from 'react'
import "./appinfo.css"

const AppInfo = ({allMoviesCount, favouriteCount}) => {
  return (
    <div className='appinfo'>
      <h2>Barcha kinolar soni: {allMoviesCount} </h2>
      <h2>Sevimli Film: {favouriteCount} </h2>
    </div>
  )                                     
}

export default AppInfo