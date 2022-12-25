import {Component} from 'react'
import "./searchpanel.css"
class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      term:''
    }
  }
  updateTermHandler = (e) =>{
      const term = e.target.value.toLowerCase()
      this.setState({term})
      this.props.updateTermHandler(term)
      
  }
  render(){
    return <input type='text'
     placeholder="Kinolarni qidirish"
     className='form-control p-3 search__input'
      onChange={this.updateTermHandler}
      value={this.state.term}
      />
  }


   
  
}

export default SearchPanel