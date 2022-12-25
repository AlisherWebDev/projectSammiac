import { Component } from "react";
import "./app.css"
import AppInfo from "../AppInfo/appinfo";
import SearchPanel from "../SearchPanel/searchpanel"
import AppFilter from "../AppFilter/appfilter"
import MovieList from "../MovieList/movielist"
import MovieAddForm from "../MovieAddForm/movieaddform"
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
    constructor (props){
        super(props)
        this.state = {
            data: [
                {
                    id: 1,name: "Sherlock Holmes", viewers: 934,favourite: false, like:true
                },
                {
                    id: 2,name: "Venzday Adamslar oilasi", viewers: 576, favourite: false, like:true
                 },
                {
                    id: 3, name: "Qat'iyat", viewers: 857,favourite: false, like:true
                },
                {
                    id: 4, name: "Forrest Gamp", viewers: 587,favourite: false, like:false
                },
                
            ],
            term: '',
            filter: 'all'
        }
    }
     
    onDelete = id => {
       this.setState(({data}) =>({
        data: data.filter(c => c.id !== id)
       }
       ));
    }

    addForm = (item) => {

        this.setState(({data}) =>({
            data: [...data, {...item, id: uuidv4()}]
        }))
                
    }
// ========== SEARCHHANDLER ==================
    searchHandler = (arr, term) => {
        if(term.length === 0){
            return arr
        } 
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }
// ========== UPDATEtERMhANDLER ==================
    updateTermHandler = (term) =>  this.setState({term})
        // ========== UpdatFilterHandler ==================
    updateFilterHandler = (filter) => (this.setState({filter}))
    // ========== filterHandler ==================
    filterHandler = (arr, filter) =>{
        switch (filter){
            case "popular": return arr.filter(c => (c.like))
            case "mostViewers": return arr.filter(c => c.viewers > 600)

            default: return arr
        }
    }


    render(){ 
        const{data, term, filter,} = this.state
        const visibleData = this.filterHandler(this.searchHandler(data, term), filter) 
        return(

            <div className="app">
                <div className="content">
                    <AppInfo /> 
                    <div className="appinfo">
                        <SearchPanel updateTermHandler = {this.updateTermHandler} />
                        <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
                    </div>
                    <MovieList data={visibleData} onDelete = {this.onDelete} /> 
                    <MovieAddForm addForm= {this.addForm} />
    
                </div>
            </div>
        )
    }
    
}
export default App