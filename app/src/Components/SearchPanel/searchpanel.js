import {useState} from 'react'
import "./searchpanel.css"

const SearchPanel = (props) =>{
  const [term, setTerm] = useState('')

  //==========updateTermHandler
  const updateTermHandler = (e) =>{
    const term = e.target.value.toLowerCase()
    setTerm(term)
    props.updateTermHandler(term)
  }
  return <input type='text'
  placeholder="Kinolarni qidirish"
  className='form-control p-3 search__input mb-3'
   onChange={updateTermHandler}
   value={term}
   />
}


export default SearchPanel